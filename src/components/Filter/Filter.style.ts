import { css } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { stateBackgroundColor } from '../Button/utils';
import { ButtonStyleProps } from './types';
import { getBackgroundColor, getTextColor, getBorder, getHoverBorder } from './utils';

export const wrapperStyle = ({ styleType }: ButtonStyleProps) => (theme: Theme) => {
  const boxShadow = theme.elevation['02'];

  return {
    position: 'relative' as const,
    display: 'inline-block',
    height: rem(36),
    filter: styleType === 'elevated' ? `drop-shadow(${boxShadow})` : undefined,
  };
};

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  };
};

export const buttonWrapperStyle = ({
  calculatedColor,
  activeCalculatedColor,
  disabled,
  open,
  styleType,
  hasSelectedValue,
  filterType,
}: ButtonStyleProps) => (theme: Theme) => {
  return {
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    height: rem(36),

    ':hover > *,:active > *': {
      backgroundColor:
        !disabled && !open
          ? stateBackgroundColor(theme, 'hover', calculatedColor, true)
          : undefined,
      border: getHoverBorder({
        styleType,
        filterType,
        theme,
        open,
        calculatedColor,
        activeCalculatedColor,
        hasSelectedValue,
      }),
    },
  };
};

export const buttonBaseStyle = ({
  calculatedColor,
  activeCalculatedColor,
  buttonType,
  disabled,
  open,
  styleType,
  hasSelectedValue,
  filterType,
}: ButtonStyleProps) => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['13'],
    cursor: 'pointer',
    height: '100%',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 150ms linear',
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
    border: getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
      filterType,
      calculatedColor,
    }),
    display: 'flex',
  };
};

export const dividedButtonStyle = (props: ButtonStyleProps) => (theme: Theme) => {
  const { filterType, styleType, hasSelectedValue } = props;

  const marginLeftSpecialCaseCalculation = () => {
    if (filterType === 'added') {
      if (hasSelectedValue || styleType === 'outlined') {
        return rem(-1);
      }

      return rem(1);
    }

    return undefined;
  };

  return {
    ...buttonBaseStyle(props)(theme),
    zIndex: -1,
    paddingRight: theme.spacing.md,
    marginLeft: marginLeftSpecialCaseCalculation(),
    borderLeftWidth: '0 !important', // this is to remove the extra line created by border on the 2nd div
    borderTopRightRadius: theme.spacing.lg,
    borderBottomRightRadius: theme.spacing.lg,
  };
};

export const buttonStyle = (props: ButtonStyleProps) => (theme: Theme) => {
  const { filterType } = props;
  const isPreset = filterType === 'preset';

  return {
    ...buttonBaseStyle(props)(theme),
    padding: `0 ${!isPreset ? theme.spacing.xsm : theme.spacing.md} 0 ${theme.spacing.md}`,
    borderRadius: theme.spacing.lg,
    borderTopRightRadius: !isPreset ? 0 : undefined,
    borderBottomRightRadius: !isPreset ? 0 : undefined,
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
    fontWeight:
      open || hasSelectedValue ? theme.typography.weights.bold : theme.typography.weights.regular,

    span: {
      marginLeft: theme.spacing.xsm,
      fontWeight: theme.typography.weights.bold,
    },
  };
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
