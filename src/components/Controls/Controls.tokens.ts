import controls from 'theme/tokens/components/variables/controls';
import { getComponentTokens } from 'theme/tokens/utils';
import type { DotKeys } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ControlsTokens = DotKeys<typeof controls>;

export const getControlsTokens = (theme: Theme) => {
  return getComponentTokens<ControlsTokens>(controls, theme);
};
