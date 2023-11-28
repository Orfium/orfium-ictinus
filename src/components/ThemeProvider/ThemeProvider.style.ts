import type { SerializedStyles} from '@emotion/react';
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import type { Theme } from 'theme';

export const scrollbar = (theme: Theme): SerializedStyles => css`
  // for Firefox
  * {
    scrollbar-width: thin;
  }

  // for Chrome
  ::-webkit-scrollbar {
    width: ${theme.globals.spacing.get('4')};
    height: ${theme.globals.spacing.get('4')};
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.utils.getColor('lightGrey', 350)};
    border-radius: ${theme.globals.spacing.get('9')};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.utils.getColor('lightGrey', 500)};
  }
`;

export const globalStyles = (theme: Theme): SerializedStyles => css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700;900&family=Roboto:wght@300;400;500;700;900&display=swap');
  ${emotionReset};
  ${scrollbar(theme)}

  body,
  html {
    font-family: 'Roboto', Tahoma, sans-serif;
    font-size: 16px;
    font-weight: normal;
  }

  #root {
  }

  // default outline for all focused elements defined by the design team
  // our lightGrey base color (500 shade) with opacity at 50%
  *:focus {
    outline: 0;
  }
`;
