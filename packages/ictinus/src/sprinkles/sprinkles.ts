import {
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
} from '@vanilla-extract/sprinkles';

import * as styles from './properties.css';

export const sprinkles = createSprinkles(
  styles.unresponsiveProps,
  styles.responsiveProps,
  styles.colorProps
);

export const mapResponsiveValue = createMapValueFn(styles.responsiveProps);
export const normalizeResponsiveValue = createNormalizeValueFn(styles.responsiveProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
