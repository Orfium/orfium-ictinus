import paletteFigma from './variables/palette';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticPalette = {
  get: (val: DotKeys<typeof paletteFigma>) => string;
};

const palette: SemanticPalette = {
  get: getTokensValue(paletteFigma),
};

export default palette;
