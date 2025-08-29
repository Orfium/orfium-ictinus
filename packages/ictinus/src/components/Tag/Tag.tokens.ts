import { tag } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type TagTokens = DotKeys<typeof tag>;

export const getTagTokens = (theme: Theme) => {
  return getComponentTokens<TagTokens>(tag, theme);
};
