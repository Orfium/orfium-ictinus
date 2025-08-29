import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from '@orfium/tokens';

import type { Theme } from '../../../theme';

export const visualContainer =
  () =>
    (theme: Theme): SerializedStyles =>
      css`
        padding: ${theme.globals.spacing.get('6')};
      `;


export const descriptionContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-top: ${theme.globals.spacing.get('4')};
      max-height: ${rem(180)};
      overflow: auto;
      width: ${rem(547)};
    `;
