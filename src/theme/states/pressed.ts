import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
import { statesConfig } from './statesConfig';
import { getShadeWithStep } from './utils';

export type Props = {
  theme: Theme;
  color?: typeof flatColors[number];
  shade?: typeof colorShades[number] | 0;
};

export type GetPressed = {
  backgroundColor: string;
};

const backgroundColorStep = statesConfig.pressed.backgroundColor.step;

/**
 * On pressed background is darken by two steps in shade.
 * If we exceed the maximum value then we lighten it by two steps.
 * This will be reviewed when dark theme is implemented. **/
export const getPressed = ({ theme, color = 'lightGrey', shade = 0 }: Props): GetPressed => {
  const calculatedShade = getShadeWithStep({ shade, step: backgroundColorStep });

  return { backgroundColor: theme.utils.getColor(color, calculatedShade) };
};
