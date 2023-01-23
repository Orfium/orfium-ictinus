import { get, isEmpty } from 'lodash';
import globals from 'theme/globals';

export type Token = {
  value: string;
  type: string;
  description?: string;
};

export type TokensObject = {
  [index: string]: string | TokensObject;
};

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
    const color = valueArray[1];
    const shade = Number(valueArray[2]);

    if (color === 'neutral' || color === 'gradient') {
      return get(globals.colors, [color, valueArray[2]], '') as string;
    }

    return get(globals.colors.flat, [color, shade], '') as string;
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

const parseToken = (token: Token) => {
  const { type } = token;

  if (type === 'color') {
    return parseColorToken(token);
  }

  return parseGenericToken(token);
};

/**
 *
 * @param object a variable from the tokens/<theme_name>/variables directory
 * @param path path of the requested token value. e.g: 'systemic.tetiary.dark' for palette object
 * @returns the parsed value of the requested path
 */
export const getTokensValue = (object: TokensObject | Token) => (path: string) => {
  if (object?.value) {
    return parseToken(object as Token);
  }

  const pathKeys = path.split('.');
  const tokensObject = get(object, pathKeys, {});

  return !isEmpty(tokensObject) ? parseToken(tokensObject) : '';
};
