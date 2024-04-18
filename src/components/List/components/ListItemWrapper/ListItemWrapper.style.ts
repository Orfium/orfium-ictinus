import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'theme/utils';

import type { ListRowSize } from '../../types';
import { LIST_ITEM_HEIGHT } from '../../utils';
import { body02, label02, body03, label03 } from 'components/Typography/Typography.config.styles';

export const ListItemWrapperStyled = styled('li', { target: '' })<{
  rowSize?: ListRowSize;
  isDisabled: boolean;
}>(({ rowSize = 'normal', isDisabled, theme }) => {
  const isCompact = rowSize === 'compact';
  const height = rem(LIST_ITEM_HEIGHT[rowSize]);
  const padding = css`0 ${theme.dimension.spacing.get('md')}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${theme.tokens.colors.get('palette.tertiary.base')};

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
        background-color: ${!isDisabled
          ? theme.tokens.colors.get('palette.tertiary.muted')
          : undefined};
        cursor: ${!isDisabled ? 'pointer' : 'initial'};
      }
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
