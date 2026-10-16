import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const VANILLA_PREFIX = '@orfium/ictinus/vanilla/';
export const LEGACY_PREFIX = '@orfium/ictinus/';

/** Internal / non-public pieces that still appear in export graphs. */
export const DOCS_SKIP = new Set([
  'ClickAwayListener',
  'NotificationsContainer',
  'NotificationVisual',
  'MultiTextFieldBase',
  'TextInputBase',
  'ButtonBase',
  'ButtonLoader',
  'sprinkles',
]);

export function getDocs() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/docs.json'), 'utf8'));
}

/** @param {string} displayName */
export function docsShortName(displayName) {
  if (displayName.startsWith(VANILLA_PREFIX)) {
    return displayName.slice(VANILLA_PREFIX.length);
  }
  if (displayName.startsWith(LEGACY_PREFIX)) {
    return displayName.slice(LEGACY_PREFIX.length);
  }
  return displayName;
}

/** @param {string} displayName */
export function resolveApi(displayName) {
  if (displayName.startsWith(VANILLA_PREFIX)) return 'vanilla';
  if (displayName.startsWith(LEGACY_PREFIX)) return 'legacy';
  return null;
}
