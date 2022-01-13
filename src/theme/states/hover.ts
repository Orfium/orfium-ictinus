import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
import { statesConfig } from './statesConfig';
import { getShadeWithStep } from './utils';

export type GetHoverProps = {
  theme: Theme;
  color?: typeof flatColors[number];
  shade?: typeof colorShades[number] | 0;
};

export type GetHoverResponse = {
  backgroundColor: string;
};

const backgroundColorStep = statesConfig.hover.backgroundColor.step;

/**
 * On hover background is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export const getHover = ({
  theme,
  color = 'lightGrey',
  shade = 0,
}: GetHoverProps): GetHoverResponse => {
  const calculatedShade = getShadeWithStep({ shade, step: backgroundColorStep });

  return { backgroundColor: theme.utils.getColor(color, calculatedShade) };
};
