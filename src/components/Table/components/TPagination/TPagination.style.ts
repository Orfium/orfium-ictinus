import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { TPaginationProps } from './TPagination';

/** @TODO replace all styles with tokens */

export const paginationContainer =
  ({ isSticky }: Pick<TPaginationProps, 'isSticky'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${theme.tokens.colors.get('backgroundColor.default')};
      height: ${rem(44)};
      width: 100%;
      padding: 8px 16px;
      box-sizing: border-box;
      border-top: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      ${isSticky &&
      `
        box-shadow: ${theme.tokens.boxShadow.get('5')},
        0 1px 0 0 ${theme.tokens.colors.get('borderColor.decorative.default')};
      `}
    `;
  };

export const itemsPerPageContainer = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: 8px;
  `;
};

export const counterContainer = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: 32px;
  `;
};

export const counterWrapper = (): SerializedStyles => {
  return css`
    display: flex;
    gap: 4px;
  `;
};

export const buttonsContainer = (): SerializedStyles => {
  return css`
    display: flex;
  `;
};
