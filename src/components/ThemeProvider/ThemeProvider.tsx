// import theme, { Theme } from 'theme';
import { css, Global } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { keys, merge, pick } from 'lodash';
import { normalize } from 'polished';
import * as React from 'react';
import { useThemeSwitch } from '../../hooks/useThemeSwitch';
import theme, { Theme } from '../../theme';
import { DeepPartial } from '../../utils/types';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: DeepPartial<Theme>;
};

const deepMergeTheme = (newTheme: DeepPartial<Theme>, theming: 'dark' | 'light'): Theme =>
  merge(theme(theming), pick(newTheme, keys(theme(theming))));

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

//force deployment
