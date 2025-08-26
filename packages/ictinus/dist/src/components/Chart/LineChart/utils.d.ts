import { Theme } from 'theme';
export type Data = {
    name: string;
    [prop: string]: number | string | undefined;
};
type ColorPickerProps = {
    theme: Theme;
    uniqueKeyNames: string[];
    color?: (dataLabel: string) => string;
};
export declare const getKeyNames: (data: Data[]) => string[];
export declare const colorPicker: ({ theme, uniqueKeyNames, color, }: ColorPickerProps) => Record<string, string>;
export {};
