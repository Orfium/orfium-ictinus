import type {
  ComponentInfo,
  DeprecationInfo,
  Example,
  IconInfo,
  PropDefinition,
} from './types.js';

export interface SearchOptions {
  category?: string;
  components: ComponentInfo[];
  limit?: number;
  query: string;
  api?: 'vanilla' | 'legacy';
}

export interface PropSearchOptions {
  limit?: number;
  props: Record<string, PropDefinition>;
  query: string;
}

export interface IconSearchOptions {
  api?: 'vanilla' | 'legacy';
  icons: IconInfo[];
  limit?: number;
  query: string;
}

export interface ExampleSearchOptions {
  /** Prefer / filter by API. When omitted, vanilla examples rank higher. */
  api?: 'vanilla' | 'legacy';
  components: string;
  data: ComponentInfo[];
  limit?: number;
  query?: string;
}

export function searchComponents({
  api,
  category,
  components,
  limit = 5,
  query,
}: SearchOptions): ComponentInfo[] {
  let filtered = components;

  if (api) {
    filtered = filtered.filter((c) => c.api === api);
  }

  if (category) {
    const normalized = category.toLowerCase();
    filtered = filtered.filter((c) =>
      c.category?.some((cat) => cat.toLowerCase() === normalized),
    );
  }

  if (!query.trim()) {
    // Prefer vanilla when listing
    return [...filtered]
      .sort((a, b) => {
        if (a.api !== b.api) return a.api === 'vanilla' ? -1 : 1;
        return a.name.localeCompare(b.name);
      })
      .slice(0, limit);
  }

  return filtered
    .map((component) => ({
      component,
      score: calculateRelevanceScore({
        deprecated: Boolean(component.deprecated),
        description: component.description,
        keywords: [component.api, ...(component.category ?? [])],
        name: component.name,
        query,
      }),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.component);
}

export function searchProps({
  limit = 8,
  props,
  query,
}: PropSearchOptions): Record<string, PropDefinition> {
  // Blank query = no filter (same as omitting `props` on get_component).
  if (!query.trim()) return props;

  const results = Object.entries(props)
    .map(([name, definition]) => ({
      definition,
      name,
      score: calculateRelevanceScore({
        description: definition.description,
        name,
        query,
      }),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return Object.fromEntries(results.map(({ name, definition }) => [name, definition]));
}

export function searchIcons({
  api,
  icons,
  limit = 10,
  query,
}: IconSearchOptions): IconInfo[] {
  let filtered = icons;
  if (api) {
    filtered = filtered.filter((icon) => icon.api === api);
  }

  if (!query.trim()) {
    return [...filtered]
      .sort((a, b) => {
        if (a.api !== b.api) return a.api === 'vanilla' ? -1 : 1;
        return a.name.localeCompare(b.name);
      })
      .slice(0, limit);
  }

  return filtered
    .map((icon) => ({
      icon,
      score:
        calculateRelevanceScore({
          keywords: icon.keywords,
          name: icon.name,
          query,
        }) + (icon.api === 'vanilla' ? 15 : 0),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.icon);
}

export function searchExamples({
  api,
  components,
  data,
  limit = 5,
  query,
}: ExampleSearchOptions): Array<
  Pick<Example, 'code' | 'title'> & {
    api?: 'vanilla' | 'legacy';
    deprecated?: Array<{ name: string } & DeprecationInfo>;
  }
> {
  const requested = components.trim().split(/\s+/).filter(Boolean);
  const queryTerms = query
    ?.toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);

  const deprecations = new Map(
    data
      .filter((c) => c.deprecated)
      .map((c) => [c.name, c.deprecated as DeprecationInfo]),
  );

  let filtered = data;
  if (api) {
    filtered = filtered.filter((c) => c.api === api);
  }

  return filtered
    .flatMap((component) =>
      (component.examples ?? []).flatMap((example) => {
        const matches = requested.filter((c) => example.components.includes(c)).length;
        const titleOk =
          !queryTerms?.length ||
          queryTerms.some((term) => example.title.toLowerCase().includes(term));
        return matches > 0 && titleOk
          ? [{ api: component.api, component: component.name, deprecated: Boolean(component.deprecated), example, matches }]
          : [];
      }),
    )
    .map((entry) => ({
      ...entry,
      score:
        (queryTerms?.length
          ? queryTerms.filter((t) => entry.example.title.toLowerCase().includes(t)).length *
            50
          : 0) +
        entry.matches * 20 +
        (requested.includes(entry.component) ? 15 : 0) +
        (entry.api === 'vanilla' ? 40 : 0) -
        (entry.deprecated ? 30 : 0) -
        entry.example.components.length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ api: exampleApi, component, example }) => {
      const deprecated = example.components
        .filter((name) => deprecations.has(name))
        .map((name) => ({
          name,
          ...(deprecations.get(name) as DeprecationInfo),
        }));
      return {
        api: exampleApi,
        code: example.code,
        title: `${component}/${example.title}`,
        ...(deprecated.length ? { deprecated } : {}),
      };
    });
}

function calculateRelevanceScore({
  deprecated,
  description,
  keywords,
  name,
  query,
}: {
  deprecated?: boolean;
  description?: string;
  keywords?: string[];
  name: string;
  query: string;
}): number {
  const normalizedQuery = query.toLowerCase().trim();
  const normalizedName = name.toLowerCase();
  const normalizedDescription = description?.toLowerCase();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  if (normalizedName === normalizedQuery) return deprecated ? 80 : 100;

  let totalScore = 0;
  let matchedTerms = 0;

  for (const term of terms) {
    let termScore = 0;
    if (normalizedName === term) termScore = 100;
    else if (normalizedName.startsWith(term)) termScore = 75;
    else if (normalizedName.includes(term)) termScore = 50;
    else if (keywords?.some((kw) => kw.toLowerCase() === term)) termScore = 40;
    else if (keywords?.some((kw) => kw.toLowerCase().includes(term))) termScore = 30;
    else if (normalizedDescription?.includes(term)) termScore = 25;
    else if (fuzzyIncludes(normalizedName, term)) termScore = 10;

    if (termScore > 0) {
      matchedTerms++;
      totalScore += termScore;
    }
  }

  if (matchedTerms === 0) return 0;

  let score = (totalScore / matchedTerms) * (matchedTerms / terms.length);
  if (deprecated) score -= 20;
  return score;
}

function fuzzyIncludes(haystack: string, needle: string): boolean {
  let hi = 0;
  for (let ni = 0; ni < needle.length; ni++) {
    const ch = needle[ni];
    const found = haystack.indexOf(ch, hi);
    if (found === -1) return false;
    hi = found + 1;
  }
  return true;
}
