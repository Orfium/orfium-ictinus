import { css } from '@emotion/core';
import { rem } from 'polished';

import { Theme } from 'theme';

export const textFieldWrapper = () => (theme: Theme) => css`
  border-bottom: 1px solid ${theme.utils.getColor('lightCoolGray', 200)};
  
  div:first-of-type {
    outline: none;
    border: none;
    box-shadow: none;
    background-color: white;
  }
  
  input {
    border: none;
    
    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;

export const iconWrapper = () => () => css`
  display: flex;
  gap: ${rem(25)}
`;
