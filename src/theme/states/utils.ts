import { colorShades, MAX_SHADE } from '../palette';

type Props = {
  shade: typeof colorShades[number] | 0;
  step: number;
};

export const getShadeWithStep = ({ shade = 0, step = 50 }: Props): typeof colorShades[number] => {
  let calculatedShade = shade;

  if (shade + step > MAX_SHADE) {
    calculatedShade -= step;
  } else {
    calculatedShade += step;
  }

  return calculatedShade as typeof colorShades[number];
};
