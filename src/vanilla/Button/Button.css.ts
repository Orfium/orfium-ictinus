import { style } from '@vanilla-extract/css';
import { atoms } from '~/css/atoms';

export const button = style([
  atoms({
    bg: 'palette.primary',
    color: 'inverted.primary',
    p: 'md',
    borderRadius: '2',
  }),
]);
