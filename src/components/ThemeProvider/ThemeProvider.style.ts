import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import type { Theme } from 'theme';

import {
  body01,
  headline01,
  headline02,
  headline03,
  headline04,
  headline05,
} from '../Typography/Typography.config.styles';

export const scrollbar = (theme: Theme): SerializedStyles => css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.tokens.colors.get('palette.primary.muted')};
    border-radius: 5px;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${theme.tokens.colors.get('palette.primary.muted')} transparent;
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
  body {
    ${body01(theme)};
  }

  #root {
  }

  h1 {
    ${headline01(theme)}
  }
  h2 {
    ${headline02(theme)}
  }
  h3 {
    ${headline03(theme)}
  }
  h4 {
    ${headline04(theme)}
  }
  h5 {
    ${headline05(theme)}
  }

  // default outline for all focused elements defined by the design team
  // our lightGrey base color (500 shade) with opacity at 50%
  *:focus {
    outline: 0;
  }

  ::view-transition-group(*) {
    animation-duration: 250ms;
    /* swift out */
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  ::view-transition-new(.toast):only-child {
    animation-name: fade-in-up;
  }

  ::view-transition-old(.toast):only-child {
    animation-name: fade-out;
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
  }
`;
