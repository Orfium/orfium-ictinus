import { default as link } from '../../theme/tokens/components/variables/link';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type LinkTokens = DotKeys<typeof link>;
export declare const getLinkTokens: (theme: Theme) => (path: "block.1" | "block.2" | "block.3" | "inline.1" | "inline.2" | "inline.3", fn?: (val: string) => unknown) => any;
