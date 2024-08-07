import { flatten, keys, omit, sampleSize, uniq } from 'lodash-es';
import type { Theme } from 'theme';

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
  const colorSample = sampleSize(theme.globals.oldColors.flat, uniqueKeyNames.length);

  return uniqueKeyNames.reduce<Record<string, string>>((acc, key, index) => {
    const definedColor =
      typeof color === 'function' && color(key) ? color(key) : colorSample[index]?.[400];
    acc[key] = definedColor;

    return acc;
  }, {});
};
