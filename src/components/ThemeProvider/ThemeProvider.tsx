import React from 'react';
import { normalize } from 'polished';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import { assign, keys, pick } from 'lodash';
import theme, { Theme } from 'theme';
import { useThemeSwitch } from 'hooks/useThemeSwitch';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: any;
};

const deepMergeTheme = (newTheme: Theme, theming: 'dark' | 'light'): Theme =>
  assign(theme(theming), pick(newTheme, keys(theme(theming))));

const globalStyles = css`
  ${normalize()};
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');

  body,
  html {
    font-family: 'Lato', Tahoma;
    font-size: 16px;
    font-weight: normal;
  }

  #root {
    display: 'flex';
  }
`;

const ThemeProvider: React.FC<Props> = ({ theme = {}, children }) => {
  const themeSwitchState = useThemeSwitch();

  return (
    <EmotionThemeProvider
      theme={deepMergeTheme(
        {
          ...theme,
        },
        themeSwitchState.dark ? 'dark' : 'light'
      )}
    >
      {children}
      <Global styles={globalStyles} />
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
