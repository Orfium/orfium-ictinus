import { rem } from 'polished';

const spacing: Spacing = {
  xsm: rem(4),
  sm: rem(8),
  md: rem(16),
  lg: rem(32),
};

export type Spacing = {
  xsm: string;
  sm: string;
  md: string;
  lg: string;
};

export default spacing;
