import tag from 'theme/tokens/components/variables/tag';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type TagTokens = DotKeys<typeof tag>;

export const getTagTokens = (theme: Theme) => {
  return getComponentTokens<TagTokens>(tag, theme);
};
