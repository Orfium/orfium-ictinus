import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { stateBackgroundColor } from '../Button/utils';
import { ButtonStyleProps } from './types';
import { getBackgroundColor, getTextColor, getBorder, getHoverBorder } from './utils';

export const wrapperStyle = () => () => css`
  position: relative;
  display: inline-block;
  height: ${rem(36)};
`;

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
};

export const buttonStyle = ({
  calculatedColor,
  activeCalculatedColor,
  buttonType,
  disabled,
  open,
  styleType,
  hasSelectedValue,
}: ButtonStyleProps) => (theme: Theme): SerializedStyles => {
  const boxShadow = styleType === 'elevated' && !hasSelectedValue ? theme.elevation['02'] : 'none';

  return css`
    font-size: ${theme.typography.fontSizes['13']};
    cursor: pointer;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    height: ${rem(36)};
    max-width: ${rem(270)};
    min-width: ${rem(150)};
    opacity: ${disabled ? 0.5 : 1};
    border-radius: ${theme.spacing.lg};
    transition: background-color 150ms linear;
    display: flex;
    align-items: center;
    ${boxShadow};
    color: ${getTextColor({
      theme,
      open,
      activeCalculatedColor,
      calculatedColor,
      hasSelectedValue,
    })};
    background-color: ${getBackgroundColor({
      theme,
      open,
      styleType,
      buttonType,
      hasSelectedValue,
      activeCalculatedColor,
      calculatedColor,
    })};
    border: ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
    })};
    &:hover,&:active {
      background-color:
        ${!disabled && !open
          ? stateBackgroundColor(theme, 'hover', calculatedColor, true)
          : undefined};
      border: ${getHoverBorder({
        styleType,
        theme,
        open,
        calculatedColor,
        activeCalculatedColor,
        hasSelectedValue,
      })};
      ${boxShadow},
    }
  `;
};

export const childrenWrapperStyle = () => (theme: Theme) => {
  return {
    marginLeft: 0,
    marginRight: theme.spacing.sm,
    maxWidth: rem(270),
  };
};

export const labelSpanStyle = (open: boolean, hasSelectedValue: boolean) => (theme: Theme) => {
  return {
    display: 'flex',
    fontWeight:
      open || hasSelectedValue ? theme.typography.weights.bold : theme.typography.weights.regular,
    maxWidth: rem(210),
    span: {
      marginLeft: theme.spacing.xsm,
      fontWeight: theme.typography.weights.bold,
    },
  };
};

export const valueSpanStyle = (): SerializedStyles => {
  return css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
  `;
};

export const menuStyle = () => (theme: Theme) => css`
  position: absolute;
  top: ${rem(48)};
  min-width: ${rem(280)};
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${theme.palette.white};
  box-shadow: ${theme.elevation['02']};
  border-radius: ${rem(4)};
  z-index: 1;
  overflow: hidden;
`;
