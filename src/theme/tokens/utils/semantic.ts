import { get, isEmpty } from 'lodash';

import { parseToken } from './parsers';
import type { Token, TokensObject } from './types';

/**
 * Used by themes like semantic in order to fetch all the variables defined in the `tokens/<theme_name>/variables`
 * The returned value is usually used as inside .get of each variable like `textColor.get`
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
