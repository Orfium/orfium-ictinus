import { get, isEmpty } from 'lodash';
import type { Theme } from 'theme';

import { parseComponentToken, parseCompositionToken } from './parsers';
import type { Token, TokensObject } from './types';

/**
 * Must be used on react components in order to fetch their component tokens
 *
 * @param object a variable from the tokens/components/variables directory
 * @param theme
 * @param path path of the requested token value. e.g: 'color.red.background' for avatar
 * @param fn callback to normalize value
 * @returns the parsed value of the requested path
 */
export const getComponentTokens =
  <T extends string>(object: TokensObject | Token, theme: Theme) =>
  (path: T, fn?: (val: string) => unknown) => {
    if (object?.value) {
      return parseComponentToken((object as Token).value, fn)(theme);
    }

    const pathKeys = path.split('.');
    const tokensObject = get(object, pathKeys, {});

    if (tokensObject.type === 'typography' && typeof tokensObject.value === 'object') {
      /** In this case value is a composition token with global typography keys */
      return parseCompositionToken(object)(path);
    }

    return !isEmpty(tokensObject) ? parseComponentToken(tokensObject.value, fn)(theme) : '';
  };
