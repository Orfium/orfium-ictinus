import flatten from 'lodash/flatten';
import keys from 'lodash/keys';
import omit from 'lodash/omit';
import sampleSize from 'lodash/sampleSize';
import uniq from 'lodash/uniq';
import { Theme } from 'theme';

export type Data = {
  name: string;
  [prop: string]: number | string | undefined;
};

type ColorPickerProps = {
  theme: Theme;
  uniqueKeyNames: string[];
  color?: (dataLabel: string) => string;
};

export const getKeyNames = (data: Data[]): string[] => {
  return uniq(flatten(data.map((object) => keys(omit(object, 'name')))));
};

export const colorPicker = ({
  theme,
  uniqueKeyNames,
  color,
}: ColorPickerProps): Record<string, string> => {
  const colorSample = sampleSize(theme.globals.colors.flat, uniqueKeyNames.length);

  return uniqueKeyNames.reduce<Record<string, string>>((acc, key, index) => {
    const definedColor =
      typeof color === 'function' && color(key) ? color(key) : colorSample[index]?.[400];
    acc[key] = definedColor;

    return acc;
  }, {});
};
