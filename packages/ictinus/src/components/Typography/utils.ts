import { css } from '@emotion/react';
import type { TypographyObject } from '@orfium/tokens';

/** Generates a css object with the values included in the value object */
export const generateStylesFromTokens = (value: TypographyObject) => css`
  font-family: ${value.fontFamily};
  font-weight: ${value.fontWeight};
  line-height: ${value.lineHeight};
  font-size: ${value.fontSize};
  letter-spacing: ${value.letterSpacing};
  text-transform: ${value?.textCase};
  text-decoration: ${value?.textDecoration};
`;
