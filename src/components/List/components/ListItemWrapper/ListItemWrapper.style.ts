import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { ListRowSize } from '../../types';
import { ListItemTextWrapper } from '../ListItemText/ListItemText.style';
import { body02, label02, body03, label03 } from 'components/Typography/Typography.config.styles';

export const listItemWrapperStyle =
  ({ rowSize, isDisabled }: { rowSize?: ListRowSize; isDisabled: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const isCompact = rowSize === 'compact';
    const height = isCompact ? rem(40) : rem(52);
    const padding = css`0 ${theme.globals.spacing.get('5')}`;
    const itemTypographyStyle = isCompact ? body03(theme) : body02(theme);

    return css`
      background-color: ${theme.globals.colors.white};
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

      ${!isDisabled &&
      `
        &[role='option']:hover {
          background-color: ${theme.utils.getColor('lightGrey', 50)};
          cursor: pointer;
        }
      `}

      ${isDisabled &&
      `
        opacity: 0.5;
        cursor: not-allowed;
    `}
    `;
  };
