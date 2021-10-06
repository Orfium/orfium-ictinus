import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { Props } from './TextField';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

export const iconWrapperStyle = ({ iconPosition }: { iconPosition: 'left' | 'right' }) => (
  theme: Theme
): SerializedStyles => css`
  line-height: 0.8;
  height: ${rem(16)};
  display: flex;
  align-items: center;
  margin-left: ${iconPosition === 'right' ? theme.spacing.sm : 'inherit'};
  margin-right: ${iconPosition === 'left' ? theme.spacing.sm : 0};
`;

export const inputStyle = ({ label, placeholder, size, dark }: Props) => (
  theme: Theme
): SerializedStyles => css`
  background: transparent;
  border: none;
  color: ${dark ? theme.palette.white : theme.palette.black};
  display: block;
  position: relative;
  top: ${label && rem('7px')};
  width: 100%;
  z-index: 1;
  font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  text-overflow: ellipsis;

  & + label {
    font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  }

  &:focus {
    //TODO: Revisit color in dark mode implementation
    color: ${theme.palette.black};
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
      transform: translate(${LABEL_TRANSFORM_LEFT_SPACING}, -35%) scale(0.8);
      font-weight: ${theme.typography.weights.bold};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
