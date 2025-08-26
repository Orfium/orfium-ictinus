import { default as filter } from '../../theme/tokens/components/variables/filter';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type FilterTokens = DotKeys<typeof filter>;
export declare const getFilterTokens: (theme: Theme) => (path: "height", fn?: (val: string) => unknown) => any;
