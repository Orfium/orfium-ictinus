import { rem } from 'polished';

import spacingFigma from './constants/spacing';

export type SpacingKey = keyof typeof spacingFigma;

const getSpace = (val: SpacingKey): string => rem(Number(spacingFigma[val].value));

export const spaces = {
  get: getSpace,
} as const;

const spacing: Spacing = {
  get: getSpace,
};

export type Spacing = {
  get: typeof spaces.get;
};

export default spacing;
