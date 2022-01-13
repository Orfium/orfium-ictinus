import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
import { statesConfig } from './statesConfig';

type GetHoverProps = {
  theme: Theme;
  color: typeof flatColors[number];
  shade: typeof colorShades[number] | 0;
};

const backgroundColorStep = statesConfig.hover.backgroundColor.step;

/**
 * On hover background is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export const getHover = ({ theme, color = 'lightGrey', shade = 0 }: GetHoverProps): string => {
  let calculatedShade = shade;

  if (shade + backgroundColorStep > 950) {
    calculatedShade -= backgroundColorStep;
  } else {
    calculatedShade += backgroundColorStep;
  }

  return theme.utils.getColor(color, calculatedShade as typeof colorShades[number]);
};
