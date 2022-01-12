import { Theme } from '../index';
import { statesConfig } from './statesConfig';

type GetFocusProps = {
  theme: Theme;
  borderWidth: number;
};

const borderWidthStep = statesConfig.focus.border.width.step;
const borderColor = statesConfig.focus.border.color;

export const getFocus = ({
  theme,
  borderWidth = 0,
}: GetFocusProps): { borderWidth: number; focusColor: string } => {
  const calculatedBorderWidth = borderWidth + borderWidthStep;

  const focusColor = theme.utils.getColor(borderColor.name, borderColor.shade);

  return {
    borderWidth: calculatedBorderWidth,
    focusColor,
  };
};
