import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
import { statesConfig } from './statesConfig';
import { getShadeWithStep } from './utils';

export type HoverProps = {
  theme: Theme;
  color?: typeof flatColors[number];
  shade?: typeof colorShades[number] | 0;
};

export type GetHover = {
  backgroundColor: string;
};

/**
 * On hover background is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export const getHover = ({ theme, color, shade }: HoverProps): GetHover => {
  const backgroundColorStep = statesConfig[theme.colorScheme].hover.backgroundColor.step;
  const endColor = color || (theme.colorScheme === 'dark' ? 'darkGrey' : 'lightGrey');
  const endShade = shade || (theme.colorScheme === 'dark' ? 700 : 0);

  const calculatedShade = getShadeWithStep({
    shade: endShade,
    step: backgroundColorStep,
    colorScheme: theme.colorScheme,
  });

  return { backgroundColor: theme.utils.getColor(endColor, calculatedShade) };
};
