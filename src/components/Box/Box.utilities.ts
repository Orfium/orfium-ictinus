import { curry } from 'lodash';
import { Theme } from 'theme';

import { StyledBoxProps } from './Box.types';

/**
 * Resolves any value from the given theme based on type if css property exists on the object given.
 **/
export const cssResolver = curry(
  (
    theme: Theme,
    obj: StyledBoxProps,
    cssKey: string,
    key: string,
    type: 'spacing' | 'color' | 'backgroundColor'
  ) => {
    if (!obj[key]) {
      return undefined;
    }

    if (type === 'spacing') {
      // if is horizontal padding or margin
      if (key === 'px' || key === 'mx') {
        return {
          [cssKey]: `${theme.globals[type].get(obj[key] || '0')} 0`,
        };
      }
      // if is vertical padding or margin
      if (key === 'py' || key === 'my') {
        return {
          [cssKey]: `0 ${theme.globals[type].get(obj[key] || '0')}`,
        };
      }

      return {
        [cssKey]: theme.globals[type].get(obj[key]),
      };
    }
    if (type === 'color') {
      return {
        [cssKey]: theme.tokens.textColor.get(obj[key]),
      };
    }

    return {
      [cssKey]: theme.tokens.backgroundColor.get(obj[key]),
    };
  }
);
