import { default as search } from '../../theme/tokens/components/variables/search';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type SearchTokens = DotKeys<typeof search>;
export declare const getSearchTokens: (theme: Theme) => (path: "height.normal", fn?: (val: string) => unknown) => any;
