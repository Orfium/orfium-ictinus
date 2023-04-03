import { get, isEmpty } from 'lodash';
import { Theme } from 'theme';

import { parseComponentToken } from './parsers';
import { Token, TokensObject } from './types';

/**
 *
 * @param object a variable from the tokens/components/variables directory
 * @param theme
 * @param path path of the requested token value. e.g: 'color.red.background' for avatar
 * @param fn callback to normalize value
 * @returns the parsed value of the requested path
 */
export const getComponentTokens =
  (object: TokensObject | Token, theme: Theme) => (path: string, fn?: (val: string) => unknown) => {
    if (object?.value) {
      return parseComponentToken((object as Token).value, fn)(theme);
    }

    const pathKeys = path.split('.');
    const tokensObject = get(object, pathKeys, {});

    return !isEmpty(tokensObject) ? parseComponentToken(tokensObject.value, fn)(theme) : '';
  };
