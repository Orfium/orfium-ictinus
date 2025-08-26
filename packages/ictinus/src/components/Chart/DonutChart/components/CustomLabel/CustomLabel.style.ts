import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const flexContainer = () => (): SerializedStyles =>
  css`
    display: flex;
    width: 100%;
    justify-content: center;
  `;

export const labelUnitStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      width: 80%;
      font-size: ${theme.globals.typography.fontSize.get('2')};
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
      text-align: center;
    `;
