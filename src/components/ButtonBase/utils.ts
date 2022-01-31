import isEmpty from 'lodash/isEmpty';
import { Theme } from 'theme';
import { mainTypes } from 'theme/palette';

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
  childrenExists?: boolean
): string => {
  if (type === 'link') {
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
