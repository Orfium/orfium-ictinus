import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as z from 'zod/v3';

import pkg from '../package.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_PATH = path.join(__dirname, '../docs');

const log = (...message: string[]) => {
  // Using console.error to prevent conflicts with the mcp server which uses stdio to communicate with the client
  console.error('[ICTINUS MCP]', ...message);
};

const fetchRoute = (route: string) => {
  const filePath = path.join(DOCS_PATH, route);

  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
};

const server = new McpServer({
  name: 'ictinus',
  version: pkg.version,
});

server.registerTool(
  'list-ictinus-routes',
  {
    title: 'List Ictinus Routes',
    description:
      'Lists all available documentation routes for the Ictinus Design System. Call this FIRST before requesting specific documentation to see what routes are available.',
    inputSchema: {},
    outputSchema: {
      routes: z.string(),
    },
  },
  async () => {
    const content = fetchRoute(path.join('routes.txt'));

    if (!content) {
      return {
        content: [{ type: 'text', text: 'Error: No routes found' }],
        isError: true,
      };
    }

    return {
      content: [{ type: 'text', text: content }],
      structuredContent: { routes: content },
    };
  }
);

server.registerTool(
  'get-ictinus-doc',
  {
    title: 'Get Ictinus Documentation',
    description: 'Get a specific Ictinus doc route based on the routes available from list-routes',
    inputSchema: {
      route: z
        .string()
        .describe(
          'The route to the Ictinus docs. The path should always have a /<route> format and end in .txt'
        ),
    },
    outputSchema: {
      content: z.string(),
    },
  },
  async ({ route }) => {
    const content = fetchRoute(route);

    if (!content) {
      return {
        content: [{ type: 'text', text: `Error: route ${route} not found` }],
        isError: true,
      };
    }

    return {
      content: [{ type: 'text', text: content }],
      structuredContent: { content },
    };
  }
);

const transport = new StdioServerTransport();

log(`Starting MCP Server version ${pkg.version}`);

await server.connect(transport);
