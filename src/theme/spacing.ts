import { rem } from 'polished';

const spaces = {
  xsm: '4',
  sm: '8',
  md: '16',
  lg: '24',
  xl: '32',
} as const;

const spacing: Spacing = {
  xsm: rem(Number(spaces.xsm)) as typeof spaces.xsm,
  sm: rem(Number(spaces.sm)) as typeof spaces.sm,
  md: rem(Number(spaces.md)) as typeof spaces.md,
  lg: rem(Number(spaces.lg)) as typeof spaces.lg,
  xl: rem(Number(spaces.xl)) as typeof spaces.xl,
};

export type Spacing = {
  xsm: typeof spaces.xsm;
  sm: typeof spaces.sm;
  md: typeof spaces.md;
  lg: typeof spaces.lg;
  xl: typeof spaces.xl;
};

export default spacing;
