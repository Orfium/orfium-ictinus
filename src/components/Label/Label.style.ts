import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import type { SemanticTypographyKey } from 'theme/tokens/semantic/typography';
import { rem } from 'theme/utils';

import type { LabelProps } from './Label';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const LABEL_TRANSFORM_LEFT_SPACING = rem(3);

export const labelStyle =
  ({
    isAnimated,
    hasError,
    size = 'normal',
  }: Pick<LabelProps, 'isAnimated' | 'hasError' | 'size'>) =>
  (theme: Theme): SerializedStyles => {
    const typography: SemanticTypographyKey = size === 'normal' ? 'normal.body02' : 'normal.body03';

    return css`
      transition: transform 0.25s, opacity 0.25s ease-in-out;
      transform-origin: 0 0;
      width: 100%;
      position: absolute;
      user-select: none;
      transform: ${!isAnimated
        ? `translate(${LABEL_TRANSFORM_LEFT_SPACING}, 0)`
        : `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -95%) scale(0.8);`};
      color: ${hasError
        ? theme.tokens.colors.get('textColor.default.error')
        : theme.tokens.colors.get('textColor.default.secondary')};
      align-items: center;
      display: flex;
      top: 0;
      bottom: 0;
      right: ${rem(3)};
      margin: auto;
      white-space: nowrap;

      ${generateStylesFromTokens(theme.tokens.typography.get(typography))}
    `;
  };
