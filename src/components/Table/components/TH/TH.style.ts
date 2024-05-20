import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { getMinHeight } from '../TD/TD.style';
import type { TableProps } from 'components/Table';
import { generateStylesFromTokens } from 'components/Typography/utils';

/** @TODO replace all css with tokens */

export const thContainer =
  ({
    isCheckbox,
    rowSize,
    width,
    hasVisibleOptions,
    isSortable,
    sx,
  }: Pick<TableProps<any>, 'rowSize'> & {
    isCheckbox?: boolean;
    width?: number;
    hasVisibleOptions?: boolean;
    isSortable?: boolean;
    sx?: CSSObject;
  }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: ${isCheckbox ? '52px' : width ? `${width}%` : '100%'};
      height: ${getMinHeight(rowSize)(theme)};
      align-content: center;
      text-align: left;
      box-sizing: border-box;
      padding: 8px 16px;
      color: ${theme.tokens.colors.get(
        `textColor.default.${hasVisibleOptions ? 'primary' : 'secondary'}`
      )};
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

      [data-header-role='options'] {
        button {
          opacity: ${hasVisibleOptions ? 1 : 0};
        }
      }

      &:hover,
      &:focus-visible {
        color: ${isSortable && theme.tokens.colors.get('textColor.default.primary')};
        ${isSortable && generateStylesFromTokens(theme.tokens.typography.get('normal.label02'))};

        [data-header-role='options'] {
          button {
            opacity: 1;
          }
        }
      }

      button:focus-visible {
        opacity: 1;
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
