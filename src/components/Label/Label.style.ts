import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { BASE_SHADE } from 'theme/palette';
import { rem } from 'theme/utils';

import { LabelProps } from './Label';

export const LABEL_TRANSFORM_LEFT_SPACING = rem(3);

export const labelStyle =
  ({ isAnimated, hasError }: Pick<LabelProps, 'isAnimated' | 'hasError'>) =>
  (theme: Theme): SerializedStyles =>
    css`
      transition: transform 0.25s, opacity 0.25s ease-in-out;
      transform-origin: 0 0;
      width: 100%;
      position: absolute;
      user-select: none;
      transform: ${!isAnimated
        ? `translate(${LABEL_TRANSFORM_LEFT_SPACING}, 0)`
        : `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -95%) scale(0.8);`};
      font-size: ${theme.globals.typography.fontSize.get('4')};
      font-weight: ${theme.globals.typography.fontWeight.get('regular')};
      color: ${hasError
        ? theme.utils.getColor('error', BASE_SHADE, 'normal')
        : theme.utils.getColor('lightGrey', 650)};
      align-items: center;
      display: flex;
      top: 0;
      bottom: 0;
      margin: auto;
      white-space: nowrap;
    `;
