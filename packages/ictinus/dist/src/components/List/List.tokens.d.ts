import { default as listItem } from '../../theme/tokens/components/variables/listItem';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type ListItemTokens = DotKeys<typeof listItem>;
export declare const getListItemTokens: (theme: Theme) => (path: "height" | "heightCompact", fn?: (val: string) => unknown) => any;
