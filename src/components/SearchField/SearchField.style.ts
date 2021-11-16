import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { Props as TextInputWrapperProps } from '../TextInputBase';

export const searchStyle = ({ size, dark }: Pick<TextInputWrapperProps, 'size' | 'dark'>) => (
  theme: Theme
): SerializedStyles => css`
  background: transparent;
  border: none;
  color: ${dark ? theme.palette.white : theme.utils.getColor('darkGrey', 850)};
  display: block;
  position: relative;
  width: 100%;
  z-index: 1;
  font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  text-overflow: ellipsis;

  ::placeholder,
  ::-ms-input-placeholder {
    color: ${theme.utils.getColor('lightGrey', 650)};
  }

  & + label {
    font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  }

  &:focus {
    //TODO: Revisit color in dark mode implementation
    color: ${theme.utils.getColor('darkGrey', 850)};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
