import stateFigma from './variables/state';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticState = {
  get: (val: DotKeys<typeof stateFigma>) => string;
};

const state: SemanticState = {
  get: getTokensValue(stateFigma),
};

export default state;
