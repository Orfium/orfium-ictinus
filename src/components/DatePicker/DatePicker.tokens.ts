import datePicker from 'theme/tokens/components/variables/datePicker';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type DatePickerTokens = DotKeys<typeof datePicker>;

export const getDatePickerTokens = (
  theme: Theme
): ((path: DatePickerTokens, fn?: (val: string) => any) => string) => {
  return getComponentTokens(datePicker, theme);
};
