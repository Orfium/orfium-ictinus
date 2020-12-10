import { rem } from 'polished';
import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from './Button';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { TypesShadeAndColors } from '../../hooks/useTypeColorToColorMatch';
import { defineBackgroundColor, stateBackgroundColor } from './utils';

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

export const buttonStyle = ({
  type,
  filled,
  calculatedColor,
  size,
  iconExists,
  disabled,
  childrenCount,
  typesShadesColor,
}: RequiredProperties<
  Props & {
    typesShadesColor: TypesShadeAndColors;
    calculatedColor: ColorShapeFromComponent | undefined;
    iconExists: boolean;
    childrenCount: number;
  }
>) => (theme: Theme) => {
  const calculatedColorBasedOnColorOrType = calculatedColor
    ? calculatedColor
    : typesShadesColor[type];

  return {
    fontSize: theme.typography.fontSizes['16'],
    color: filled
      ? pickTextColorFromSwatches(
          calculatedColorBasedOnColorOrType.color,
          calculatedColorBasedOnColorOrType.shade
        )
      : defineBackgroundColor(
          theme,
          calculatedColorBasedOnColorOrType,
          type,
          iconExists,
          childrenCount > 0
        ),
    backgroundColor: filled
      ? defineBackgroundColor(
          theme,
          calculatedColorBasedOnColorOrType,
          type,
          iconExists,
          childrenCount > 0
        )
      : 'transparent',
    padding:
      size === 'sm' || size === 'md'
        ? `${theme.spacing.sm} ${theme.spacing.md}`
        : `${theme.spacing.md} ${theme.spacing.lg}`,
    height: heightBasedOnSize(size),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.xsm,
    border: filled
      ? 'none'
      : `solid 1px ${defineBackgroundColor(
          theme,
          calculatedColorBasedOnColorOrType,
          type,
          iconExists,
          childrenCount > 0
        )}`,
    cursor: 'pointer',
    transition: 'background-color 150ms linear',
    ':hover': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'hover', calculatedColorBasedOnColorOrType, filled)
        : undefined,
    },
    ':active': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'active', calculatedColorBasedOnColorOrType, filled)
        : undefined,
    },
  };
};

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
};

export const iconStyle = ({
  iconLeft,
  iconRight,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => {
  return {
    marginLeft: iconRight ? theme.spacing.sm : 0,
    marginRight: iconLeft ? theme.spacing.sm : 0,
    display: 'inline-flex',
  };
};
