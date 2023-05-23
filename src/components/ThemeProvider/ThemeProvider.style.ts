import { SerializedStyles, css } from '@emotion/react';
import { normalize } from 'polished';
import { Theme } from 'theme';

export const scrollbar = (theme: Theme): SerializedStyles => css`
  // for Firefox
  * {
    scrollbar-width: thin;
  }

  // for Chrome
  ::-webkit-scrollbar {
    width: ${theme.spacing.sm};
    height: ${theme.spacing.sm};
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.utils.getColor('lightGrey', 350)};
    border-radius: ${theme.spacing.xl};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.utils.getColor('lightGrey', 500)};
  }
`;

export const globalStyles = (theme: Theme): SerializedStyles => css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');
  ${normalize()};
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
