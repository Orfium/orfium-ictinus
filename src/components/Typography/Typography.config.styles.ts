import { Theme } from 'theme';

import { generateStylesFromTokens } from './utils';

export const headline01 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('headline01'));

export const headline02 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('headline02'));

export const headline03 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('headline03'));

export const headline04 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('headline04'));

export const headline05 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('headline05'));

// titles
export const title01 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('title01'));

export const title02 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('title02'));

export const title03 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('title03'));

// labels
export const label01 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('label01'));

export const label02 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('label02'));

export const label03 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('label03'));

// body
export const body01 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('body01'));

export const body02 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('body02'));

export const body03 = (theme: Theme) =>
  generateStylesFromTokens(theme.tokens.typography.get('body03'));
