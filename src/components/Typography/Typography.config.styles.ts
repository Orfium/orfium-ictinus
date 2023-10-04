import { Theme } from 'theme';
import { FontSpacing, SemanticTypographyKey } from 'theme/tokens/semantic/typography';

import { generateStylesFromTokens } from './utils';

export const headline01 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.headline01` as SemanticTypographyKey)
  );

export const headline02 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.headline02` as SemanticTypographyKey)
  );

export const headline03 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.headline03` as SemanticTypographyKey)
  );

export const headline04 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.headline04` as SemanticTypographyKey)
  );

export const headline05 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.headline05` as SemanticTypographyKey)
  );

// titles
export const title01 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.title01` as SemanticTypographyKey)
  );

export const title02 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.title02` as SemanticTypographyKey)
  );

export const title03 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.title03` as SemanticTypographyKey)
  );

// labels
export const label01 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.label01` as SemanticTypographyKey)
  );

export const label02 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.label02` as SemanticTypographyKey)
  );

export const label03 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.label03` as SemanticTypographyKey)
  );

export const label04 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.label04` as SemanticTypographyKey)
  );

// body
export const body01 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.body01` as SemanticTypographyKey)
  );

export const body02 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.body02` as SemanticTypographyKey)
  );

export const body03 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.body03` as SemanticTypographyKey)
  );

export const body04 = (theme: Theme, fontSpacing: FontSpacing = 'normal') =>
  generateStylesFromTokens(
    theme.tokens.typography.get(`${fontSpacing}.body04` as SemanticTypographyKey)
  );
