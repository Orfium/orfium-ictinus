import { style as veStyle } from '@vanilla-extract/css';

import { layers } from '../layers';

export const style = (...args: Parameters<typeof veStyle>) =>
  veStyle(
    (Array.isArray(args[0]) ? args[0] : [args[0]]).map((arg) =>
      typeof arg === 'object' && !Array.isArray(arg)
        ? { '@layer': { [layers.components]: arg } }
        : arg
    ),
    args[1]
  );
