import { css, SerializedStyles } from '@emotion/core';

import { Props } from './TextArea';
import { Theme } from '../../theme';
import { Props as TextInputWrapperProps } from '../utils/TextInputWrapper/TextInputWrapper';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

export const inputStyle = ({
  label,
  placeholder,
  size,
  dark,
  resizeEnabled,
}: Props & TextInputWrapperProps) => (theme: Theme): SerializedStyles => css`
  background: transparent;
  border: none;
  color: ${dark ? theme.palette.white : theme.palette.black};
  display: block;
  position: relative;
  top: ${label && '7px'};
  width: 100%;
  z-index: 1;
  font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  text-overflow: ellipsis;
  resize: ${!resizeEnabled ? 'none' : 'both'};

  & + label {
    font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${!label && placeholder ? theme.utils.getColor('lightGray', 600) : 'transparent'};
  }

  &:not(:focus):placeholder-shown {
    & + label {
      font-weight: normal;
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transform: translate(${LABEL_TRANSFORM_LEFT_SPACING}px, -35%) scale(0.8);
      font-weight: ${theme.typography.weights.bold};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
