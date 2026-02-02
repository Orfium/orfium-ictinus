import { recipe } from '@vanilla-extract/recipes';
import { style } from '../vanilla-extract';

export const className = style({});

export const root = recipe({
  base: className,
});
