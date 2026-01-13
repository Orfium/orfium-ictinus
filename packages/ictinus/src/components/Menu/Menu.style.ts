import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { Menu, MenuItem } from 'react-aria-components';

import { vars } from '@orfium/tokens';
import type { ListRowSize } from '../List';
import { LIST_ITEM_HEIGHT } from '../List/utils';
import { body02, body03, label02, label03 } from '../Typography/Typography.config.styles';

export const popoverStyle = css`
  min-width: 150px;
  background: ${vars.color.background.default};
`;
export const MenuItemWrapper = styled(MenuItem)<{
  isDisabled?: boolean;
  isCompact?: boolean;
  rowSize?: ListRowSize;
}>(({ rowSize, isCompact, isDisabled, theme }) => {
  const height = rem(LIST_ITEM_HEIGHT[rowSize]);
  const padding = css`0 ${vars.spacing['5']}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${vars.color.palette.tertiary.base};

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
      background-color: ${!isDisabled ? vars.color.palette.tertiary.muted : undefined};
      cursor: ${!isDisabled ? 'pointer' : 'initial'};
    }
    span[role='presentation'] {
      align-items: center;
      ${itemTypographyStyle};
      font-weight: ${vars.weight.bold};
    }
    &[role='option'] {
      gap: ${rem(12)};
    }

    &[data-focus-visible] {
      background-color: ${vars.color.palette.tertiary.muted};
    }

    &[aria-selected='true'] {
      background-color: ${vars.color.palette.tertiary.muted};
      & > div {
        color: ${vars.color.text.default.active};
        ${isCompact ? label03(theme) : label02(theme)}
      }

      &[data-focus-visible] {
        background-color: ${vars.color.palette.tertiary.muted};
      }
    }

    opacity: ${isDisabled ? '0.5' : '1'};
    cursor: ${isDisabled ? 'not-allowed' : 'initial'};
  `;
});

export const MenuWrapper = styled(Menu)(
  () => css`
    background-color: ${vars.color.background.default};
    border-color: ${vars.color['border-color'].decorative.default};
    border-radius: ${vars['border-radius']['2']};
    box-shadow: ${vars['box-shadow']['2']};
    border-width: ${vars['border-width']['1']};
  `
);
