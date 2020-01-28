import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import { assign, pick, keys } from 'lodash';
import theme, { Theme } from 'src/theme/globals';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: any;
};

const deepMergeTheme = (newTheme: Theme): Theme => assign(theme, pick(newTheme, keys(theme)));

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');
`;

const ThemeProvider: React.FC<Props> = ({ theme = {}, children }) => {
  return (
    <EmotionThemeProvider theme={deepMergeTheme(theme)}>
      {children}
      <Global styles={globalStyles} />
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
