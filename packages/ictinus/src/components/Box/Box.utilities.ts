import { curry, omit, pick } from 'lodash-es';
import type { Theme } from 'theme';
import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';

import type { StyledBoxProps } from './Box.types';

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
  'gap',
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
      // Handle padding
      if (key === 'px' || key === 'py') {
        const horizontalValue = obj['px'] ? theme.globals[type].get(obj['px']) : '0';
        const verticalValue = obj['py'] ? theme.globals[type].get(obj['py']) : '0';

        return {
          [cssKey]: `${verticalValue} ${horizontalValue}`,
        };
      }
      // Handle margin
      if (key === 'mx' || key === 'my') {
        const horizontalValue = obj['mx'] ? theme.globals[type].get(obj['mx']) : '0';
        const verticalValue = obj['my'] ? theme.globals[type].get(obj['my']) : '0';

        return {
          [cssKey]: `${verticalValue} ${horizontalValue}`,
        };
      }

      return {
        [cssKey]: theme.globals[type].get(obj[key]),
      };
    }
    if (type === 'color') {
      return {
        [cssKey]: theme.tokens.colors.get(`textColor.${obj[key]}` as SemanticColorsKey),
      };
    }

    return {
      [cssKey]: theme.tokens.colors.get(`backgroundColor.${obj[key]}` as SemanticColorsKey),
    };
  }
);
