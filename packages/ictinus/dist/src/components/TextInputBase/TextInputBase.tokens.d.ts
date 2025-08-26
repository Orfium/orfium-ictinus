import { default as field } from '../../theme/tokens/components/variables/field';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type TextInputBaseTokens = DotKeys<typeof field>;
export declare const getTextInputBaseTokens: (theme: Theme) => (path: "minWidth.small.compact" | "minWidth.small.normal" | "minWidth.medium.compact" | "minWidth.medium.normal" | "minWidth.large.normal" | "minWidth.extraLarge.normal" | "content.padding" | "container.compact" | "container.normal" | "addOn.height.compact" | "addOn.height.normal" | "addOn.padding.compact" | "addOn.padding.normal" | "addOn.padding.textArea", fn?: (val: string) => unknown) => any;
