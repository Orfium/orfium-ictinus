import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { Menu, MenuItem } from 'react-aria-components';

import type { ListRowSize } from '../List';
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
  const height = rem(LIST_ITEM_HEIGHT[rowSize]);
  const padding = css`0 ${theme.dimension.spacing.get('md')}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${theme.tokens.colors.get('palette.tertiary.base')};

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
      background-color: ${!isDisabled
        ? theme.tokens.colors.get('palette.tertiary.muted')
        : undefined};
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
      background-color: ${theme.tokens.colors.get('palette.tertiary.muted')};
    }

    &[aria-selected='true'] {
      background-color: ${theme.tokens.colors.get('palette.tertiary.muted')};
      & > div {
        color: ${theme.tokens.colors.get('textColor.default.active')};
        ${isCompact ? label03(theme) : label02(theme)}
      }

      &[data-focus-visible] {
        background-color: ${theme.tokens.colors.get('palette.tertiary.muted')};
      }
    }

    opacity: ${isDisabled ? '0.5' : '1'};
    cursor: ${isDisabled ? 'not-allowed' : 'initial'};
  `;
});

export const MenuWrapper = styled(Menu)(({ theme }) => {
  return css`
    background-color: ${theme.tokens.colors.get('backgroundColor.default')};
    border-color: ${theme.tokens.colors.get('borderColor.decorative.default')};
    border-radius: ${theme.dimension.borderRadius.get('md')};
    box-shadow: ${theme.tokens.boxShadow.get('2')};
    border-width: ${theme.dimension.borderWidth.get('default')};
  `;
});
