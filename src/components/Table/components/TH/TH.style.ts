import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { getMinHeight } from '../TD/TD.style';
import type { TableProps } from 'components/Table';
import { generateStylesFromTokens } from 'components/Typography/utils';

/** @TODO replace all css with tokens */

export const thContainer =
  ({
    rowSize,
    width,
    hasVisibleOptions,
    sx,
  }: Pick<TableProps<any>, 'rowSize'> & {
    width?: number;
    hasVisibleOptions?: boolean;
    sx?: CSSObject;
  }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: ${width ? `${width}%` : '100%'};
      height: ${getMinHeight(rowSize)(theme)};
      align-content: center;
      text-align: left;
      box-sizing: border-box;
      padding: 8px 16px;
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

      [data-header-role='options'] {
        opacity: ${hasVisibleOptions ? 1 : 0};
      }

      &:hover,
      &:focus-visible {
        [data-header-role='options'] {
          opacity: 1;
        }
      }

      ${sx};
    `;
  };

export const optionsContainer = (): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
};
