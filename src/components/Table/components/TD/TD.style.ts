import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { ACTIONS_CELL_WIDTH, contentAlignToFlex } from '../../constants';
import type { ContentAlign, TableProps } from 'components/Table';

import { rem } from '~/theme/utils';

export const simpleTdContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      border-bottom: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };

export const tdContainer =
  ({
    rowSize,
    width,
    isCheckbox,
    isExpandedButton,
    sx,
  }: Pick<TableProps<any>, 'rowSize'> & {
    isCheckbox?: boolean;
    isExpandedButton?: boolean;
    width?: number;
    isLastCell?: boolean;
    sx?: CSSObject;
  }) =>
  (theme: Theme): SerializedStyles => {
    const getWidth = () => {
      if (isCheckbox || isExpandedButton) {
        return rem(ACTIONS_CELL_WIDTH);
      }

      if (width) {
        return `${width}%`;
      }

      return '100%';
    };

    return css`
      width: ${getWidth()};
      height: ${theme.dimension.minHeight.get(`tableRow.${rowSize}`)};
      padding: ${theme.dimension.spacing.get('sm')} ${theme.dimension.spacing.get('lg')};
      border-bottom: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
      box-sizing: border-box;
      align-content: center;

      ${sx};
    `;
  };

export const tdContent = ({ contentAlign }: { contentAlign: ContentAlign }): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    justify-content: ${contentAlignToFlex[contentAlign]};
  `;
};
