import { css } from '@emotion/core';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { stateBackgroundColor } from '../Button/utils';
import { ButtonStyleProps } from './types';
import { getBackgroundColor, getTextColor, getBorder } from './utils';

export const wrapperStyle = () => () => css`
  position: relative;
  display: inline-block;
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
  hasSelectedValue
}: ButtonStyleProps) => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['13'],
    cursor: 'pointer',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    height: rem(36),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.lg,
    color: getTextColor({
      theme,
      open,
      activeCalculatedColor,
      calculatedColor,
      hasSelectedValue,
    }),
    backgroundColor: getBackgroundColor({
      theme,
      open,
      styleType,
      buttonType,
      hasSelectedValue,
      activeCalculatedColor,
      calculatedColor,
    }),
    boxShadow: styleType === 'elevated' && !hasSelectedValue ? theme.elevation['01'] : 'none',

    border: getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
    }),
    transition: 'background-color 150ms linear',
    ':hover': {
      backgroundColor: !disabled && !open
        ? stateBackgroundColor(theme, 'hover', calculatedColor, true)
        : undefined,
      border: hasSelectedValue
        ? `solid 1px ${stateBackgroundColor(theme, 'hover', calculatedColor, true)}`
        :  styleType === 'outlined'? `solid 1px ${stateBackgroundColor(theme, 'hover', calculatedColor, true)}` : 'none',
      boxShadow: styleType === 'elevated' && !hasSelectedValue ? theme.elevation['02'] : 'none',
    },
    ':active': {
      backgroundColor: !disabled && !open
        ? stateBackgroundColor(theme, 'active', calculatedColor, true)
        : undefined,

      border: hasSelectedValue
        ? `solid 1px ${stateBackgroundColor(theme, 'hover', calculatedColor, true)}`
        :  styleType === 'outlined'? `solid 1px ${stateBackgroundColor(theme, 'hover', calculatedColor, true)}` : 'none',

      boxShadow: styleType === 'elevated' && !hasSelectedValue ? theme.elevation['02'] : 'none',
    },
  };
};

export const childrenWrapperStyle = () => (theme: Theme) => {
  return {
    marginLeft: 0,
    marginRight: theme.spacing.sm,
  };
};

export const labelSpanStyle = (open: boolean, hasSelectedValue: boolean) => (theme: Theme) => {
  return {
    fontWeight: open || hasSelectedValue
      ? theme.typography.weights.bold
      : theme.typography.weights.regular,

    'span': {
      marginLeft: theme.spacing.xsm,
      fontWeight: theme.typography.weights.bold,
    }
  };
};
