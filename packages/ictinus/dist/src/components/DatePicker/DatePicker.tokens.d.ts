import { default as datePicker } from '../../theme/tokens/components/variables/datePicker';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type DatePickerTokens = DotKeys<typeof datePicker>;
export declare const getDatePickerTokens: (theme: Theme) => ((path: DatePickerTokens, fn?: (val: string) => any) => string);
