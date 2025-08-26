import { default as progressIndicator } from '../../theme/tokens/components/variables/progressIndicator';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type ProgressIndicatorTokens = DotKeys<typeof progressIndicator>;
export declare const getProgressIndicatorTokens: (theme: Theme) => (path: "height.linear" | "height.linearBlock", fn?: (val: string) => unknown) => any;
