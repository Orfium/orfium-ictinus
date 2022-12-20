import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';
import spacingFigma from './constants/spacing';

export type SpacingKey = keyof typeof spacingFigma;

export type Spacing = {
  get: (val: SpacingKey) => string;
};

const spacing: Spacing = {
  get: getFigmaTokensValue<SpacingKey>(spacingFigma, FigmaTokenValueType.Pixels),
};

export default spacing;
