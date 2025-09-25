import { createSprinklesMerge } from './createSprinklesMerge';
import { responsiveProps, unresponsiveProps } from './properties.css';

export const sprinklesMerge = createSprinklesMerge(unresponsiveProps, responsiveProps);
