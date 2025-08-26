import { default as controls } from '../../theme/tokens/components/variables/controls';
import { DotKeys } from '../../theme/tokens/utils';
import { Theme } from '../../theme';
export type ControlsTokens = DotKeys<typeof controls>;
export declare const getControlsTokens: (theme: Theme) => (path: "switch.height.track" | "switch.width.track", fn?: (val: string) => unknown) => any;
