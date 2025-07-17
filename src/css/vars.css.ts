import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { layers } from './layers.css';
import { semantic, tokens } from './tokens';

const getVarName = (__value: string | null, path: string[]) => `ictinus-${path.join('-')}`;

const baseTokens = tokens;
const baseVars = createGlobalThemeContract(baseTokens, getVarName);
createGlobalTheme(':root', baseVars, { '@layer': layers.theme, ...baseTokens });

const semanticTokens = semantic;
const semanticVars = createGlobalThemeContract(semanticTokens, getVarName);
createGlobalTheme('[data-theme="light"]', semanticVars, {
  '@layer': layers.theme,
  color: {
    background: {
      default: baseVars.color.neutral[1],
      alt: baseVars.color.neutral[2],
      inverted: baseVars.color.neutral[6],
      invertedAlt: baseVars.color.neutral[5],
    },
    backdrop: {
      default: baseVars.color.transparent[5],
      alt: baseVars.color.transparent[1],
    },
    text: {
      default: {
        primary: baseVars.color.neutral[6],
        secondary: baseVars.color.neutral[4],
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
        transparent: baseVars.color.transparent[1],
        default: baseVars.color.transparent[5],
      },
    },
  },
});

createGlobalTheme('[data-theme="dark"]', semanticVars, {
  '@layer': layers.theme,
  color: {
    background: {
      default: baseVars.color.neutral[6],
      alt: baseVars.color.neutral[5],
      inverted: baseVars.color.neutral[1],
      invertedAlt: baseVars.color.neutral[2],
    },
    backdrop: {
      default: baseVars.color.transparent[5],
      alt: baseVars.color.transparent[1],
    },
    text: {
      default: {
        primary: baseVars.color.neutral[1],
        secondary: baseVars.color.neutral[3],
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
        transparent: baseVars.color.transparent[6],
        default: baseVars.color.transparent[10],
      },
    },
  },
});

export const vars = {
  ...baseVars,
  ...semanticVars,
  color: { ...baseVars.color, ...semanticVars.color },
};
