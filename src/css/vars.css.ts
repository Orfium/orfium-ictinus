import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { layers } from './layers.css';
import { semantic, tokens } from './tokens';

const getVarName = (__value: string | null, path: string[]) => `ictinus-${path.join('-')}` as const;

const baseTokens = tokens;
const baseVars = createGlobalThemeContract(baseTokens, getVarName);
createGlobalTheme(':root', baseVars, { '@layer': layers.theme, ...baseTokens });

const createSemanticTokens = (mode: 'light' | 'dark') => {
  const ld = (lightValue: any, darkValue: any) => (mode === 'light' ? lightValue : darkValue);

  return {
    color: {
      background: {
        default: ld(baseVars.color.neutral[1], baseVars.color.neutral[6]),
        alt: ld(baseVars.color.neutral[2], baseVars.color.neutral[5]),
        inverted: ld(baseVars.color.neutral[6], baseVars.color.neutral[1]),
        invertedAlt: ld(baseVars.color.neutral[5], baseVars.color.neutral[2]),
      },
      backdrop: {
        default: baseVars.color.transparent[5],
        alt: baseVars.color.transparent[1],
      },
      text: {
        default: {
          primary: ld(baseVars.color.neutral[6], baseVars.color.neutral[1]),
          secondary: ld(baseVars.color.neutral[4], baseVars.color.neutral[3]),
          active: baseVars.color.blue[7],
          error: baseVars.color.red[7],
          warning: baseVars.color.orange[7],
          success: baseVars.color.teal[7],
          visited: baseVars.color.purple[7],
        },
        inverted: {
          primary: baseVars.color.neutral[1],
          secondary: baseVars.color.neutral[3],
          active: baseVars.color.blue[4],
          error: baseVars.color.red[4],
          warning: baseVars.color.orange[4],
          success: baseVars.color.teal[4],
          visited: baseVars.color.purple[4],
        },
      },
      'border-color': {
        decorative: {
          transparent: ld(baseVars.color.transparent[1], baseVars.color.transparent[6]),
          default: ld(baseVars.color.transparent[5], baseVars.color.transparent[10]),
          inverted: baseVars.color.transparent[10],
        },
        interactive: {
          default: '',
          active: '',
          error: '',
          upsell: '',
          warning: '',
          success: '',
          focused: '',
        },
      },
      indicators: {
        brand: '',
        success: '',
        pending: '',
        warning: '',
        error: '',
        inactive: '',
      },
      palette: {
        error: {},
        warning: {},
        primary: {
          muted: baseVars.color.blue[5],
          base: baseVars.color.blue[6],
          contrast: baseVars.color.blue[7],
        },
        secondary: {},
        success: {},
        tertiary: {},
        upsell: {},
        'primary-alt': {},
      },
    },
  };
};

const semanticTokens = semantic;
const semanticVars = createGlobalThemeContract(semanticTokens, getVarName);
createGlobalTheme('[data-theme="light"]', semanticVars, {
  '@layer': layers.theme,
  ...createSemanticTokens('light'),
});

createGlobalTheme('[data-theme="dark"]', semanticVars, {
  '@layer': layers.theme,
  ...createSemanticTokens('dark'),
});

export const vars = {
  ...baseVars,
  ...semanticVars,
  color: { ...baseVars.color, ...semanticVars.color },
};
