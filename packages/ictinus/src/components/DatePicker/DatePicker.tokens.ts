import { datePicker } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type DatePickerTokens = DotKeys<typeof datePicker>;

export const getDatePickerTokens = (
  theme: Theme
): ((path: DatePickerTokens, fn?: (val: string) => any) => string) => {
  return getComponentTokens(datePicker, theme);
};
