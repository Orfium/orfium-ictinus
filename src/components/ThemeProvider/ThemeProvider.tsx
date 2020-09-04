import React from 'react';
import { normalize } from 'polished';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
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
  const newTheme = {
    ...theme,
    palette: theme?.palette ? enhancePaletteWithShades(theme.palette) : {},
  };

  return (
    <EmotionThemeProvider
      theme={deepMergeTheme(newTheme, themeSwitchState.dark ? 'dark' : 'light')}
    >
      {children}
      <Global styles={globalStyles} />
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;

//force deployment
