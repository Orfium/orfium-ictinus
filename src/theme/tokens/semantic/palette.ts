import { getTokensValue } from '../utils';
import paletteFigma from './variables/palette';

export type SemanticPalette = {
  get: (val: string) => string;
};

const palette: SemanticPalette = {
  get: getTokensValue(paletteFigma),
};

export default palette;
