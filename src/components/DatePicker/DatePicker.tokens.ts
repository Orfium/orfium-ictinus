import date from 'theme/tokens/components/variables/date';
import datePicker from 'theme/tokens/components/variables/datePicker';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type DateTokens = DotKeys<typeof date>;
export type DatePickerTokens = DotKeys<typeof datePicker>;

export const getDateTokens = (
  theme: Theme
): ((path: DateTokens, fn?: (val: string) => any) => string) => {
  return getComponentTokens(date, theme);
};

export const getDatePickerTokens = (
  theme: Theme
): ((path: DatePickerTokens, fn?: (val: string) => any) => string) => {
  return getComponentTokens(datePicker, theme);
};
