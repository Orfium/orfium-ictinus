import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import {
  defaultTagBase,
  defaultTagColorCompoundVariants,
  defaultTagColorVariants,
  defaultTagSizeVariants,
  tagBase,
} from '../Tag/Tag.css';

export const badge = recipe({
  base: [tagBase],
  variants: {
    variant: {
      default: [...defaultTagBase],
      code: [
        sprinkles({
          py: '1',
          backgroundColor: 'palette.secondary.contrast',
        }),
      ],
    },
    size: defaultTagSizeVariants,
    color: defaultTagColorVariants,
  },
  compoundVariants: [
    {
      variants: { variant: 'code', size: 'normal' },
      style: [
        sprinkles({
          px: '4',
          borderRadius: '2',
        }),
      ],
    },
    {
      variants: { variant: 'code', size: 'small' },
      style: [
        sprinkles({
          px: '3',
          borderRadius: '1',
        }),
      ],
    },
    ...defaultTagColorCompoundVariants.map((cv) => ({
      ...cv,
      variants: { ...cv.variants, variant: 'default' as const },
    })),
  ],
  defaultVariants: {
    variant: 'default',
    size: 'normal',
    color: 'neutral',
  },
});

export const text = recipe({
  base: [sprinkles({})],
  variants: {
    variant: {
      default: [],
      code: [
        sprinkles({
          fontFamily: 'mono',
        }),
      ],
    },
    size: {
      normal: [],
      small: [],
    },
    color: {
      neutral: [],
      blue: [],
      red: [],
      purple: [],
      teal: [],
      orange: [],
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'default', size: 'normal' },
      style: [
        sprinkles({
          typography: 'label02',
        }),
      ],
    },
    {
      variants: { variant: 'default', size: 'small' },
      style: [
        sprinkles({
          typography: 'label03',
        }),
      ],
    },
    {
      variants: { variant: 'code', size: 'normal' },
      style: [
        sprinkles({
          typography: 'body02',
        }),
      ],
    },
    {
      variants: { variant: 'code', size: 'small' },
      style: [
        sprinkles({
          typography: 'body03',
        }),
      ],
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'normal',
    color: 'neutral',
  },
});

export type BadgeVariants = Parameters<typeof badge>[0];
