import { flatColors, paleColors } from './palette';
export type FlatPaletteConfig = Partial<Record<typeof flatColors[number], string>>;
/** @TODO remove this when all components are revisited for v5 */
export type PalePaletteConfig = Partial<Record<typeof paleColors[number], string>>;
/** @TODO remove this when all components are revisited for v5 */
export type TextPaletteConfig = {
    primary?: string;
    secondary?: string;
    light?: string;
};
export type NeutralPaletteConfig = {
    light?: string;
    dark?: string;
    grey?: string;
    transparent?: string;
};
export type GradientPaletteConfig = {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    upsell?: string;
    inverted?: string;
};
export type PaletteConfig = {
    flat?: FlatPaletteConfig;
    gradient?: GradientPaletteConfig;
    neutral?: NeutralPaletteConfig;
    /** @TODO remove all these when all components are revisited for v5 */
    primary?: string;
    secondary?: string;
    success?: string;
    error?: string;
    warning?: string;
    info?: string;
    light?: string;
    link?: string;
    text?: TextPaletteConfig;
    pale?: PalePaletteConfig;
    white?: string;
    black?: string;
};
export declare const flatPaletteConfig: Record<typeof flatColors[number], string>;
/** @TODO remove all these when all components are revisited for v5 */
export declare const palePaletteConfig: Record<typeof paleColors[number], string>;
export declare const paletteConfig: PaletteConfig;
