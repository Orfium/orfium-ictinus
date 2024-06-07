import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { ThemeSwitchProvider, useThemeSwitch } from 'hooks/useThemeSwitch';
import { keys, merge, pick } from 'lodash-es';
import * as React from 'react';
import type { Theme, ThemeConfig } from 'theme';
import theme from 'theme';
import type { DeepPartial } from 'utils/types';

import { globalStyles } from './ThemeProvider.style';
import { TypeColorToColorMatchProvider } from '../../hooks/useTypeColorToColorMatch';
import type { ColorScheme } from '../../theme/types';
import 'utils/date';

export type ThemeProviderProps = {
  /** Theme properties to override or pass theming down to library */
  theme?: DeepPartial<ThemeConfig>;
};

const deepMergeTheme = (newTheme: DeepPartial<Theme>, theming: 'dark' | 'semantic'): Theme =>
  merge(theme(theming), pick(newTheme, keys(theme(theming))));

const ThemeProvider: React.FCC<ThemeProviderProps> = ({ theme = {}, children }) => {
  return (
    <ThemeSwitchProvider>
      <ThemeProviderContents theme={theme}>{children}</ThemeProviderContents>
    </ThemeSwitchProvider>
  );
};

const ThemeProviderContents: React.FCC<ThemeProviderProps> = ({ theme = {}, children }) => {
  const themeSwitchState = useThemeSwitch();
  const colorScheme = themeSwitchState.isDark ? 'dark' : ('semantic' as ColorScheme);
  const newTheme = {
    colorScheme,
    overrides: theme?.overrides,
  };

  return (
    <EmotionThemeProvider theme={deepMergeTheme(newTheme, colorScheme)}>
      <TypeColorToColorMatchProvider>
        <Global styles={globalStyles} />
        {children}
      </TypeColorToColorMatchProvider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
