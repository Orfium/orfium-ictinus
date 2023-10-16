import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../../theme';

export const container =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      gap: ${theme.globals.spacing.get('9')};
      flex-wrap: wrap;
      row-gap: ${rem(48)};
      margin-bottom: ${rem(48)};
      height: ${rem(350)};
    `;

export const wrapper = (): SerializedStyles =>
  css`
    width: 45%;
  `;
