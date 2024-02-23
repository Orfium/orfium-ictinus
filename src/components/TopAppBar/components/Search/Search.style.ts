import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import { rem } from 'theme/utils';

import { themeFunctions } from '../../../../index';
import type { Theme } from '../../../../theme';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

const getBackground = (isDark: boolean, theme: Theme) =>
  isDark
    ? theme.tokens.colors.get('backgroundColor.invertedAlt')
    : theme.tokens.colors.get('backgroundColor.alt');

export const searchWrapper =
  (isDark: boolean) =>
  (theme: Theme): SerializedStyles => {
    const background = getBackground(isDark, theme);

    return css`
      flex-grow: 1;
      max-width: ${rem(520)};
      ${themeFunctions.flex}
      ${themeFunctions.flexCenterVertical}
    height: ${rem(36)};
      background-color: ${background};
      padding-left: ${theme.globals.spacing.get('6')};
      border-radius: ${theme.globals.spacing.get('3')};

      &[aria-disabled='true'] {
        opacity: 0.5;
        pointer-events: none;
      }

      &:hover {
        background: ${isDark ? lighten(0.03, background) : darken(0.03, background)};
      }

      &:focus-within {
        background: ${background};
      }
    `;
  };

export const customInputStyle = (searchPlaceholder: string, isDark: boolean) => (theme: Theme) => {
  const baseInputStyles = inputStyle({
    placeholder: searchPlaceholder,
  })(theme);

  const rest = `
    border-radius: ${rem(4)};
      color: ${isDark ? theme.tokens.colors.get('textColor.inverted.secondary') : undefined};

  
    &:focus {
      color: ${isDark ? theme.tokens.colors.get('textColor.inverted.primary') : undefined};
      outline: none;
    }
   
    &::placeholder {
        color: ${isDark ? theme.tokens.colors.get('textColor.inverted.secondary') : undefined};
       outline: none;
      }

  `;

  return css`
    ${baseInputStyles};
    ${rest};
  `;
};
