import paletteFigma from './variables/palette';
import { getTokensValue } from '../utils';

export type SemanticPalette = {
  get: (val: string) => string;
};

const palette: SemanticPalette = {
  get: getTokensValue(paletteFigma),
};

export default palette;
