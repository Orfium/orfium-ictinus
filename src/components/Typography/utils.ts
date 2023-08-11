import { css } from '@emotion/react';
import { SemanticTypographyKeys } from 'theme/tokens/semantic/typography';

/** Generates a css object with the values included in the value object */
export const generateStylesFromTokens = (value: Record<SemanticTypographyKeys, string>) => css`
  font-family: ${value.fontFamily};
  font-weight: ${value.fontWeight};
  line-height: ${value.lineHeight};
  font-size: ${value.fontSize};
  letter-spacing: ${value.letterSpacing};
`;
