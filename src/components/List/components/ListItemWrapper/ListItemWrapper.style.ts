import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'theme/utils';

import { ListRowSize } from '../../types';
import { COMPACT_LIST_ITEM_HEIGHT, NORMAL_LIST_ITEM_HEIGHT } from '../../utils';
import { ListItemTextWrapper } from '../ListItemText/ListItemText.style';
import { body02, label02, body03, label03 } from 'components/Typography/Typography.config.styles';

export const ListItemWrapperStyled = styled('li', { target: '' })<{
  rowSize?: ListRowSize;
  isDisabled: boolean;
}>(({ rowSize, isDisabled, theme }) => {
  const isCompact = rowSize === 'compact';
  const height = isCompact ? rem(COMPACT_LIST_ITEM_HEIGHT) : rem(NORMAL_LIST_ITEM_HEIGHT);
  const padding = css`0 ${theme.globals.spacing.get('5')}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${theme.globals.oldColors.white};
    ${ListItemTextWrapper} {
      ${itemTypographyStyle};
    }

    span[role='presentation'] {
      padding: ${padding};
      min-height: ${height};
      align-items: center;
      display: flex;
      ${itemTypographyStyle};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
    }
    &[role='option'] {
      padding: ${padding};
      min-height: ${height};
      display: flex;
      flex-direction: row;
      gap: ${rem(12)};

      &:hover {
        background-color: ${!isDisabled ? theme.utils.getColor('lightGrey', 50) : undefined};
        cursor: ${!isDisabled ? 'pointer' : 'initial'};
      }
    }

    &[data-focus-visible] {
      background-color: ${theme.utils.getColor('lightGrey', 50)};
    }

    &[aria-selected='true'] {
      background-color: ${theme.utils.getColor('blue', 50)};
      ${ListItemTextWrapper} {
        color: ${theme.utils.getColor('blue', 550)};
        ${isCompact ? label03(theme) : label02(theme)}
      }

      &[data-focus-visible] {
        background-color: ${theme.utils.getColor('lightGrey', 50)};
      }
    }

    opacity: ${isDisabled ? '0.5' : '1'};
    cursor: ${isDisabled ? 'not-allowed' : 'initial'};
  `;
});
