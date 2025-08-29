import type { colorShades} from '../palette';
import { MAX_SHADE, MIN_SHADE } from '../palette';
import type { ColorScheme } from '../types';

type GetShadeWithStepProps = {
  shade: typeof colorShades[number] | 0;
  step: number;
  colorScheme: ColorScheme;
};

export const getShadeWithStep = ({
  shade = 0,
  step = 50,
  colorScheme,
}: GetShadeWithStepProps): typeof colorShades[number] => {
  const isOutOfBoundsForColorScheme =
    colorScheme === 'semantic' ? shade + step > MAX_SHADE : shade - step > MIN_SHADE;
  let calculatedShade = shade;

  if (isOutOfBoundsForColorScheme) {
    calculatedShade -= step;
  } else {
    calculatedShade += step;
  }

  return calculatedShade as typeof colorShades[number];
};
