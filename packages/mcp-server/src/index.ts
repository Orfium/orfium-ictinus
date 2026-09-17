#!/usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { log, packageInfo } from './paths.js';
import { server } from './server.js';

const transport = new StdioServerTransport();

log(`Starting MCP Server version ${packageInfo.version}`);

await server.connect(transport);
