import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';
import { inputStyle } from '../../../TextField/TextField.style';
import { rem } from 'polished';
import { themeFunctions } from '../../../../index';
import { wrapperStyle } from '../../../utils/TextInputWrapper/TextInputWrapper.style';

export const searchWrapper = (dark: boolean) => (theme: Theme): SerializedStyles => {
  const wrapperStyleDefaults = wrapperStyle({
    disabled: false,
    locked: false,
    status: 'normal',
    lean: true,
    dark,
  })(theme);

  return css`
    ${wrapperStyleDefaults};
    flex-grow: 1;
    max-width: 520px;
    ${themeFunctions.flex}
    ${themeFunctions.flexCenterVertical}
    height: ${rem(36)};
    padding-left: ${theme.spacing.md};
    &:focus {
      color: ${dark ? theme.palette.white : theme.palette.black};
      outline: none;
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
  
     
   
    &::placeholder {
        color: ${
          dark ? theme.utils.getColor('darkGray', 200) : theme.utils.getColor('lightGray', 600)
        };
      }
 

  `;

  return css`
    ${baseInputStyles};
    ${rest};
  `;
};
