import { default as tag } from '../../theme/tokens/components/variables/tag';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type TagTokens = DotKeys<typeof tag>;
export declare const getTagTokens: (theme: Theme) => (path: "small.height" | "normal.height", fn?: (val: string) => unknown) => any;
