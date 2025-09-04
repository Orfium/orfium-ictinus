import { controls } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type ControlsTokens = DotKeys<typeof controls>;

export const getControlsTokens = (theme: Theme) => {
  return getComponentTokens<ControlsTokens>(controls, theme);
};
