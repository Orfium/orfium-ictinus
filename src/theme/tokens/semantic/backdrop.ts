import backDropFigma from './variables/backdrop';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticBackDrop = {
  get: (val: DotKeys<typeof backDropFigma>) => string;
};

const backDrop: SemanticBackDrop = {
  get: getTokensValue(backDropFigma),
};

export default backDrop;
