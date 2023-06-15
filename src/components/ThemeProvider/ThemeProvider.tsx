import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { ThemeSwitchProvider, useThemeSwitch } from 'hooks/useThemeSwitch';
import { keys, merge, pick } from 'lodash';
import React from 'react';
import theme, { Theme, ThemeConfig } from 'theme';

import { globalStyles } from './ThemeProvider.style';
import { TypeColorToColorMatchProvider } from '../../hooks/useTypeColorToColorMatch';
import { ColorScheme } from '../../theme/types';
import { DeepPartial } from '../../utils/types';
import 'utils/date';

export type ThemeProviderProps = {
  /** Theme properties to override or pass theming down to library */
  theme?: DeepPartial<ThemeConfig>;
};

const deepMergeTheme = (newTheme: DeepPartial<Theme>, theming: 'dark' | 'semantic'): Theme =>
  merge(theme(theming), pick(newTheme, keys(theme(theming))));

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = {}, children }) => {
  return (
    <ThemeSwitchProvider>
      <ThemeProviderContents theme={theme}>{children}</ThemeProviderContents>
    </ThemeSwitchProvider>
  );
};

const ThemeProviderContents: React.FC<ThemeProviderProps> = ({ theme = {}, children }) => {
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
