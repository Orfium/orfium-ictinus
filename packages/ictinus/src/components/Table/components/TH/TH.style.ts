import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { ACTIONS_CELL_WIDTH, contentAlignToFlex } from '../../constants';
import type { TableProps } from 'components/Table';
import { generateStylesFromTokens } from 'components/Typography/utils';

import { lineEllipsis } from '~/theme/functions';
import { rem } from '~/theme/utils';

export const thContainer =
  ({
    isCheckbox,
    isExpandedButton,
    rowSize,
    width,
    hasVisibleOptions,
    isSortable,
    sx,
  }: Pick<TableProps<any>, 'rowSize'> & {
    isCheckbox?: boolean;
    isExpandedButton?: boolean;
    width?: number;
    hasVisibleOptions?: boolean;
    isSortable?: boolean;
    sx?: CSSObject;
  }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: ${isCheckbox || isExpandedButton
        ? rem(ACTIONS_CELL_WIDTH)
        : width
        ? `${width}%`
        : '100%'};
      height: ${theme.dimension.minHeight.get(`tableRow.${rowSize}`)};
      align-content: center;
      box-sizing: border-box;
      padding: ${theme.dimension.spacing.get('sm')} ${theme.dimension.spacing.get('lg')};
      color: ${theme.tokens.colors.get(
        `textColor.default.${hasVisibleOptions ? 'primary' : 'secondary'}`
      )};
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

      [data-header-role='options'],
      [data-header-role='sorting-button'] {
        opacity: ${hasVisibleOptions ? 1 : 0};
      }

      &:hover,
      &:focus-visible {
        color: ${isSortable && theme.tokens.colors.get('textColor.default.primary')};
        ${isSortable && generateStylesFromTokens(theme.tokens.typography.get('normal.label02'))};

        [data-header-role='options'],
        [data-header-role='sorting-button'] {
          opacity: 1;
        }
      }

      button:focus-visible {
        opacity: 1;
      }

      ${sx};
    `;
  };

export const thContent =
  ({ contentAlign }: { contentAlign: string }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      justify-content: ${contentAlignToFlex[contentAlign]};
      gap: ${theme.dimension.spacing.get('sm')};
      ${lineEllipsis}
    `;
  };

export const optionsContainer = (): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
};
