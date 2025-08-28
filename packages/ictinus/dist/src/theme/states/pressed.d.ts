import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
export type GetPressedProps = {
    theme: Theme;
    color?: (typeof flatColors)[number];
    shade?: (typeof colorShades)[number] | 0;
};
export type GetPressed = {
    backgroundColor: string;
};
/**
 * On pressed background is darken by two steps in shade.
 * If we exceed the maximum value then we lighten it by two steps.
 * This will be reviewed when dark theme is implemented. **/
export declare const getPressed: ({ theme, color, shade }: GetPressedProps) => GetPressed;
