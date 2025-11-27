import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import type { TextFieldProps } from 'components/TextField/TextField';
import { darken } from 'polished';
import type { Theme } from 'theme';
import type { SelectMenuProps } from './SelectMenu';

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
      padding: ${vars.spacing['6']};
      font-size: ${vars['font-size']['4']};
      background-color: ${isSelected
        ? darken(0.07, theme.globals.oldColors.white)
        : theme.globals.oldColors.white};
      cursor: default;
      color: ${hasNoResultsExist ? vars.color.text.default.secondary : 'initial'};
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
  ({ status, isVirtualized, sx }: SelectMenuProps & Omit<TextFieldProps, 'ref' | 'label'>) =>
  (theme: Theme): SerializedStyles => css`
    background-color: ${theme.globals.oldColors.white};
    border-radius: 4px;
    box-shadow: ${theme.globals.elevation['02']};
    top: ${status?.type !== 'normal' ? '70%' : '110%'};
    z-index: 500;
    position: absolute;
    overflow-y: ${isVirtualized ? 'hidden' : 'auto'};
    // TODO we need a technique to identify menu position left or right
    min-width: 100%;
    max-width: ${rem(620)};
    max-height: inherit;
    ${sx};
  `;

export const innerMenuStyle = ({ height }: { height: number }) => css`
  max-height: ${rem(height)};
`;
