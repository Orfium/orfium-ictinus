import { Theme } from '../index';
import { colorShades, flatColors } from '../palette';
export type HoverProps = {
    theme: Theme;
    color?: (typeof flatColors)[number];
    shade?: (typeof colorShades)[number] | 0;
};
export type GetHover = {
    backgroundColor: string;
};
/**
 * On hover background is darken by one step in shade.
 * If we exceed the maximum value then we lighten it.
 * This will be reviewed when dark theme is implemented. **/
export declare const getHover: ({ theme, color, shade }: HoverProps) => GetHover;
