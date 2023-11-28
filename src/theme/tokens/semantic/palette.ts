import paletteFigma from './variables/palette';
import type { DotKeys} from '../utils';
import { getTokensValue } from '../utils';

export type SemanticPalette = {
  get: (val: DotKeys<typeof paletteFigma>) => string;
};

const palette: SemanticPalette = {
  get: getTokensValue(paletteFigma),
};

export default palette;
