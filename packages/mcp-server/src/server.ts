import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import {
  getAllComponents,
  getAllGuides,
  getAllIcons,
  getComponent,
  getComponentsByName,
  getGuide,
  getTokens,
} from './loaders.js';
import { packageInfo } from './paths.js';
import { searchComponents, searchExamples, searchIcons, searchProps } from './search.js';
import type { ComponentInfo } from './types.js';

const tokenCategories = [
  'colors',
  'spacing',
  'sizing',
  'borderRadius',
  'borderWidth',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'letterSpacing',
  'lineHeight',
  'semanticColors',
  'boxShadow',
] as const;

function synthesizeExample(component: ComponentInfo) {
  const propEntries = Object.entries(component.props)
    .filter(([, def]) => def.defaultValue != null)
    .slice(0, 3);
  const attrs = propEntries
    .map(([name, def]) => {
      const value = def.defaultValue!;
      if (def.type === 'boolean') return value === 'true' ? ` ${name}` : '';
      return ` ${name}="${value}"`;
    })
    .join('');

  return {
    title: 'starter',
    code: `${component.import}\n\n<${component.name}${attrs}>Label</${component.name}>`,
  };
}

export const server = new McpServer({
  name: 'ictinus',
  version: packageInfo.version,
});

server.registerTool(
  'get_component',
  {
    description: `Get information about an Ictinus component. Returns description, import statement, api (vanilla|legacy), prop definitions (type/default), and a starter example.

Use optional "props" to search prop definitions by name/description.
Use optional "api" to force vanilla or legacy when both exist.

Prefer vanilla (@orfium/ictinus/vanilla) for new code.`,
    inputSchema: {
      name: z.string().describe('Component name (e.g. "Button", "InlineAlert", "Tooltip")'),
      props: z
        .string()
        .optional()
        .describe(
          'Search query for props (e.g. "size variant", "isDisabled"). Omit to return all prop definitions.',
        ),
      api: z
        .enum(['vanilla', 'legacy'])
        .optional()
        .describe('Disambiguate when both APIs exist. Defaults to vanilla if available.'),
    },
  },
  ({ name, props: propsQuery, api }) => {
    const matches = getComponentsByName(name);
    const component = getComponent(name, api);

    if (!component) {
      return {
        content: [
          {
            type: 'text' as const,
            text: `Component "${name}" not found.\n\nUse search_components to browse available components.`,
          },
        ],
        isError: true,
      };
    }

    const alternatives = matches
      .filter((c) => c.id !== component.id)
      .map((c) => ({ id: c.id, api: c.api, import: c.import }));

    const props =
      propsQuery?.trim()
        ? searchProps({ props: component.props, query: propsQuery })
        : component.props;

    const starter = component.examples?.[0];
    const example = starter
      ? {
          title: starter.title,
          code: starter.code?.[0]?.content?.slice(0, 1500),
        }
      : synthesizeExample(component);

    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({
            id: component.id,
            name: component.name,
            api: component.api,
            description: component.description,
            import: component.import,
            deprecated: component.deprecated,
            category: component.category,
            examples: component.examples?.map((e) => e.title),
            example,
            props,
            alternatives: alternatives.length ? alternatives : undefined,
          }),
        },
      ],
    };
  },
);

server.registerTool(
  'search_components',
  {
    description:
      'Search Ictinus components by name, description, or category. Use get_component for details and get_patterns for composition examples.',
    inputSchema: {
      query: z
        .string()
        .optional()
        .default('')
        .describe('Search query. Empty lists components (optionally filtered).'),
      category: z
        .string()
        .optional()
        .describe(
          'Filter: form, layout, navigation, feedback, overlay, data-display, actions, display, theming',
        ),
      api: z.enum(['vanilla', 'legacy']).optional().describe('Filter by API surface'),
      limit: z.number().optional().default(8).describe('Max results (default 8)'),
    },
  },
  ({ query, category, api, limit }) => {
    const results = searchComponents({
      query: query ?? '',
      category,
      api,
      limit,
      components: getAllComponents(),
    }).map((c) => ({
      id: c.id,
      name: c.name,
      api: c.api,
      description: c.description,
      import: c.import,
      ...(c.deprecated ? { deprecated: c.deprecated } : {}),
    }));

    return {
      content: [{ type: 'text' as const, text: JSON.stringify(results) }],
    };
  },
);

server.registerTool(
  'get_patterns',
  {
    description:
      'Find Storybook usage examples showing how Ictinus components are composed. Call before writing JSX that combines components. Vanilla examples rank higher by default.',
    inputSchema: {
      components: z
        .string()
        .describe('Space-separated component names (e.g. "Button Icon", "Modal")'),
      query: z.string().optional().describe('Filter example titles (e.g. "disabled", "loading")'),
      api: z
        .enum(['vanilla', 'legacy'])
        .optional()
        .describe('Filter by API. Omit to prefer vanilla ranking.'),
      limit: z.number().min(1).max(10).optional().default(5),
    },
  },
  ({ components, query, api, limit }) => ({
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(
          searchExamples({
            components,
            query,
            api,
            limit,
            data: getAllComponents(),
          }),
        ),
      },
    ],
  }),
);

server.registerTool(
  'get_tokens',
  {
    description:
      'Get Ictinus / @orfium/tokens mappings (colors, spacing, sizing, borderRadius, typography, semanticColors, boxShadow). Use to convert hard-coded values to tokens.',
    inputSchema: {
      categories: z
        .array(z.enum(tokenCategories))
        .optional()
        .describe('Filter categories. Omit for all.'),
    },
  },
  ({ categories }) => {
    const tokens = getTokens();
    const result = categories
      ? Object.fromEntries(categories.map((cat) => [cat, tokens[cat]]))
      : tokens;

    return {
      content: [{ type: 'text' as const, text: JSON.stringify(result) }],
    };
  },
);

server.registerTool(
  'search_icons',
  {
    description: `Search icons. Prefer vanilla: import { EditIcon } from '@orfium/ictinus/vanilla'; <EditIcon />.
Legacy: import Icon from '@orfium/ictinus'; <Icon name="edit" />.`,
    inputSchema: {
      query: z.string().describe('Icon keyword or name (e.g. "arrow", "user", "play", "EditIcon")'),
      api: z
        .enum(['vanilla', 'legacy'])
        .optional()
        .describe('Filter by API. Defaults to ranking vanilla first.'),
      limit: z.number().optional().default(10),
    },
  },
  ({ query, api, limit }) => ({
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(
          searchIcons({ icons: getAllIcons(), query, api, limit }).map((icon) => ({
            name: icon.name,
            api: icon.api,
            category: icon.category,
            import: icon.import,
          })),
        ),
      },
    ],
  }),
);

server.registerTool(
  'get_guides',
  {
    description:
      'Setup and foundation guides (installation, theme, tokens, migration, vanilla-vs-legacy). Omit names to list available guides.',
    inputSchema: {
      names: z
        .string()
        .optional()
        .describe('Space-separated guide names. Omit to list all.'),
    },
  },
  ({ names }) => {
    const requested = names?.trim().split(/\s+/).filter(Boolean);

    if (!requested?.length) {
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(getAllGuides().map((g) => ({ name: g.name, title: g.title }))),
          },
        ],
      };
    }

    const guides = requested.map((name) => {
      const guide = getGuide(name);
      return guide
        ? { name: guide.name, title: guide.title, content: guide.content }
        : { name, error: `Guide not found: ${name}` };
    });

    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({
            available: getAllGuides().map((g) => g.name),
            guides,
          }),
        },
      ],
    };
  },
);
