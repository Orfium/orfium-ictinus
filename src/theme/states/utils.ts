import { colorShades, MAX_SHADE, MIN_SHADE } from '../palette';
import { ColorScheme } from '../types';

type Props = {
  shade: typeof colorShades[number] | 0;
  step: number;
  colorScheme: ColorScheme;
};

export const getShadeWithStep = ({
  shade = 0,
  step = 50,
  colorScheme,
}: Props): typeof colorShades[number] => {
  const isOutOfBoundsForColorScheme =
    colorScheme === 'light' ? shade + step > MAX_SHADE : shade - step > MIN_SHADE;
  let calculatedShade = shade;

  if (isOutOfBoundsForColorScheme) {
    calculatedShade -= step;
  } else {
    calculatedShade += step;
  }

  return calculatedShade as typeof colorShades[number];
};
