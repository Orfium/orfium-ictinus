import { default as avatar } from '../../theme/tokens/components/variables/avatar';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export declare const parseAvatarIconSize: (val: string) => number;
export declare const parseAvatarStackSize: (val: string) => string;
export type AvatarTokens = DotKeys<typeof avatar>;
export declare const getAvatarTokens: (theme: Theme) => (path: "label.1" | "label.2" | "label.3" | "label.4" | "label.5" | "label.6" | "size.1" | "size.2" | "size.3" | "size.4" | "size.5" | "size.6", fn?: (val: string) => unknown) => any;
