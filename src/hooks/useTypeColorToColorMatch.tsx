import * as React from 'react';
import { useTheme } from '../index';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import { flatPalette, generatedColorShades, mainTypes } from '../theme/palette';
import { ColorShapeFromComponent } from '../utils/themeFunctions';

const defaultContextData = {
  typesShadesColor: {},
};

const TypeColorToColorMatchContext = React.createContext<{ typesShadesColor: TypesShadeAndColors }>(
  // @ts-ignore
  defaultContextData
);
const useTypeColorToColorMatch = () => {
  return React.useContext<{ typesShadesColor: TypesShadeAndColors }>(TypeColorToColorMatchContext);
};

export type TypesShadeAndColors = Record<typeof mainTypes[number], ColorShapeFromComponent>;

/**
 * Apply for each type passed what color it is and shade (shade now is auto applied at 400)
 * return e.g { primary: { shade: 400, color: 'orange'}, info: { shade: 400, color: 'darkBlue'}}
 */
const calculateTypesShadeAndColors = (
  types: Record<typeof mainTypes[number], generatedColorShades>,
  palette: flatPalette
) =>
  keys(types).reduce((typeAcc, key) => {
    const typeColor = types[key][400]; // base color of the type

    typeAcc[key] = keys(palette).reduce((acc, color) => {
      const foundShadeWithThatColor = keys(palette[color]).find(shade => {
        return palette[color][shade] === typeColor;
      }) as string;

      return foundShadeWithThatColor
        ? { shade: Number(foundShadeWithThatColor), color: color }
        : acc;
    }, {});

    return typeAcc;
  }, {}) as TypesShadeAndColors;

const TypeColorToColorMatchProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  const types = pick(theme.palette, mainTypes);

  const typesShadesColor = React.useMemo(() => {
    return calculateTypesShadeAndColors(types, theme.palette.flat);
  }, [types, theme]);

  return (
    <TypeColorToColorMatchContext.Provider
      value={{
        typesShadesColor,
      }}
    >
      {children}
    </TypeColorToColorMatchContext.Provider>
  );
};

export { TypeColorToColorMatchProvider, useTypeColorToColorMatch };
