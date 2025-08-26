import { PropsValidationError } from './errors';
import { Theme } from '../theme';
import { colorShades, flatColors, mainTypes } from '../theme/palette';
export type AcceptedColorComponentTypes = (typeof mainTypes)[number];
/**
 ** This util provide an easy way to return the hex color from a type based on our main types 'primary', 'light', 'secondary' etc
 */
export declare const getColorFromType: (type: AcceptedColorComponentTypes | string, theme: Theme, variant?: (typeof colorShades)[number]) => string;
export declare const backgroundPickerBasedOnType: (type: AcceptedColorComponentTypes) => (theme: Theme) => string;
export declare const colorPickerBasedOnType: (type: AcceptedColorComponentTypes) => (theme: Theme) => string;
export declare const fillPickerBasedOnType: (type: AcceptedColorComponentTypes | string, variant?: (typeof colorShades)[number]) => (theme: Theme) => string;
/**
 * The type of the calculateActualColorFromComponentProp that will be used for the components
 * translation from string
 * */
export type ColorShapeFromComponent = {
    color: (typeof flatColors)[number];
    shade: (typeof colorShades)[number];
};
type ErrorProp = {
    color: string;
    colorAfterSplit: string[];
};
export declare const errors: {
    condition: ({ colorAfterSplit }: ErrorProp) => boolean;
    error: ({ color }: ErrorProp) => PropsValidationError;
}[];
/**
 * A utility to translate a color like red-500 to an object. This calculates on the color passed picked by our palette.
 * So in case you run a red color for example `#d40000` this will return
 * returns an object or undefined
 * */
export declare const calculateActualColorFromComponentProp: (color: string) => ColorShapeFromComponent;
export {};
