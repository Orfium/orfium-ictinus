import { get } from 'lodash';
import globals from 'theme/globals';
import type { Theme } from 'theme/types';

import type { Token, TokensObject } from './types';
import type { ColorsKey } from '../../globals/colors';

/**
 *
 * @param token object of type Token with value of the format: {colors.<palette>.<shade>} e.g.: {colors.blue.500}
 *              or rgba/hex format that doesn't need any parsing
 * @returns the hex code of the color
 */
const parseColorToken = (token: Token) => {
  const { value } = token;

  if (value.startsWith('{colors.')) {
    const valueArray = value.slice(1, -1).split('.');
    const colorPath = valueArray.splice(1).join('.');

    return get(globals, 'colors').get(colorPath as ColorsKey);
  }

  return value;
};

/**
 *
 * @param token object of type Token with value of the format: {<globals_key>.<value>} e.g.: {opacity.4}
 * @returns the return value of the get function of the requested globals_key
 */
const parseGenericToken = (token: Token) => {
  const { value } = token;

  const pathArray = value.split(' ');
  const valueArray = [];

  pathArray.map((path) => {
    const a = path.slice(1, -1).split('.');
    const category = a[0];
    const item = a[1];

    valueArray.push(get(globals, category)?.get(item) ?? '');
  });

  return valueArray.join(' ');
};

export const parseToken = (token: Token) => {
  const { type } = token;

  if (type === 'color') {
    return parseColorToken(token);
  }

  return parseGenericToken(token);
};

/**
 *
 * @param object a variable from the tokens/<theme_name>/variables directory
 * @param path the object path to the composition
 * @returns and object with:
 *          [key]: the key of the composition
 *          [value]: the value of the composition converted to css value
 */
export const parseCompositionToken = (object: TokensObject | Token) => (path: string) => {
  const pathKeys = path.split('.');
  const tokensObject = get(object, pathKeys, {});

  if (!tokensObject?.value) return;

  const parsedTokens: any = {};

  Object.keys(tokensObject?.value).forEach((key) => {
    const value = tokensObject.value[key] as string;
    const tokenValues = value.slice(1, -1).split('.');

    parsedTokens[key] = globals.typography[tokenValues[0]].get(tokenValues[1]);
  });

  return parsedTokens;
};

/**
 * Parses component/token values, who point to GLOBAL or SEMANTIC(theme) tokens.
 *
 * @param path value of the comp-tier token, e.g.: {sem.palette.accents.red.base} of avatar comp
 * @param fn callback to normalize values
 * @returns the parsed value of the requested path
 */
export const parseComponentToken =
  (path: string, fn?: (val: string) => unknown) => (theme: Theme) => {
    if (!path.length) return '';

    /** If comp tokens return a constant value not referring to global or semantic tokens
     * we return the exact value and it's up to the component's styles to parse the value
     * accordingly
     */
    if (!path.startsWith('{')) return path;

    const pathArray = path.split(' ');
    const valuesArray = [];

    pathArray.map((path) => {
      const pathKeys = path.slice(1, -1).split('.');

      if (pathKeys[0] === 'sem') {
        const category = pathKeys[1]; // backdrop | backgroundColor | borderColor | disabledState | palette | textColor | typography
        const rest = pathKeys.slice(2).join('.');

        valuesArray.push(theme.tokens[category].get(rest, fn));
      } else {
        const category = pathKeys[0];
        const rest = pathKeys.slice(1).join('.');

        valuesArray.push(theme.globals[category].get(rest, fn));
      }
    });

    return valuesArray.length === 1 ? valuesArray[0] : valuesArray.join(' ');
  };
