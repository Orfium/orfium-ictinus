import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { assign, keys, pick } from 'lodash';
import theme, { Theme } from 'theme';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: any;
};

const deepMergeTheme = (newTheme: Theme): Theme => assign(theme, pick(newTheme, keys(theme)));

const ThemeProvider: React.FC<Props> = ({ theme = {}, children }) => {
  return <EmotionThemeProvider theme={deepMergeTheme(theme)}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
