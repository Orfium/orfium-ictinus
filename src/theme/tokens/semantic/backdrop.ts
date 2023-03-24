import backDropFigma from './variables/backdrop';
import { getTokensValue } from '../utils';

export type SemanticBackDrop = {
  get: (val: string) => string;
};

const backDrop: SemanticBackDrop = {
  get: getTokensValue(backDropFigma),
};

export default backDrop;
