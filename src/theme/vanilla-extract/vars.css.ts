import { createGlobalTheme } from '@vanilla-extract/css';
import borderRadiusTokens from '../globals/constants/borderRadius';
import borderWidthTokens from '../globals/constants/borderWidth';
import colorsTokens from '../globals/constants/colors';
import opacityTokens from '../globals/constants/opacity';
import sizingTokens from '../globals/constants/sizing';
import spacingTokens from '../globals/constants/spacing';
import elevationTokens from '../globals/elevation';

import { type ExtractStructureRecursively, extractValuesRecursively } from './utils';

const globalTokens = {
  colors: colorsTokens,
  spacing: spacingTokens,
  elevation: elevationTokens,
  borderRadius: borderRadiusTokens,
  borderWidth: borderWidthTokens,
  opacity: opacityTokens,
  sizing: sizingTokens,
};

const extractedGlobalTokens: ExtractStructureRecursively<typeof globalTokens> =
  extractValuesRecursively(globalTokens);

export const globalVars = createGlobalTheme(':root', {
  globals: extractedGlobalTokens,
});

export default globalVars;
