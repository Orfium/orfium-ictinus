import { css } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../theme';
import { ButtonStyleProps } from './types';
import {
  borderStyleParams,
  focusBorderStyleParams,
  getBackgroundColor,
  getBorder,
  getTextColor,
} from './utils';

export const wrapperStyle = () => () => {
  return {
    position: 'relative' as const,
    display: 'inline-block',
    height: rem(36),
  };
};

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  };
};

export const buttonWrapperStyle = ({ disabled, open, hasSelectedValue }: ButtonStyleProps) => (
  theme: Theme
) => {
  return {
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    maxWidth: rem(270),
    minWidth: rem(150),

    ':hover > div, :active > div': {
      backgroundColor:
        !disabled && !open ? theme.utils.getColor('darkGrey', null, 'pale') : undefined,
    },
    // on focus change the two divs of added
    ':focus > div': !open &&
      !hasSelectedValue && {
        border: `${focusBorderStyleParams} ${theme.utils.getColor('blue', 550)}`,
        backgroundColor: theme.utils.getColor('blue', 50),
      },
    // target the divider on focus
    ':focus > span': !open && {
      borderTop: `${focusBorderStyleParams} ${theme.utils.getColor('blue', 550)}`,
      borderBottom: `${focusBorderStyleParams} ${theme.utils.getColor('blue', 550)}`,
    },
  };
};

export const buttonBaseStyle = ({
  calculatedColor,
  activeCalculatedColor,
  disabled,
  open,
  styleType,
  hasSelectedValue,
  filterType,
}: ButtonStyleProps) => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['13'],
    cursor: disabled ? 'not-allowed' : 'pointer',
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
      hasSelectedValue,
      activeCalculatedColor,
      calculatedColor,
    }),
    border: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
      filterType,
      calculatedColor,
      open,
    })}`,
    display: 'flex',
    '&:hover': {
      border: `${borderStyleParams} ${getBorder({
        styleType,
        theme,
        hasSelectedValue,
        activeCalculatedColor,
        filterType,
        calculatedColor,
        open,
        state: 'hover',
      })}`,
    },
  };
};

export const divider = (props: ButtonStyleProps) => (theme: Theme) => {
  const {
    open,
    activeCalculatedColor,
    calculatedColor,
    styleType,
    hasSelectedValue,
    filterType,
  } = props;

  return {
    height: '100%',
    width: rem(1),
    transition: 'all 150ms linear',
    backgroundColor: getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
      filterType,
      calculatedColor,
      open,
      isDivider: true,
    }),
    borderTop: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
      filterType,
      calculatedColor,
      open,
    })}`,
    borderBottom: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      activeCalculatedColor,
      filterType,
      calculatedColor,
      open,
    })}`,
  };
};

export const dividedButtonStyle = (props: ButtonStyleProps) => (theme: Theme) => {
  return {
    ...buttonBaseStyle(props)(theme),
    borderLeft: '0 !important',
    paddingRight: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: rem(34),
    borderTopRightRadius: theme.spacing.lg,
    borderBottomRightRadius: theme.spacing.lg,
    '> span': {
      marginLeft: rem(-5),
    },
  };
};

export const buttonStyle = (props: ButtonStyleProps) => (theme: Theme) => {
  const { filterType } = props;
  const isPreset = filterType === 'preset';

  return {
    ...buttonBaseStyle(props)(theme),
    padding: `0 ${!isPreset ? theme.spacing.xsm : theme.spacing.md} 0 ${theme.spacing.md}`,
    borderRadius: theme.spacing.lg,
    borderRight: !isPreset ? '0 !important' : undefined,
    borderTopRightRadius: !isPreset ? 0 : undefined,
    borderBottomRightRadius: !isPreset ? 0 : undefined,
  };
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
    fontWeight:
      open || hasSelectedValue ? theme.typography.weights.bold : theme.typography.weights.regular,
    maxWidth: rem(210),
    display: 'flex',
    alignItems: 'center',
    div: {
      flex: 'none',
    },
    span: {
      marginLeft: theme.spacing.xsm,
      fontWeight: theme.typography.weights.bold,
    },
  };
};

export const valueSpanStyle = () => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

export const menuStyle = () => (theme: Theme) => css`
  position: absolute;
  top: ${rem(48)};
  min-width: ${rem(280)};
  left: 0;
  height: auto;
  background-color: ${theme.palette.white};
  box-shadow: ${theme.elevation['02']};
  border-radius: ${rem(4)};
  z-index: 1;
  overflow: hidden;
  min-width: 100%;
  max-width: ${rem(620)};
`;
