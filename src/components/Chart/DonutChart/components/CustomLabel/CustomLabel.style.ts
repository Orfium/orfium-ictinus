import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

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
      color: ${theme.utils.getColor('lightGrey', 650)};
      text-align: center;
    `;
