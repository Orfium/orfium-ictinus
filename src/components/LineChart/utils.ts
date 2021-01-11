import { omit, keys, flatten, uniq, sampleSize } from 'lodash';
import { Theme } from '../../theme';

export type Data = {
  name: string;
  [prop: string]: number | string | undefined;
};

type Props = {
  theme: Theme;
  uniqueKeyNames: string[];
  color?: (dataLabel: string) => string;
};

export const getKeyNames = (data: Data[]): string[] => {
  return uniq(flatten(data.map(object => keys(omit(object, 'name')))));
};

export const colorPicker = ({ theme, uniqueKeyNames, color }: Props): Record<string, string> => {
  const colorSample = sampleSize(theme.palette.flat, uniqueKeyNames.length);

  return uniqueKeyNames.reduce<Record<string, string>>((acc, key, index) => {
    const definedColor =
      typeof color === 'function' && color(key) ? color(key) : colorSample[index]?.[400];
    acc[key] = definedColor;

    return acc;
  }, {});
};
