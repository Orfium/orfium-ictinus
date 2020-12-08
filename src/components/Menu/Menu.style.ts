import { css } from '@emotion/core';
import { darken, rem } from 'polished';
import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { backgroundPickerBasedOnType, colorPickerBasedOnType } from '../../utils/themeFunctions';
import { Props } from '../Button/Button';

/** Calculates the button specific height based on the size passed to it
 * These sizes are specific to this button thus these are placed here and not in the config **/
const heightBasedOnSize = (size: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'lg':
      return rem(56);
    case 'sm':
      return rem(40);
    default:
      return rem(46);
  }
};

export const menuStyle = ({
  type,
  filled,
  size,
  iconLeft,
  iconRight,
  disabled,
  childrenCount,
}: RequiredProperties<Props & { childrenCount: number }>) => (theme: Theme) => {
  const calculatedPaddingSpace = size === 'sm' ? theme.spacing.md : theme.spacing.xl;
  const calculatedPaddingSpaceIfIcon = size === 'sm' ? theme.spacing.sm : theme.spacing.md;

  const defineBackgroundColor = (): string => {
    if (childrenCount === 0 && (iconLeft || iconRight)) {
      return 'transparent';
    }

    if (disabled) {
      return theme.utils.getColor('lightGray', 100);
    }

    if (filled && childrenCount !== 0) {
      return backgroundPickerBasedOnType(type)(theme);
    }

    return 'transparent';
  };

  return {
    fontSize: theme.typography.fontSizes['16'],
    color: disabled ? theme.utils.getColor('lightGray', 700) : colorPickerBasedOnType(type)(theme),
    backgroundColor: defineBackgroundColor(),
    paddingLeft: childrenCount === 0 ? 0 : calculatedPaddingSpace,
    paddingRight: !childrenCount ? calculatedPaddingSpaceIfIcon : calculatedPaddingSpace,
    height: heightBasedOnSize(size),
    borderRadius: theme.spacing.xsm,
    border: filled ? 'none' : `solid 1px ${theme.utils.getColor('lightGray', 700)}`,
  };
};

export const buttonSpanStyle = ({
  size,
  iconLeft,
  iconRight,
  hasChildren,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => ({
  display: iconLeft || iconRight ? 'flex' : 'block',
  flexDirection: iconLeft || iconRight ? 'row' : 'column',
  alignItems: iconLeft || iconRight ? ('center' as const) : ('flex-start' as const),
  '> :first-child': {
    marginLeft: iconLeft || iconRight ? (size === 'sm' ? theme.spacing.sm : theme.spacing.md) : 0,
    marginRight: hasChildren ? theme.spacing.sm : 0,
  },
});

export type MenuPositionAllowed = 'left' | 'right';

export type MenuOptions = {
  menuPosition?: MenuPositionAllowed;
};

export const optionsStyle = ({ menuPosition }: MenuOptions) => (theme: Theme) => css`
  max-height: 400px;
  overflow-y: scroll;
  position: absolute;
  top: ${rem(48)};
  left: ${menuPosition === 'left' ? 0 : 'initial'};
  right: 0;
  width: ${rem(148)};
  height: auto;
  background-color: ${theme.palette.white};
  box-shadow: 0px 0px ${rem(16)} grey;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  border-radius: ${rem(4)};
  z-index: 1;
  & > button {
    padding: ${rem(8)} 0;
    height: ${rem(48)};
    margin-left: 0;
    font-size: ${theme.typography.fontSizes['14']};
  }

  & > button:hover {
    background-color: ${darken(0.05, theme.palette.white)};
  }
`;
