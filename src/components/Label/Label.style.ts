import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { BASE_SHADE } from 'theme/palette';
import { rem } from 'theme/utils';

import type { LabelProps } from './Label';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const LABEL_TRANSFORM_LEFT_SPACING = rem(3);

export const labelStyle =
  ({ isAnimated, hasError }: Pick<LabelProps, 'isAnimated' | 'hasError'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

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
        ? theme.utils.getColor('error', BASE_SHADE, 'normal')
        : tokens('textColor.inputColorAlt')};
      align-items: center;
      display: flex;
      top: 0;
      bottom: 0;
      right: ${rem(3)};
      margin: auto;
      white-space: nowrap;

      ${generateStylesFromTokens(tokens('normal.input'))}
    `;
  };
