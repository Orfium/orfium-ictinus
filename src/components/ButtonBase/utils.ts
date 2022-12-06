import isEmpty from 'lodash/isEmpty';
import { Theme } from 'theme';
import { mainTypes } from 'theme/palette';

import { ColorShapeFromComponent, getColorFromType } from '../../utils/themeFunctions';
import { ButtonBaseProps } from './ButtonBase';
import { buttonConfig } from './config';

/**
 * This function defines what background-color to show based on type or color passed
 * if color it retrieves the color directly from the palette
 * if type it gets the specific type color from the palette
 */
export const defineBackgroundColor = (
  theme: Theme,
  color: ColorShapeFromComponent | undefined,
  type?: typeof mainTypes[number],
  hasChildren?: boolean
): string => {
  if (type === 'link') {
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
 * This function defines what color to show based on type or color passed
 * if type is link uses the link color
 * if it's background is transparent ( transparent or Outlined ) then it uses the background color
 * else it uses the calculated color
 */
export const calculateButtonColor = ({
  type,
  isBackgroundTransparent,
  backGroundColor,
  calculatedColor,
  theme,
}: Pick<ButtonBaseProps, 'type'> & {
  calculatedColor: ColorShapeFromComponent;
  isBackgroundTransparent: boolean;
  backGroundColor: string;
  theme: Theme;
}) => {
  if (type === 'link') {
    const color = buttonConfig.types.link.color;

    return theme.utils.getColor(color.name, color.shade);
  }

  if (isBackgroundTransparent) {
    return backGroundColor;
  }

  return theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade);
};
