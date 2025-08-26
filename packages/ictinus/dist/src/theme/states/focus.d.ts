import { Theme } from '..';
export type GetFocusProps = {
    theme: Theme;
    borderWidth?: number;
};
export type GetFocus = {
    borderWidth: string;
    focusColor: string;
    styleBorder: string;
    styleOutline: string;
};
/**
 * On focus border is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export declare const getFocus: ({ theme, borderWidth }: GetFocusProps) => GetFocus;
