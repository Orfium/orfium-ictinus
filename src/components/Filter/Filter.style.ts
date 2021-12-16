import { css } from '@emotion/react';
import { rem } from 'theme/utils';

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

export const buttonWrapperStyle = ({
  disabled,
  open,
  hasSelectedValue,
  calculatedColor,
}: ButtonStyleProps) => (theme: Theme) => {
  return {
    background: 'none',
    border: 'none',
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    height: '100%',
    minWidth: rem(110),

    ':hover > div, :active > div': {
      backgroundColor:
        !disabled && !open
          ? hasSelectedValue
            ? theme.utils.getColor(calculatedColor.color, 100)
            : theme.utils.getColor('darkGrey', null, 'pale')
          : undefined,
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
      calculatedColor,
      hasSelectedValue,
    }),
    backgroundColor: getBackgroundColor({
      theme,
      open,
      styleType,
      hasSelectedValue,
      calculatedColor,
    }),
    border: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      filterType,
      calculatedColor,
      open,
    })}`,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '&:hover': {
      border: `${borderStyleParams} ${getBorder({
        styleType,
        theme,
        hasSelectedValue,
        filterType,
        calculatedColor,
        open,
        state: 'hover',
      })}`,
    },
  };
};

export const divider = (props: ButtonStyleProps) => (theme: Theme) => {
  const { open, calculatedColor, styleType, hasSelectedValue, filterType } = props;

  return {
    height: '100%',
    width: rem(1),
    minWidth: rem(1),
    transition: 'all 150ms linear',
    backgroundColor: getBorder({
      styleType,
      theme,
      hasSelectedValue,
      filterType,
      calculatedColor,
      open,
      isDivider: true,
    }),
    borderTop: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      filterType,
      calculatedColor,
      open,
    })}`,
    borderBottom: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
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

export const childrenWrapperStyle = () => () => {
  return {
    marginLeft: 0,
  };
};

export const labelSpanStyle = (open: boolean, hasSelectedValue: boolean) => (theme: Theme) => {
  return {
    fontWeight:
      open || hasSelectedValue ? theme.typography.weights.bold : theme.typography.weights.regular,
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
  border-radius: ${theme.spacing.xsm};
  background-color: ${theme.palette.white};
  box-shadow: ${theme.elevation['02']};
  z-index: 1;
  overflow: hidden;
  min-width: 100%;
  max-width: ${rem(620)};
`;
