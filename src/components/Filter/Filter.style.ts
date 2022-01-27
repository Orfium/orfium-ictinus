import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getFocus, getHover, getPressed } from '../../theme/states';
import { ButtonStyleProps } from './types';
import {
  borderStyleParams,
  focusBorderWidth,
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
    gap: rem(4),
    height: '100%',
  };
};

export const buttonWrapperStyle = ({
  disabled,
  open,
  hasSelectedValue,
  calculatedColor,
}: ButtonStyleProps) => (theme: Theme) => {
  const activeAndClosed = !disabled && !open;

  return {
    background: 'none',
    border: 'none',
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    height: '100%',
    minWidth: rem(110),

    // If is active and not disabled and not visited global states applied
    // else it's using the global states function with calculated color
    ':hover > div': {
      backgroundColor: activeAndClosed
        ? hasSelectedValue
          ? getHover({ theme, color: calculatedColor.color, shade: calculatedColor.shade })
              .backgroundColor
          : getHover({ theme }).backgroundColor
        : undefined,
    },

    // If is active and not disabled and not visited global states applied
    // else it's using the global states function with calculated color
    ':active > div': {
      backgroundColor: activeAndClosed
        ? hasSelectedValue
          ? getPressed({ theme, color: calculatedColor.color, shade: calculatedColor.shade })
              .backgroundColor
          : getPressed({ theme }).backgroundColor
        : undefined,
    },

    // on focus change the two divs of added
    ':focus-visible > div': activeAndClosed && {
      border: getFocus({ theme, borderWidth: focusBorderWidth }).styleBorder,
    },
    // target the divider on focus
    ':focus > span': activeAndClosed && {
      borderTop: getFocus({ theme, borderWidth: focusBorderWidth }).styleBorder,
      borderBottom: getFocus({ theme, borderWidth: focusBorderWidth }).styleBorder,
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
    position: 'relative' as const,
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
    paddingLeft: rem(4),
    paddingRight: rem(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: rem(34),
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
    borderRight: !isPreset ? '0 !important' : undefined,
    borderTopRightRadius: !isPreset ? 0 : undefined,
    borderBottomRightRadius: !isPreset ? 0 : undefined,
  };
};

export const childrenWrapperStyle = () => () => {
  return {
    lineHeight: rem(15),
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
