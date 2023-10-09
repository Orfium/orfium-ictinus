import { get } from 'lodash';
import globals from 'theme/globals';
import { Theme } from 'theme/types';

import { Token, TokensObject } from './types';
import { ColorsKey } from '../../globals/colors';

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

  const valueArray = value.slice(1, -1).split('.');

  const category = valueArray[0];
  const item = valueArray[1];

  return get(globals, category)?.get(item) ?? '';
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
 * @param path value of the comp-tier token, e.g.: {sem.palette.accents.red.main} of avatar comp
 * @param fn callback to normalize values
 * @returns the parsed value of the requested path
 */
export const parseComponentToken =
  (path: string, fn?: (val: string) => unknown) => (theme: Theme) => {
    if (!path.length) return '';

    const pathKeys = path.slice(1, -1).split('.');

    if (pathKeys[0] === 'sem') {
      const category = pathKeys[1]; // backdrop | backgroundColor | borderColor | disabledState | palette | textColor | typography
      const rest = pathKeys.slice(2).join('.');

      return theme.tokens[category].get(rest, fn);
    }

    const category = pathKeys[0];
    const rest = pathKeys.slice(1).join('.');

    return theme.globals[category].get(rest, fn);
  };
