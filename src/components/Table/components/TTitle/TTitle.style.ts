import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { ACTIONS_BAR_HEIGHT } from '../../constants';

import { rem } from '~/theme/utils';

export const tTitleContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      padding: ${theme.dimension.spacing.get('sm')} ${theme.dimension.spacing.get('lg')};
      border-bottom: ${theme.globals.borderWidth.get('1')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
      display: flex;
      justify-content: space-between;
      height: ${rem(ACTIONS_BAR_HEIGHT)};
      box-sizing: border-box;
    `;
  };

export const titleContent =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      gap: ${theme.dimension.spacing.get('lg')};
    `;
  };

export const actionsContent =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      gap: ${theme.dimension.spacing.get('lg')};
    `;
  };
