import tag from 'theme/tokens/components/variables/tag';
import { getComponentTokens, DotKeys } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type TagTokens = DotKeys<typeof tag>;

export const getTagTokens = (theme: Theme) => {
  return getComponentTokens<TagTokens>(tag, theme);
};
