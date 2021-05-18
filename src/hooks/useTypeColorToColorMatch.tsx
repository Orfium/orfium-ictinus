import useTheme from 'hooks/useTheme';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import * as React from 'react';
import { flatPalette, generatedColorShades, mainTypes } from '../theme/palette';
import {
  calculateActualColorFromComponentProp,
  ColorShapeFromComponent,
} from '../utils/themeFunctions';

const defaultContextData = {
  typesShadesColor: {},
  calculateColorBetweenColorAndType: (color: string, type: typeof mainTypes[number]) => {},
};

type ContextProps = {
  typesShadesColor: TypesShadeAndColors;
  calculateColorBetweenColorAndType: (
    color: string,
    type: typeof mainTypes[number]
  ) => ColorShapeFromComponent;
};

const TypeColorToColorMatchContext = React.createContext<ContextProps>(
  // @ts-ignore
  defaultContextData
);

/**
 * A hook that on provides two methods `typesShadesColor` and `calculateColorBetweenColorAndType`
 * typesShadesColor: calculates on init and returns all types like `primary` in shade and color objects
 * calculateColorBetweenColorAndType: get color and type. If color exists gets it from `calculateActualColorFromComponentProp` if not and only type then it fetches it from the `typesShadesColor`
 */
const useTypeColorToColorMatch = () => {
  return React.useContext<ContextProps>(TypeColorToColorMatchContext);
};

export type TypesShadeAndColors = Record<typeof mainTypes[number], ColorShapeFromComponent>;

/**
 * Apply for each type passed what color it is and shade (shade now is auto applied at 400)
 * as this is heavy this runs only once at the initialization of the app under the theme provider
 * return e.g { primary: { shade: 400, color: 'orange'}, info: { shade: 400, color: 'darkBlue'}}
 */
const calculateTypesShadeAndColors = (
  types: Record<typeof mainTypes[number], generatedColorShades>,
  palette: flatPalette
) => {
  // for each mainType
  return mainTypes.reduce((mainTypeAcc, mainType) => {
    // save the base color of the the type
    const typeColor = types[mainType][400]; // base color of the type
    const flatPaletteKeys = keys(palette); // the keys of the flat palette so we can iterate

    // construct a new key in the main object with name from the main type currently in iteration
    // and return the color found in the flat colors e.g { shade: 400, color: 'orange'}
    // if nothing found then it will return empty object {}
    mainTypeAcc[mainType] = flatPaletteKeys.reduce((acc, paletteColor) => {
      const colorShadesKeys = keys(palette[paletteColor]); // the shades of the palette color currently in the iteration
      const foundShadeWithThatColor = colorShadesKeys.find(
        shade => palette[paletteColor][shade] === typeColor
      );

      // return either the found color as e.g { shade: 400, color: 'orange'} or the object as it was
      return foundShadeWithThatColor
        ? { shade: Number(foundShadeWithThatColor), color: paletteColor }
        : acc;
    }, {});

    return mainTypeAcc;
  }, {}) as TypesShadeAndColors;
};

const TypeColorToColorMatchProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  const types = pick(theme.palette, mainTypes);

  const typesShadesColor = React.useMemo(() => {
    return calculateTypesShadeAndColors(types, theme.palette.flat);
  }, [types, theme]);

  const calculateColorBetweenColorAndType = React.useCallback(
    (color, type) => {
      const calculatedColor = color ? calculateActualColorFromComponentProp(color) : undefined;

      return calculatedColor ? calculatedColor : typesShadesColor[type];
    },
    [types, theme, typesShadesColor]
  );

  return (
    <TypeColorToColorMatchContext.Provider
      value={{
        typesShadesColor,
        calculateColorBetweenColorAndType,
      }}
    >
      {children}
    </TypeColorToColorMatchContext.Provider>
  );
};

export { TypeColorToColorMatchProvider, useTypeColorToColorMatch };
