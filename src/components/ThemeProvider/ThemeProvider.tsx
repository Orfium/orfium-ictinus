import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { css, Global } from '@emotion/react';
import { useThemeSwitch } from 'hooks/useThemeSwitch';
import { keys, merge, pick } from 'lodash';
import { normalize } from 'polished';
import React from 'react';
import theme, { Theme, ThemeConfig } from 'theme';
import { TypeColorToColorMatchProvider } from '../../hooks/useTypeColorToColorMatch';
import { enhancePaletteWithShades } from '../../theme/utils';
import { DeepPartial } from '../../utils/types';
import 'utils/initLocaleFormat';

type Props = {
  /** Theme properties to override or pass theming down to library */
  theme?: DeepPartial<ThemeConfig>;
};

const deepMergeTheme = (newTheme: DeepPartial<Theme>, theming: 'dark' | 'light'): Theme =>
  merge(theme(theming), pick(newTheme, keys(theme(theming))));

export const globalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');
  ${normalize()};

  body,
  html {
    font-family: 'Roboto', Tahoma, sans-serif;
    font-size: 16px;
    font-weight: normal;
  }

  #root {
  }

  // default outline for all focused elements defined by the design team
  // our lightGray base color (400 shade) with opacity at 50%
  *:focus {
    outline: 0;
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
      <TypeColorToColorMatchProvider>
        <Global styles={globalStyles} />
        {children}
      </TypeColorToColorMatchProvider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;

//force deployment
