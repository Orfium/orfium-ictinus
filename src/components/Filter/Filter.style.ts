import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import { ButtonStyleProps } from './types';
import {
  borderStyleParams,
  focusBorderWidth,
  getBackgroundColor,
  getBorder,
  getTextColor,
  HAS_SELECTED_VALUE_COLOR_SHADE,
  transparentFocusBorderWidth,
} from './utils';
import { Theme } from '../../theme';
import { getFocus, getHover, getPressed } from '../../theme/states';
import { textInputConfig } from 'components/TextInputBase/config';

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

export const buttonWrapperStyle =
  ({ isDisabled, isOpen, hasSelectedValue, calculatedColor, styleType }: ButtonStyleProps) =>
  (theme: Theme) => {
    const isActiveAndClosed = !isDisabled && !isOpen;
    const borderWidth = styleType === 'filled' ? focusBorderWidth : transparentFocusBorderWidth;

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
        backgroundColor: isActiveAndClosed
          ? hasSelectedValue
            ? getHover({
                theme,
                color: calculatedColor.color,
                shade: HAS_SELECTED_VALUE_COLOR_SHADE,
              }).backgroundColor
            : getHover({ theme }).backgroundColor
          : undefined,
      },

      // If is active and not disabled and not visited global states applied
      // else it's using the global states function with calculated color
      ':active > div': {
        backgroundColor: isActiveAndClosed
          ? hasSelectedValue
            ? getPressed({
                theme,
                color: calculatedColor.color,
                shade: HAS_SELECTED_VALUE_COLOR_SHADE,
              }).backgroundColor
            : getPressed({ theme }).backgroundColor
          : undefined,
      },

      // on focus change the two divs of added
      ':focus-visible > div': {
        border: getFocus({ theme, borderWidth: borderWidth }).styleBorder,
      },
      // target the divider on focus
      ':focus-visible > span': {
        borderTop: getFocus({ theme, borderWidth: borderWidth }).styleBorder,
        borderBottom: getFocus({ theme, borderWidth: borderWidth }).styleBorder,
      },
    };
  };

export const buttonBaseStyle =
  ({
    calculatedColor,
    isDisabled,
    isOpen,
    styleType,
    hasSelectedValue,
    filterType,
  }: ButtonStyleProps) =>
  (theme: Theme) => {
    return {
      fontSize: theme.globals.typography.fontSize['13'],
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      height: '100%',
      opacity: isDisabled ? 0.5 : 1,
      transition: 'all 150ms linear',
      color: getTextColor({
        theme,
        isOpen,
        calculatedColor,
        hasSelectedValue,
      }),
      backgroundColor: getBackgroundColor({
        theme,
        isOpen,
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
        isOpen,
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
          isOpen,
          state: 'hover',
        })}`,
      },
    };
  };

export const divider = (props: ButtonStyleProps) => (theme: Theme) => {
  const { isOpen, calculatedColor, styleType, hasSelectedValue, filterType } = props;

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
      isOpen,
      isDivider: true,
    }),
    borderTop: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      filterType,
      calculatedColor,
      isOpen,
    })}`,
    borderBottom: `${borderStyleParams} ${getBorder({
      styleType,
      theme,
      hasSelectedValue,
      filterType,
      calculatedColor,
      isOpen,
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
    borderTopRightRadius: theme.globals.spacing.get('8'),
    borderBottomRightRadius: theme.globals.spacing.get('8'),
  };
};

export const buttonStyle = (props: ButtonStyleProps) => (theme: Theme) => {
  const { filterType } = props;
  const isPreset = filterType === 'preset';

  return {
    ...buttonBaseStyle(props)(theme),
    padding: `0 ${
      !isPreset ? theme.globals.spacing.get('3') : theme.globals.spacing.get('6')
    } 0 ${theme.globals.spacing.get('6')}`,
    borderRadius: theme.globals.spacing.get('8'),
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

export const labelSpanStyle = (isOpen: boolean, hasSelectedValue: boolean) => (theme: Theme) => {
  return {
    fontWeight:
      isOpen || hasSelectedValue
        ? theme.globals.typography.fontWeight.get('bold')
        : theme.globals.typography.fontWeight.get('regular'),
    display: 'flex',
    alignItems: 'center',
    div: {
      flex: 'none',
    },
    span: {
      fontWeight: theme.globals.typography.fontWeight.get('bold'),
    },
  };
};

export const valueSpanStyle = () => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

export const menuStyle = () => (theme: Theme) => {
  const borderConfig = textInputConfig.types[theme.colorScheme].outlined.border;

  return css`
    position: absolute;
    left: 0;
    height: auto;
    border: ${rem(borderConfig.width)} solid
      ${theme.utils.getColor(borderConfig.color.default.name, borderConfig.color.default.shade)};
    border-radius: ${theme.globals.spacing.get('3')};
    background-color: ${theme.globals.oldColors.white};
    box-shadow: ${theme.globals.elevation['02']};
    z-index: 500;
    overflow: hidden;
    min-width: 100%;
    max-width: ${rem(440)};
  `;
};
