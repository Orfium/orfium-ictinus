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

/**
 * On pressed background is darken by two steps in shade.
 * If we exceed the maximum value then we lighten it by two steps.
 * This will be reviewed when dark theme is implemented. **/
export const getPressed = ({ theme, color, shade }: Props): GetPressed => {
  const backgroundColorStep = statesConfig[theme.colorScheme].pressed.backgroundColor.step;
  const endColor = color || (theme.colorScheme === 'dark' ? 'darkGrey' : 'lightGrey');
  const endShade = shade || (theme.colorScheme === 'dark' ? 700 : 0);

  const calculatedShade = getShadeWithStep({
    shade: endShade,
    step: backgroundColorStep,
    colorScheme: theme.colorScheme,
  });

  return { backgroundColor: theme.utils.getColor(endColor, calculatedShade) };
};
