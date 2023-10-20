import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const separatorStyles =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      margin: auto ${theme.globals.spacing.get('6')};
      cursor: default;
    `;
