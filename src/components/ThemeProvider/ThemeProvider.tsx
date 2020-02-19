import * as React from 'react';
import { normalize } from 'polished';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import { assign, keys, pick } from 'lodash';
import theme, { Theme } from 'theme';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: any;
};

const deepMergeTheme = (newTheme?: Theme): Theme => assign(theme, pick(newTheme, keys(theme)));

const globalStyles = css`
  ${normalize()};
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
