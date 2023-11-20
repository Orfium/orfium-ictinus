import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'theme/utils';

import { ListRowSize } from '../../types';
import { LIST_ITEM_HEIGHT } from '../../utils';
import { getListItemTokens } from 'components/List/List.tokens';
import { body02, label02, body03, label03 } from 'components/Typography/Typography.config.styles';

export const ListItemWrapperStyled = styled('li', { target: '' })<{
  rowSize?: ListRowSize;
  isDisabled: boolean;
}>(({ rowSize = 'normal', isDisabled, theme }) => {
  const tokens = getListItemTokens(theme);

  const isCompact = rowSize === 'compact';
  const height = rem(LIST_ITEM_HEIGHT[rowSize]);
  const padding = css`0 ${tokens('paddingHorizontal')}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${tokens('backgroundColor.default')};

    & > div {
      ${itemTypographyStyle}
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
        background-color: ${!isDisabled ? tokens('backgroundColor.active') : undefined};
        cursor: ${!isDisabled ? 'pointer' : 'initial'};
      }
    }

    &[data-focus-visible] {
      background-color: ${tokens('backgroundColor.active')};
    }

    &[aria-selected='true'] {
      background-color: ${tokens('backgroundColor.active')};
      & > div {
        color: ${tokens('textColor.active')};
        ${isCompact ? label03(theme) : label02(theme)}
      }

      &[data-focus-visible] {
        background-color: ${tokens('backgroundColor.active')};
      }
    }

    opacity: ${isDisabled ? '0.5' : '1'};
    cursor: ${isDisabled ? 'not-allowed' : 'initial'};
  `;
});
