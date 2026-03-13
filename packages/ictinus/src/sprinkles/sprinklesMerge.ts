import { createSprinklesMerge } from './createSprinklesMerge';
import { colorProps, responsiveProps, unresponsiveProps } from './properties.css';

export const sprinklesMerge = createSprinklesMerge(unresponsiveProps, responsiveProps, colorProps);
