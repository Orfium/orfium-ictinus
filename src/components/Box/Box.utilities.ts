import { curry, omit, pick } from 'lodash';
import { Theme } from 'theme';

import { StyledBoxProps } from './Box.types';

export const omitedCSSprops = [
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
];

// all CSS properties in an array
export const styledBoxPropsKeys: Array<keyof StyledBoxProps> = [
  'color',
  'backgroundAttachment',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'alignContent',
  'alignItems',
  'alignSelf',
  'flexDirection',
  'display',
  'flex',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnGap',
  'gridColumnStart',
  'gridGap',
  'gridRow',
  'gridRowEnd',
  'gridRowGap',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'position',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'overflow',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'placeContent',
  'placeItems',
  'placeSelf',
  'flexWrap',
  'left',
  'top',
  'right',
  'bottom',
  'textOverflow',
  'whiteSpace',
];

/**
 * Picks from any given object only css properties defined styledBoxPropsKeys
 **/
export const pickCSSProperties = (obj: Record<string, any>): StyledBoxProps => {
  return pick(obj, styledBoxPropsKeys);
};

/**
 * Omit from any given object only css properties defined styledBoxPropsKeys
 **/
export const pickNonCSSProps = (obj: Record<string, any>) => {
  return omit(obj, styledBoxPropsKeys);
};

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
          [cssKey]: `0 ${theme.globals[type].get(obj[key] || '0')}`,
        };
      }
      // if is vertical padding or margin
      if (key === 'py' || key === 'my') {
        return {
          [cssKey]: `${theme.globals[type].get(obj[key] || '0')} 0`,
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
