import { colorSchemes, colorShades, flatColors } from '../palette';
type StateConfig = {
    hover: {
        backgroundColor: {
            step: number;
        };
    };
    focus: {
        border: {
            width: {
                step: number;
            };
            color: {
                name: typeof flatColors[number];
                shade: typeof colorShades[number];
            };
        };
    };
    pressed: {
        backgroundColor: {
            step: number;
        };
    };
    disabled: {
        opacity: {
            amount: number;
        };
        cursor: {
            name: string;
        };
    };
};
export declare const semanticStatesConfig: StateConfig;
export declare const darkStatesConfig: StateConfig;
export declare const statesConfig: Record<typeof colorSchemes[number], StateConfig>;
export {};
