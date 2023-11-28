import { isEmpty } from 'lodash';
import { darken, lighten, transparentize } from 'polished';
import type { Theme } from 'theme';
import type { mainTypes } from 'theme/palette';
import { BASE_SHADE } from 'theme/palette';

import type { ColorShapeFromComponent} from '../../utils/themeFunctions';
import { getColorFromType } from '../../utils/themeFunctions';

/**
 * This function defines what background-color to show based on type or color passed
 * if color it retrieves the color directly from the palette
 * if type it gets the specific type color from the palette
 */
export const defineBackgroundColor = (
  theme: Theme,
  color: ColorShapeFromComponent | undefined,
  type?: typeof mainTypes[number],
  hasIcon?: boolean,
  hasChildren?: boolean
): string => {
  if (!hasChildren && hasIcon) {
    return 'transparent';
  }

  if (color && !isEmpty(color)) {
    return theme.utils.getColor(color.color, color.shade);
  }

  if (hasChildren && type) {
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
  isFilled: boolean
) => {
  const value = state === 'hover' ? 0.1 : 0.2;
  const color = defineBackgroundColor(theme, calculatedColor);

  if (!isFilled) {
    // value here is reverted to follow tranparentize e.g (1 - 0.1 = 0.9)
    return transparentize(1 - value, color);
  }

  return calculatedColor.shade > BASE_SHADE ? lighten(value, color) : darken(value, color);
};
