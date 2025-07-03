import { createSprinkles } from '@vanilla-extract/sprinkles';
import { colorProperties } from './colorSprinkles.css';
import { borderProperties, responsiveProperties, typographyProperties } from './sprinkles.css';

export const sprinkles = createSprinkles(
  responsiveProperties,
  borderProperties,
  typographyProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
