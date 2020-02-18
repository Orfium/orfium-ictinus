import * as React from 'react';
import { normalize } from 'polished';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import { assign, keys, pick } from 'lodash';
import theme, { Theme } from 'theme';
import palette from 'theme/palette';
import { useThemeSwitch } from 'hooks/useThemeSwitch';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: any;
};

const deepMergeTheme = (newTheme?: Theme): Theme => assign(theme, pick(newTheme, keys(theme)));

const globalStyles = css`
  ${normalize()};
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');

  #root {
    display: 'flex';
  }
`;

const ThemeProvider: React.FC<Props> = ({ theme = {}, children }) => {
  const themeSwitchState = useThemeSwitch();

  debugger;

  return (
    <EmotionThemeProvider
      theme={deepMergeTheme({
        ...theme,
        isDark: themeSwitchState.dark,
        palette: {
          ...palette,
          // success: themeSwitchState.dark ? 'yellow' : palette.success,
        },
      })}
    >
      {children}
      <Global styles={globalStyles} />
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
