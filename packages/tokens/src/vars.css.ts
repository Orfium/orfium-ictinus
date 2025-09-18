import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { semantic, tokens } from './tokens';

const getVarName = (__value: string | null, path: string[]) => `ictinus-${path.join('-')}` as const;

const baseTokens = tokens;
const baseVars = createGlobalThemeContract(baseTokens, getVarName);
createGlobalTheme(':root', baseVars, { '@layer': 'ictinus.theme', ...baseTokens });

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
        default: ld(baseVars.color.transparent[5], baseVars.color.transparent[10]),
        alt: ld(baseVars.color.transparent[1], baseVars.color.transparent[1]),
      },
      text: {
        default: {
          primary: ld(baseVars.color.neutral[6], baseVars.color.neutral[1]),
          secondary: ld(baseVars.color.neutral[4], baseVars.color.neutral[3]),
          error: ld(baseVars.color.red[7], baseVars.color.red[4]),
          active: ld(baseVars.color.blue[7], baseVars.color.blue[4]),
          visited: ld(baseVars.color.purple[7], baseVars.color.purple[4]),
          warning: ld(baseVars.color.orange[7], baseVars.color.orange[4]),
          success: ld(baseVars.color.teal[7], baseVars.color.teal[4]),
        },
        inverted: {
          primary: ld(baseVars.color.neutral[1], baseVars.color.neutral[6]),
          secondary: ld(baseVars.color.neutral[3], baseVars.color.neutral[4]),
          active: ld(baseVars.color.blue[4], baseVars.color.blue[7]),
          error: ld(baseVars.color.red[4], baseVars.color.red[7]),
          warning: ld(baseVars.color.orange[4], baseVars.color.orange[7]),
          success: ld(baseVars.color.teal[4], baseVars.color.teal[7]),
          visited: ld(baseVars.color.purple[4], baseVars.color.purple[7]),
        },
      },
      'border-color': {
        decorative: {
          transparent: ld(baseVars.color.transparent[1], baseVars.color.transparent[6]),
          default: ld(baseVars.color.transparent[5], baseVars.color.transparent[10]),
          inverted: ld(baseVars.color.transparent[10], baseVars.color.transparent[5]),
        },
        interactive: {
          default: ld(baseVars.color.blue[4], baseVars.color.blue[6]),
          active: ld(baseVars.color.blue[6], baseVars.color.blue[5]),
          error: ld(baseVars.color.red[5], baseVars.color.red[4]),
          upsell: ld(baseVars.color.purple[5], baseVars.color.purple[4]),
          warning: ld(baseVars.color.orange[5], baseVars.color.orange[4]),
          success: ld(baseVars.color.teal[5], baseVars.color.teal[4]),
          focused: ld(baseVars.color.purple[5], baseVars.color.purple[5]),
        },
      },
      indicators: {
        brand: ld(baseVars.color.blue[5], baseVars.color.blue[6]),
        success: ld(baseVars.color.teal[5], baseVars.color.teal[6]),
        pending: ld(baseVars.color.purple[4], baseVars.color.purple[5]),
        warning: ld(baseVars.color.orange[4], baseVars.color.orange[5]),
        error: ld(baseVars.color.red[5], baseVars.color.red[6]),
        inactive: ld(baseVars.color.neutral[3], baseVars.color.neutral[4]),
      },
      palette: {
        error: {
          muted: ld(baseVars.color.red[1], baseVars.color.red[10]),
          base: ld(baseVars.color.red[2], baseVars.color.red[9]),
          contrast: ld(baseVars.color.red[3], baseVars.color.red[8]),
        },
        warning: {
          muted: ld(baseVars.color.orange[1], baseVars.color.orange[10]),
          base: ld(baseVars.color.orange[2], baseVars.color.orange[9]),
          contrast: ld(baseVars.color.orange[3], baseVars.color.orange[8]),
        },
        primary: {
          muted: ld(baseVars.color.blue[5], baseVars.color.blue[6]),
          base: ld(baseVars.color.blue[6], baseVars.color.blue[5]),
          contrast: ld(baseVars.color.blue[7], baseVars.color.blue[4]),
        },
        secondary: {
          muted: ld(baseVars.color.transparent[2], baseVars.color.transparent[7]),
          base: ld(baseVars.color.transparent[3], baseVars.color.transparent[8]),
          contrast: ld(baseVars.color.transparent[4], baseVars.color.transparent[9]),
        },
        success: {
          muted: ld(baseVars.color.teal[1], baseVars.color.teal[10]),
          base: ld(baseVars.color.teal[2], baseVars.color.teal[9]),
          contrast: ld(baseVars.color.teal[3], baseVars.color.teal[8]),
        },
        tertiary: {
          muted: ld(baseVars.color.transparent[2], baseVars.color.transparent[7]),
          base: ld(baseVars.color.transparent[1], baseVars.color.transparent[6]),
          contrast: ld(baseVars.color.transparent[3], baseVars.color.transparent[8]),
        },
        upsell: {
          muted: ld(baseVars.color.purple[1], baseVars.color.purple[10]),
          base: ld(baseVars.color.purple[2], baseVars.color.purple[9]),
          contrast: ld(baseVars.color.purple[3], baseVars.color.purple[8]),
        },
        'primary-alt': {
          muted: ld(baseVars.color.blue[1], baseVars.color.blue[10]),
          base: ld(baseVars.color.blue[2], baseVars.color.blue[9]),
          contrast: ld(baseVars.color.blue[3], baseVars.color.blue[8]),
        },
      },
    },
    'box-shadow': {
      '0': ld(
        `0 0 0 0 ${baseVars.color.transparent[4]}`,
        `0 0 0 0 ${baseVars.color.transparent[6]}`
      ),
      '1': ld(
        `0 2px 4px 0 ${baseVars.color.transparent[4]}`,
        `0 2px 4px 0 ${baseVars.color.transparent[6]}`
      ),
      '2': ld(
        `0 4px 8px 0 ${baseVars.color.transparent[4]}`,
        `0 4px 8px 0 ${baseVars.color.transparent[6]}`
      ),
      '3': ld(
        `0 8px 16px 0 ${baseVars.color.transparent[4]}`,
        `0 8px 16px 0 ${baseVars.color.transparent[6]}`
      ),
      '4': ld(
        `0 16px 24px 0 ${baseVars.color.transparent[4]}`,
        `0 16px 24px 0 ${baseVars.color.transparent[6]}`
      ),
      '5': ld(
        `0 -2px 4px 0 ${baseVars.color.transparent[4]}`,
        `0 -2px 4px 0 ${baseVars.color.transparent[6]}`
      ),
    },
  };
};

const semanticTokens = semantic;
const semanticVars = createGlobalThemeContract(semanticTokens, getVarName);
createGlobalTheme('[data-theme="light"]', semanticVars, {
  '@layer': 'ictinus.theme',
  ...createSemanticTokens('light'),
});

createGlobalTheme('[data-theme="dark"]', semanticVars, {
  '@layer': 'ictinus.theme',
  ...createSemanticTokens('dark'),
});

export const vars = {
  ...baseVars,
  ...semanticVars,
  color: { ...baseVars.color, ...semanticVars.color },
};
