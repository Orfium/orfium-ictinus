import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { keys, merge, pick } from 'lodash';
import theme, { Theme, ThemeConfig } from 'theme';
import { useThemeSwitch } from 'hooks/useThemeSwitch';
import { enhancePaletteWithShades } from '../../theme/utils';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: DeepPartial<ThemeConfig>;
};

const deepMergeTheme = (newTheme: DeepPartial<Theme>, theming: 'dark' | 'light'): Theme =>
  merge(theme(theming), pick(newTheme, keys(theme(theming))));

const ThemeProvider: React.FC<Props> = ({ theme = {}, children }) => {
  const themeSwitchState = useThemeSwitch();
  const newTheme = {
    ...theme,
    palette: theme?.palette ? enhancePaletteWithShades(theme.palette) : {},
  };

  return (
    <EmotionThemeProvider
      theme={deepMergeTheme(newTheme, themeSwitchState.dark ? 'dark' : 'light')}
    >
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;

//force deployment
