import { statesConfig } from './statesConfig';
import type { Theme } from '../index';
import { rem } from '../utils';

export type GetFocusProps = {
  theme: Theme;
  borderWidth?: number;
};

export type GetFocus = {
  borderWidth: string;
  focusColor: string;
  styleBorder: string;
  styleOutline: string;
};

const borderWidthStep = statesConfig['semantic'].focus.border.width.step;
const borderColor = statesConfig['semantic'].focus.border.color;

/**
 * On focus border is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export const getFocus = ({ theme, borderWidth = 0 }: GetFocusProps): GetFocus => {
  const calculatedBorderWidth = borderWidth + borderWidthStep;

  const focusColor = theme.utils.getColor(borderColor.name, borderColor.shade);

  return {
    borderWidth: rem(calculatedBorderWidth),
    focusColor,
    styleBorder: `${rem(calculatedBorderWidth)} solid ${focusColor}`,
    styleOutline: `${focusColor} auto ${rem(calculatedBorderWidth)}`,
  };
};
