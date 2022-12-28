import { getTokensValue } from '../utils';
import backDropFigma from './variables/backdrop';

export type SemanticBackDrop = {
  get: (val: string) => string;
};

const backDrop: SemanticBackDrop = {
  get: getTokensValue(backDropFigma),
};

export default backDrop;
