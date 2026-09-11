import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const packageRoot = path.join(__dirname, '..');

export const dataPath = path.join(__dirname, 'data.json');

export const packageJsonPath = path.join(packageRoot, 'package.json');

export const packageInfo = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')) as {
  name: string;
  version: string;
};

export const log = (...message: unknown[]) => {
  // console.error avoids corrupting the MCP stdio JSON-RPC stream
  console.error('[Ictinus MCP]', ...message);
};
