import fs from 'node:fs';

import { dataPath, log } from './paths.js';
import type { ComponentInfo, DesignTokens, Guide, IconInfo, McpData } from './types.js';

let cached: McpData | null = null;
let cachedMtimeMs = -1;

function loadData(): McpData {
  try {
    const mtimeMs = fs.statSync(dataPath).mtimeMs;
    if (cached && cachedMtimeMs === mtimeMs) return cached;

    cached = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as McpData;
    cachedMtimeMs = mtimeMs;
    return cached;
  } catch (error) {
    log(`Failed to load metadata from ${dataPath}`);
    throw error;
  }
}

function data(): McpData {
  return loadData();
}

export function getAllComponents(): ComponentInfo[] {
  return Object.values(data().components);
}

export function getAllGuides(): Guide[] {
  return Object.values(data().guides);
}

export function getAllIcons(): IconInfo[] {
  return Object.values(data().icons);
}

export function getComponent(name: string, api?: 'vanilla' | 'legacy'): ComponentInfo | null {
  const normalized = name.trim();
  const all = getAllComponents().filter(
    (c) =>
      c.name.toLowerCase() === normalized.toLowerCase() ||
      c.id.toLowerCase() === normalized.toLowerCase(),
  );

  if (all.length === 0) return null;
  if (api) return all.find((c) => c.api === api) ?? null;

  return all.find((c) => c.api === 'vanilla') ?? all[0] ?? null;
}

export function getComponentsByName(name: string): ComponentInfo[] {
  const normalized = name.trim().toLowerCase();
  return getAllComponents().filter(
    (c) => c.name.toLowerCase() === normalized || c.id.toLowerCase() === normalized,
  );
}

export function getGuide(name: string): Guide | null {
  return data().guides[name] ?? null;
}

export function getTokens(): DesignTokens {
  return data().tokens;
}
