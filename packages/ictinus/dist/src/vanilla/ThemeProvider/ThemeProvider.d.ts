type ColorScheme = 'light' | 'dark';
type ThemeContextValue = {
    /** Active color scheme */
    colorScheme: ColorScheme;
    /** Update color scheme */
    setColorScheme(colorScheme: ColorScheme): void;
};
export declare const themeColorSchemeAttribute = "data-theme";
export type ThemeProviderProps = {
    /** Default color scheme. If not provided, will use system preference */
    colorScheme?: ColorScheme;
    /** Element to bind theme (defaults to document.documentElement) */
    asChild?: boolean;
};
export declare const ThemeProvider: ({ children, colorScheme: initialColorScheme, asChild, }: React.PropsWithChildren<ThemeProviderProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextValue;
export {};
