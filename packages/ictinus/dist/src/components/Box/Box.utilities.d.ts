import { Theme } from 'theme';
import { StyledBoxProps } from './Box.types';
export declare const omitedCSSprops: string[];
export declare const styledBoxPropsKeys: Array<keyof StyledBoxProps>;
/**
 * Picks from any given object only css properties defined styledBoxPropsKeys
 **/
export declare const pickCSSProperties: (obj: Record<string, any>) => StyledBoxProps;
/**
 * Omit from any given object only css properties defined styledBoxPropsKeys
 **/
export declare const pickNonCSSProps: (obj: Record<string, any>) => import('lodash').Omit<Record<string, any>, keyof StyledBoxProps>;
/**
 * Resolves any value from the given theme based on type if css property exists on the object given.
 **/
export declare const cssResolver: import('lodash').CurriedFunction5<Theme, StyledBoxProps, string, string, "color" | "spacing" | "backgroundColor", {
    [x: string]: string;
}>;
