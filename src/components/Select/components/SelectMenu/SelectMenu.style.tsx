import { css, SerializedStyles } from '@emotion/react';
import { darken } from 'polished';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { SelectMenuProps } from './SelectMenu';
import { TextFieldProps } from 'components/TextField/TextField';

export const MAX_LARGE_HEIGHT = 277;
export const MAX_SMALL_HEIGHT = 265;

export const optionStyle =
  ({
    isSelected,
    size,
    hasNoResultsExist,
  }: { isSelected: boolean; hasNoResultsExist?: boolean } & Omit<TextFieldProps, 'ref'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      padding: ${theme.spacing.md};
      font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
      background-color: ${isSelected ? darken(0.07, theme.palette.white) : theme.palette.white};
      cursor: default;
      color: ${hasNoResultsExist ? theme.utils.getColor('lightGrey', 750) : 'initial'};
      text-align: ${hasNoResultsExist ? 'center' : 'initial'};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;

      &:hover {
        background-color: ${darken(0.03, theme.palette.white)};
      }
    `;
  };

export const menuStyle =
  ({ status, size, isVirtualized }: SelectMenuProps & Omit<TextFieldProps, 'ref'>) =>
  (theme: Theme): SerializedStyles =>
    css`
      background-color: ${theme.palette.white};
      border-radius: 4px;
      box-shadow: ${theme.elevation['02']};
      top: ${status !== 'normal' ? '70%' : '110%'};
      z-index: 500;
      position: absolute;
      max-height: ${rem(size === 'md' ? MAX_LARGE_HEIGHT : MAX_SMALL_HEIGHT)};
      overflow-y: ${isVirtualized ? 'hidden' : 'auto'};
      // TODO we need a technique to identify menu position left or right
      min-width: 100%;
      max-width: ${rem(620)};
    `;
