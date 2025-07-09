import { createGlobalTheme } from '@vanilla-extract/css';
import boxShadowVariables from '../tokens/semantic/variables/boxShadow';
import colorsVariables from '../tokens/semantic/variables/colors';
import disabledStateVariables from '../tokens/semantic/variables/disabledState';
import stateVariables from '../tokens/semantic/variables/state';
import typographyVariables from '../tokens/semantic/variables/typography';
import { type ExtractStructureRecursively, extractValuesRecursively } from './utils';

export const semanticVariables = {
  colors: colorsVariables,
  disabledState: disabledStateVariables,
  state: stateVariables,
  typography: typographyVariables,
  boxShadow: boxShadowVariables,
};

export const extractedSemanticTokens: ExtractStructureRecursively<typeof semanticVariables> =
  extractValuesRecursively(semanticVariables);

// Create the light theme
export const lightVars = createGlobalTheme(':root', {
  ...extractedSemanticTokens,
});

export default lightVars;
