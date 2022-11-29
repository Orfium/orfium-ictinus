import spacingFigma from './constants/spacing';
import { getFigmaTokensValue } from './utils';

export type SpacingKey = keyof typeof spacingFigma;

export type Spacing = {
  get: (val: SpacingKey) => string;
};

const spacing: Spacing = {
  get: getFigmaTokensValue<SpacingKey>(spacingFigma),
};

export default spacing;
