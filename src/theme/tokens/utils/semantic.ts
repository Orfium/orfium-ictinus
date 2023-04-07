import { get, isEmpty } from 'lodash';

import { parseToken } from './parsers';
import { Token, TokensObject } from './types';

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
