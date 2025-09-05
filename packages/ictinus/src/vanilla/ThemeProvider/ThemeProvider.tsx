import { Slot } from '@radix-ui/react-slot';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ColorScheme = 'light' | 'dark';

if (import.meta.env.MODE === 'production') {
  import('@orfium/tokens/styles.css');
}

type ThemeContextValue = {
  /** Active color scheme */
  colorScheme: ColorScheme;
  /** Update color scheme */
  setColorScheme(colorScheme: ColorScheme): void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const themeColorSchemeAttribute = 'data-theme';

export type ThemeProviderProps = {
  /** Default color scheme. If not provided, will use system preference */
  colorScheme?: ColorScheme;
  /** Element to bind theme (defaults to document.documentElement) */
  asChild?: boolean;
};

const getSystemColorScheme = (): ColorScheme => {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider = ({
  children,
  colorScheme: initialColorScheme,
  asChild,
}: React.PropsWithChildren<ThemeProviderProps>) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    () => initialColorScheme ?? getSystemColorScheme()
  );

  const isSystemScheme = !initialColorScheme;

  const value = useMemo(
    () => ({
      colorScheme,
      setColorScheme,
    }),
    [colorScheme]
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !isSystemScheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (evt: MediaQueryListEvent) =>
      setColorScheme(evt.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isSystemScheme]);

  useEffect(() => {
    if (asChild) return;

    const root = document.documentElement;

    root.setAttribute(themeColorSchemeAttribute, colorScheme);
    root.style.colorScheme = colorScheme;
  }, [colorScheme, asChild]);

  if (asChild) {
    return (
      <ThemeContext.Provider value={value}>
        <Slot data-theme={colorScheme} style={{ colorScheme }}>
          {children}
        </Slot>
      </ThemeContext.Provider>
    );
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw Error('Must be used within ThemeProvider');

  return context;
};
