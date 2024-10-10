import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import type { TabOrientation } from './types';

export const tagStyles =
  (isActive = false) =>
  (theme: Theme) =>
    css`
      border: none;
      background: ${theme.tokens.colors.get(
        `palette.${isActive ? 'primary' : 'primaryAlt'}.contrast`
      )};
      color: ${theme.tokens.colors.get(`textColor.${isActive ? 'inverted' : 'default'}.primary`)};
      transition: background 0.2s;
      transition: color 0.2s;
    `;

export const showcaseContent = (orientation: TabOrientation) => (theme: Theme) =>
  css`
    display: flex;
    flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
    gap: ${theme.globals.spacing.get('7')};
    padding: ${`${theme.globals.spacing.get('5')} ${
      orientation === 'horizontal' ? 0 : theme.globals.spacing.get('7')
    }`};
  `;
