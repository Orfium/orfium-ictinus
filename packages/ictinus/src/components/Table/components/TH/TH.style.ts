import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import type { TableProps } from 'components/Table';
import { generateStylesFromTokens } from 'components/Typography/utils';
import { ACTIONS_CELL_WIDTH, contentAlignToFlex } from '../../constants';

import { rem, vars } from '@orfium/tokens';
import { lineEllipsis } from 'theme/functions';

const TH_HEIGHT = {
  sm: vars.sizing['11'],
  md: vars.sizing['13'],
  lg: vars.sizing['15'],
};

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
      height: ${TH_HEIGHT[rowSize]};
      align-content: center;
      box-sizing: border-box;
      padding: ${vars.spacing['4']} ${vars.spacing['6']};
      color: ${vars.color.text.default[hasVisibleOptions ? 'primary' : 'secondary']};
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

      [data-header-role='options'],
      [data-header-role='sorting-button'] {
        opacity: ${hasVisibleOptions ? 1 : 0};
      }

      &:hover,
      &:focus-visible {
        color: ${isSortable && vars.color.text.default.primary};
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

export const thContent = ({ contentAlign }: { contentAlign: string }): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    justify-content: ${contentAlignToFlex[contentAlign]};
    gap: ${vars.spacing['4']};
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
