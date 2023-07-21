import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { ListRowSize } from '../types';

export const listItemStyle =
  ({
    isGroupItem = false,
    isHighlighted,
    isDisabled,
  }: {
    isGroupItem?: boolean;
    isHighlighted: boolean;
    isDisabled: boolean;
  }) =>
  (theme: Theme): SerializedStyles => {
    const padding = css`0 ${theme.globals.spacing.get('6')} 0px ${theme.globals.spacing.get('6')}`;
    const itemHeight = rem(56);

    return css`
      min-height: ${isGroupItem ? undefined : itemHeight};
      color: ${theme.tokens.textColor.get('light.primary')};
      font-size: ${theme.globals.typography.fontSize.get('4')};
      background-color: ${theme.globals.colors.white};
      display: flex;
      flex-direction: column;
      //align-items: center;
      padding: ${isGroupItem ? undefined : padding};
      font-weight: ${isGroupItem ? 'bold' : 'initial'};

      ${isHighlighted && 'font-weight: 500;'}
      &[role='option'] {
        cursor: pointer;
      }

      > span {
        align-items: center;
        display: flex;
        // move styling inside span which is the header when section
        min-height: ${itemHeight};
        padding: ${padding};
        color: ${theme.tokens.textColor.get('light.secondary')};
      }

      &[data-focus-visible] {
        background-color: ${theme.utils.getColor('lightGrey', 50)};
      }

      &[aria-selected='true'] {
        background-color: ${theme.utils.getColor('blue', 50)};
        color: ${theme.utils.getColor('blue', 550)};
        font-weight: ${theme.globals.typography.fontWeight.get('medium')};

        &[data-focus-visible] {
          background-color: ${theme.utils.getColor('lightGrey', 50)};
        }
      }

      &[aria-disabled] {
        color: var(--text-color-disabled);
      }

      strong {
        font-weight: bold;
      }

      &[role='option']:hover {
        background-color: ${theme.utils.getColor('lightGrey', 50)};
      }

      ${isDisabled &&
      `
        opacity: 0.5;
        cursor: not-allowed;
    `}
    `;
  };

export const contentStyle = (): SerializedStyles => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: inherit;
  flex: 1;
  flex-direction: row;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
  }
`;
