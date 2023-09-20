import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { ThemeSwitchProvider, useThemeSwitch } from 'hooks/useThemeSwitch';
import { keys, merge, pick } from 'lodash';
import React from 'react';
import theme, { Theme, ThemeConfig } from 'theme';
import { DeepPartial, ReactFCC } from 'utils/types';

import { globalStyles } from './ThemeProvider.style';
import { TypeColorToColorMatchProvider } from '../../hooks/useTypeColorToColorMatch';
import { ColorScheme } from '../../theme/types';
import { enhancePaletteWithShades } from '../../theme/utils';
import 'utils/initLocaleFormat';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: DeepPartial<ThemeConfig>;
};

const deepMergeTheme = (newTheme: DeepPartial<Theme>, theming: 'dark' | 'light'): Theme =>
  merge(theme(theming), pick(newTheme, keys(theme(theming))));

const ThemeProvider: ReactFCC<Props> = ({ theme = {}, children }) => {
  return (
    <ThemeSwitchProvider>
      <ThemeProviderContents theme={theme}>{children}</ThemeProviderContents>
    </ThemeSwitchProvider>
  );
};

const ThemeProviderContents: ReactFCC<Props> = ({ theme = {}, children }) => {
  const themeSwitchState = useThemeSwitch();
  const colorScheme = themeSwitchState.dark ? 'dark' : ('light' as ColorScheme);
  const newTheme = {
    ...theme,
    colorScheme,
    palette: theme?.palette ? enhancePaletteWithShades(theme.palette) : {},
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

//force deployment
