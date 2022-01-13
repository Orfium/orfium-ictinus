import { Theme } from '../index';
import { rem } from '../utils';
import { statesConfig } from './statesConfig';

export type GetFocusProps = {
  theme: Theme;
  borderWidth?: number;
};

export type GetFocusResponse = {
  borderWidth: string;
  focusColor: string;
  styleBorder: string;
  styleOutline: string;
};

const borderWidthStep = statesConfig.focus.border.width.step;
const borderColor = statesConfig.focus.border.color;

/**
 * On focus border is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export const getFocus = ({ theme, borderWidth = 0 }: GetFocusProps): GetFocusResponse => {
  const calculatedBorderWidth = borderWidth + borderWidthStep;

  const focusColor = theme.utils.getColor(borderColor.name, borderColor.shade);

  return {
    borderWidth: rem(calculatedBorderWidth),
    focusColor,
    styleBorder: `${rem(calculatedBorderWidth)} solid ${focusColor}`,
    styleOutline: `${focusColor} auto ${rem(calculatedBorderWidth)}`,
  };
};
