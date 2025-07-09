import { defineProperties } from '@vanilla-extract/sprinkles';
import { lightVars } from '../theme.css';

const standardCSSValues = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
};

// Utility function to recursively generate color properties from any object
const generateAnyColorProperties = (
  textColorObj: Record<string, any>,
  prefix = ''
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(textColorObj)) {
    const currentKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      // This is a CSS variable value
      result[currentKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      // Recursively process nested objects
      Object.assign(result, generateAnyColorProperties(value, currentKey));
    }
  }

  return result;
};

// Simple type for flattened dot notation
type FlattenTextColors<T> = {
  [K in keyof T]: T[K] extends string
    ? K
    : T[K] extends Record<string, any>
      ? K | `${string & K}.${string & keyof T[K]}`
      : never;
}[keyof T];

export const textColorProperties = generateAnyColorProperties(
  lightVars.colors.textColor
) as Record<FlattenTextColors<typeof lightVars.colors.textColor>, string>;
export const borderColorProperties = generateAnyColorProperties(
  lightVars.colors.borderColor
) as Record<FlattenTextColors<typeof lightVars.colors.borderColor>, string>;

// Define color properties separately to handle theme switching
export const colorProperties = defineProperties({
  properties: {
    color: {
      ...textColorProperties,
      ...standardCSSValues,
    },
    backgroundColor: {
      ...lightVars.colors.backgroundColor,
      ...standardCSSValues,
    },
    borderColor: {
      ...borderColorProperties,
      ...standardCSSValues,
    },
  },
});
