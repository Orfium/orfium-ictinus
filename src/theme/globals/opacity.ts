import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';
import opacityFigma from './constants/opacity';

export type OpacityKey = keyof typeof opacityFigma;

export type Opacity = {
  get: (val: OpacityKey) => string;
};

const opacity: Opacity = {
  get: getFigmaTokensValue<OpacityKey>(opacityFigma, FigmaTokenValueType.String),
};

export default opacity;
