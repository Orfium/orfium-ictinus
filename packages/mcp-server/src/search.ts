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

function terms(query: string): string[] {
  return query.toLowerCase().trim().split(/\s+/).filter(Boolean);
}

function matchesAll(haystack: string, queryTerms: string[]): boolean {
  const lower = haystack.toLowerCase();
  return queryTerms.every((term) => lower.includes(term));
}

function vanillaFirst<T extends { api: 'vanilla' | 'legacy'; name: string }>(
  a: T,
  b: T,
): number {
  if (a.api !== b.api) return a.api === 'vanilla' ? -1 : 1;
  return a.name.localeCompare(b.name);
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

  const queryTerms = terms(query);
  if (queryTerms.length) {
    filtered = filtered.filter((c) => {
      const haystack = [c.name, c.description, c.api, ...(c.category ?? [])].join(' ');
      return matchesAll(haystack, queryTerms);
    });
  }

  return [...filtered].sort(vanillaFirst).slice(0, limit);
}

/** Filter prop definitions by name/description. Blank query returns all props. */
export function searchProps({
  limit = 40,
  props,
  query,
}: PropSearchOptions): Record<string, PropDefinition> {
  if (!query.trim()) return props;

  const queryTerms = terms(query);
  const matched = Object.entries(props).filter(([name, definition]) => {
    const haystack = [name, definition.description ?? '', definition.type].join(' ').toLowerCase();
    // Any term may match (e.g. "size variant" → both props)
    return queryTerms.some((term) => haystack.includes(term));
  });

  return Object.fromEntries(matched.slice(0, limit));
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

  const queryTerms = terms(query);
  if (queryTerms.length) {
    filtered = filtered.filter((icon) => {
      const haystack = [icon.name, icon.category, ...icon.keywords].join(' ');
      return matchesAll(haystack, queryTerms);
    });
  }

  return [...filtered].sort(vanillaFirst).slice(0, limit);
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
  const queryTerms = terms(query ?? '');

  const deprecations = new Map(
    data
      .filter((c) => c.deprecated)
      .map((c) => [c.name, c.deprecated as DeprecationInfo]),
  );

  let filtered = data;
  if (api) {
    filtered = filtered.filter((c) => c.api === api);
  }

  const matches = filtered.flatMap((component) =>
    (component.examples ?? []).flatMap((example) => {
      const hit = requested.some((name) => example.components.includes(name));
      const titleOk =
        !queryTerms.length || matchesAll(example.title, queryTerms);
      return hit && titleOk
        ? [{ api: component.api, component: component.name, example }]
        : [];
    }),
  );

  return [...matches]
    .sort((a, b) => {
      if (a.api !== b.api) return a.api === 'vanilla' ? -1 : 1;
      return a.example.title.localeCompare(b.example.title);
    })
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
