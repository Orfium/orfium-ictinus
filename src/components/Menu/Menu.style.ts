import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { Menu, MenuItem } from 'react-aria-components';

import { getMenuTokens } from './Menu.tokens';
import type { ListRowSize } from '../List';
import { getListItemTokens } from '../List/List.tokens';
import { LIST_ITEM_HEIGHT } from '../List/utils';
import { body02, body03, label02, label03 } from '../Typography/Typography.config.styles';

export const popoverStyle = css`
  min-width: 150px;
  background: #ffffff;
`;
export const MenuItemWrapper = styled(MenuItem)<{
  isDisabled?: boolean;
  isCompact?: boolean;
  rowSize?: ListRowSize;
}>(({ rowSize, isCompact, isDisabled, theme }) => {
  const listItemTokens = getListItemTokens(theme);
  const height = rem(LIST_ITEM_HEIGHT[rowSize]);
  const padding = css`0 ${listItemTokens('paddingHorizontal')}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${listItemTokens('backgroundColor.default')};

    & > div {
      ${itemTypographyStyle}
    }

    div[parenttype='Menu'] {
      display: flex;
      flex-direction: row;
      gap: ${rem(12)};
    }

    padding: ${padding};
    min-height: ${height};
    display: flex;
    flex-direction: row;

    &:hover {
      background-color: ${!isDisabled ? listItemTokens('backgroundColor.active') : undefined};
      cursor: ${!isDisabled ? 'pointer' : 'initial'};
    }
    span[role='presentation'] {
      align-items: center;
      ${itemTypographyStyle};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
    }
    &[role='option'] {
      gap: ${rem(12)};
    }

    &[data-focus-visible] {
      background-color: ${listItemTokens('backgroundColor.active')};
    }

    &[aria-selected='true'] {
      background-color: ${listItemTokens('backgroundColor.active')};
      & > div {
        color: ${listItemTokens('textColor.active')};
        ${isCompact ? label03(theme) : label02(theme)}
      }

      &[data-focus-visible] {
        background-color: ${listItemTokens('backgroundColor.active')};
      }
    }

    opacity: ${isDisabled ? '0.5' : '1'};
    cursor: ${isDisabled ? 'not-allowed' : 'initial'};
  `;
});

export const MenuWrapper = styled(Menu)(({ theme }) => {
  const tokens = getMenuTokens(theme);

  return css`
    background-color: ${tokens('backgroundColor')};
    border-color: ${tokens('borderColor')};
    border-radius: ${tokens('borderRadius')};
    box-shadow: ${tokens('boxShadow')};
    border-width: ${tokens('borderWidth')};
  `;
});
