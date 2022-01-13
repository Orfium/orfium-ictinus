import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
import { statesConfig } from './statesConfig';
import { getShadeWithStep } from './utils';

export type GetPressedProps = {
  theme: Theme;
  color?: typeof flatColors[number];
  shade?: typeof colorShades[number] | 0;
};

export type GetPressedResponse = string;

const backgroundColorStep = statesConfig.pressed.backgroundColor.step;

/**
 * On pressed background is darken by two steps in shade.
 * If we exceed the maximum value then we lighten it by two steps.
 * This will be reviewed when dark theme is implemented. **/
export const getPressed = ({
  theme,
  color = 'lightGrey',
  shade = 0,
}: GetPressedProps): GetPressedResponse => {
  const calculatedShade = getShadeWithStep({ shade, step: backgroundColorStep });

  return theme.utils.getColor(color, calculatedShade);
};
