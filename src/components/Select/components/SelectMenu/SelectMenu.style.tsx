import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { darken } from 'polished';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import type { SelectMenuProps } from './SelectMenu';
import type { TextFieldProps } from 'components/TextField/TextField';

export const optionStyle =
  ({
    isSelected,
    hasNoResultsExist,
  }: { isSelected: boolean; hasNoResultsExist?: boolean } & Omit<
    TextFieldProps,
    'ref' | 'label'
  >) =>
  (theme: Theme): SerializedStyles => {
    return css`
      padding: ${theme.globals.spacing.get('6')};
      font-size: ${theme.globals.typography.fontSize.get('4')};
      background-color: ${isSelected
        ? darken(0.07, theme.globals.oldColors.white)
        : theme.globals.oldColors.white};
      cursor: default;
      color: ${hasNoResultsExist ? theme.utils.getColor('lightGrey', 750) : 'initial'};
      text-align: ${hasNoResultsExist ? 'center' : 'initial'};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;

      &:hover {
        background-color: ${darken(0.03, theme.globals.oldColors.white)};
      }
    `;
  };

export const menuStyle =
  ({
    status,
    isVirtualized,
    height,
    sx,
  }: SelectMenuProps & Omit<TextFieldProps, 'ref' | 'label'> & { height: number }) =>
  (theme: Theme): SerializedStyles =>
    css`
      background-color: ${theme.globals.oldColors.white};
      border-radius: 4px;
      box-shadow: ${theme.globals.elevation['02']};
      top: ${status?.type !== 'normal' ? '70%' : '110%'};
      z-index: 500;
      position: absolute;
      max-height: ${rem(height)};
      overflow-y: ${isVirtualized ? 'hidden' : 'auto'};
      // TODO we need a technique to identify menu position left or right
      min-width: 100%;
      max-width: ${rem(620)};
      ${sx};
    `;
