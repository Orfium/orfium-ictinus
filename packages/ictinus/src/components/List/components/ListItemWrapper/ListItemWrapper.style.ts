import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rem, vars } from '@orfium/tokens';

import { body02, body03, label02, label03 } from 'components/Typography/Typography.config.styles';
import type { ListRowSize } from '../../types';
import { LIST_ITEM_HEIGHT } from '../../utils';

export const ListItemWrapperStyled = styled('li', { target: '' })<{
  rowSize?: ListRowSize;
  isDisabled: boolean;
}>(({ rowSize = 'normal', isDisabled, theme }) => {
  const isCompact = rowSize === 'compact';
  const height = rem(LIST_ITEM_HEIGHT[rowSize]);
  const padding = css`0 ${vars.spacing['5']}`;
  const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

  return css`
    background-color: ${vars.color.palette.tertiary.base};

    & > div {
      ${itemTypographyStyle}
    }

    span[role='presentation'] {
      padding: ${padding};
      min-height: ${height};
      align-items: center;
      display: flex;
      ${itemTypographyStyle};
      font-weight: ${vars.weight.bold};
    }
    &[role='option'] {
      padding: ${padding};
      min-height: ${height};
      display: flex;
      flex-direction: row;
      gap: ${rem(12)};

      &:hover {
        background-color: ${!isDisabled ? vars.color.palette.tertiary.muted : undefined};
        cursor: ${!isDisabled ? 'pointer' : 'initial'};
      }
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
