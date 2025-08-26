import { default as button } from '../../theme/tokens/components/variables/button';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type ButtonTokens = DotKeys<typeof button>;
export declare const getButtonTokens: (theme: Theme) => (path: "compact.size" | "compact.padding" | "normal.size" | "normal.padding", fn?: (val: string) => unknown) => any;
