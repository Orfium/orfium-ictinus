import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { TPaginationProps } from './TPagination';
import { ACTIONS_BAR_HEIGHT } from '../../constants';

export const paginationContainer =
  ({ isSticky }: Pick<TPaginationProps, 'isSticky'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${theme.tokens.colors.get('backgroundColor.default')};
      height: ${rem(ACTIONS_BAR_HEIGHT)};
      width: 100%;
      padding: ${theme.dimension.spacing.get('sm')} ${theme.dimension.spacing.get('3xl')};
      box-sizing: border-box;
      border-top: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
      border-bottom-left-radius: ${theme.dimension.borderRadius.get('md')};
      border-bottom-right-radius: ${theme.dimension.borderRadius.get('md')};

      ${isSticky &&
      `
        box-shadow: ${theme.tokens.boxShadow.get('5')},
        0 ${theme.dimension.borderWidth.get('default')}  0 0 ${theme.tokens.colors.get(
        'borderColor.decorative.default'
      )};
      `}
    `;
  };

export const itemsPerPageContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      gap: ${theme.dimension.spacing.get('sm')};
    `;
  };

export const counterContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      gap: ${theme.dimension.spacing.get('3xl')};
    `;
  };

export const counterWrapper =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      gap: ${theme.globals.spacing.get('3')};
    `;
  };

export const buttonsContainer = (): SerializedStyles => {
  return css`
    display: flex;
  `;
};
