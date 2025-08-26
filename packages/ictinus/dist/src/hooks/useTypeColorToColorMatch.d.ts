import { mainTypes } from '../theme/palette';
import { ColorShapeFromComponent } from '../utils/themeFunctions';
import * as React from 'react';
type ContextProps = {
    typesShadesColor: TypesShadeAndColors;
    calculateColorBetweenColorAndType: (color: string, type: (typeof mainTypes)[number]) => ColorShapeFromComponent;
};
/**
 * A hook that on provides two methods `typesShadesColor` and `calculateColorBetweenColorAndType`
 * typesShadesColor: calculates on init and returns all types like `primary` in shade and color objects
 * calculateColorBetweenColorAndType: get color and type. If color exists gets it from `calculateActualColorFromComponentProp` if not and only type then it fetches it from the `typesShadesColor`
 */
declare const useTypeColorToColorMatch: () => ContextProps;
export type TypesShadeAndColors = Record<(typeof mainTypes)[number], ColorShapeFromComponent>;
/** @TODO revisit this provider and remove if obsolete */
declare const TypeColorToColorMatchProvider: React.FCC;
export { TypeColorToColorMatchProvider, useTypeColorToColorMatch };
