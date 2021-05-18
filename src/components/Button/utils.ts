import isEmpty from 'lodash/isEmpty';
import { darken, lighten, transparentize } from 'polished';
import { Theme } from '../../theme';
import { mainTypes } from '../../theme/palette';
import { ColorShapeFromComponent, getColorFromType } from '../../utils/themeFunctions';

/**
 * This function defines what background-color to show based on type or color passed
 * if color it retrieves the color directly from the palette
 * if type it gets the specific type color from the palette
 */
export const defineBackgroundColor = (
  theme: Theme,
  color: ColorShapeFromComponent | undefined,
  type?: typeof mainTypes[number],
  iconExists?: boolean,
  childrenExists?: boolean
): string => {
  if (!childrenExists && iconExists) {
    return 'transparent';
  }

  if (color && !isEmpty(color)) {
    return theme.utils.getColor(color.color, color.shade);
  }

  if (childrenExists && type) {
    return getColorFromType(type, theme);
  }

  return 'transparent';
};

/**
 * return the correct color to show based on the state that is passed
 * The state must be 'hover' or 'active' for now
 * It is being defined by the team that the values will always be 10% and 20%
 * for transparentize there is a revert to these values to match 90% and 80% accordingly
 */
export const stateBackgroundColor = (
  theme: Theme,
  state: 'hover' | 'active',
  calculatedColor: ColorShapeFromComponent,
  filled: boolean
) => {
  const value = state === 'hover' ? 0.1 : 0.2;
  const color = defineBackgroundColor(theme, calculatedColor);

  if (!filled) {
    // value here is reverted to follow tranparentize e.g (1 - 0.1 = 0.9)
    return transparentize(1 - value, color);
  }

  return calculatedColor.shade > 400 ? lighten(value, color) : darken(value, color);
};
