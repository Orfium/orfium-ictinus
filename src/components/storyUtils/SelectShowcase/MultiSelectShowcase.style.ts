import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../../theme';

export const container =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      gap: ${theme.spacing.xl};
      flex-wrap: wrap;
      row-gap: ${rem(48)};
      margin-bottom: ${rem(48)};
    `;

export const wrapper = (): SerializedStyles =>
  css`
    width: 25%;
  `;
