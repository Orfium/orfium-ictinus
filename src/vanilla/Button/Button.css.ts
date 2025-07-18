import { style } from '@vanilla-extract/css';
import { atoms } from '~/css/atoms';

export const button = style([
  atoms({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: { base: 'palette.primary', hover: 'palette.primary.contrast' },
    color: 'inverted.primary',
    p: 'md',
    borderRadius: '2',
    height: '9',
    transitionProperty: 'colors',
    transitionTimingFunction: 'inOut',
    transitionDuration: '150ms',
  }),
]);
