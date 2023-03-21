import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';

export const visualContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding: ${theme.spacing.md};
    `;

export const descriptionContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-top: ${theme.spacing.sm};
      max-height: ${rem(180)};
      overflow: auto;
      width: ${rem(547)};
    `;
