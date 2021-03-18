import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';
import { inputStyle } from '../../../TextField/TextField.style';
import { darken, lighten, rem } from 'polished';
import { themeFunctions } from '../../../../index';

const getBackground = (dark: boolean, theme: Theme) =>
  dark ? theme.utils.getColor('darkGray', 600) : theme.utils.getColor('lightGray', 100);

export const searchWrapper = (dark: boolean) => (theme: Theme): SerializedStyles => {
  const background = getBackground(dark, theme);

  return css`
    flex-grow: 1;
    max-width: 520px;
    ${themeFunctions.flex}
    ${themeFunctions.flexCenterVertical}
    height: ${rem(36)};
    background-color: ${background};
    padding-left: ${theme.spacing.md};

    &[aria-disabled="true"] {
      opacity: 0.5;
      pointer-events: none;
    }
    
    &:hover {
      background: ${dark ? lighten(0.03, background) : darken(0.03, background)};
    }

    &:focus-within {
      background: ${background};
    }
  `;
};

export const customInputStyle = (searchPlaceholder: string, dark: boolean) => (theme: Theme) => {
  const baseInputStyles = inputStyle({
    placeholder: searchPlaceholder,
    size: 'sm',
    dark,
    lean: true,
  })(theme);

  const rest = `
    border-radius: ${rem(4)};
      color: ${
        dark ? theme.utils.getColor('darkGray', 100) : theme.utils.getColor('lightGray', 600)
      };

  
    &:focus {
      color: ${dark ? theme.palette.white : theme.palette.black};
      outline: none;
    }
   
    &::placeholder {
        color: ${
          dark ? theme.utils.getColor('darkGray', 100) : theme.utils.getColor('lightGray', 600)
        };
       outline: none;
      }

  `;

  return css`
    ${baseInputStyles};
    ${rest};
  `;
};
