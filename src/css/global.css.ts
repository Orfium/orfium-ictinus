import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { layers } from './layers.css';
import { vars } from './vars.css';

globalStyle('*', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      scrollbarWidth: 'thin',
      scrollbarColor: `${vars.color.blue[5]} transparent`,
    },
  },
});

globalStyle('html, body', {
  '@layer': {
    [layers.reset]: {
      backgroundColor: vars.color.background.default,
      color: vars.color.text.default.primary,
      fontFamily: vars.font.sans,
    },
  },
});

globalFontFace('Roboto', [
  {
    src: 'url(https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format("woff2")',
    fontStyle: 'normal',
    fontWeight: 300,
    fontStretch: '100%',
    fontDisplay: 'swap',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  {
    src: 'url(https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format("woff2")',
    fontStyle: 'normal',
    fontWeight: 400,
    fontStretch: '100%',
    fontDisplay: 'swap',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  {
    src: 'url(https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format("woff2")',
    fontStyle: 'normal',
    fontWeight: 500,
    fontStretch: '100%',
    fontDisplay: 'swap',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  {
    src: 'url(https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format("woff2")',
    fontStyle: 'normal',
    fontWeight: 700,
    fontStretch: '100%',
    fontDisplay: 'swap',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  {
    src: 'url(https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format("woff2")',
    fontStyle: 'normal',
    fontWeight: 900,
    fontStretch: '100%',
    fontDisplay: 'swap',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
]);
