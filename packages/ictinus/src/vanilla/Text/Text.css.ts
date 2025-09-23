import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '../../vanilla-extract';

const truncateBase = [{ overflow: 'hidden' } as const, style({ textOverflow: 'ellipsis' })];
const lineClampBase = [
  ...truncateBase,
  style({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  }),
];

export const text = recipe({
  variants: {
    /**
     * Truncate the text at specific number of lines.
     */
    lineClamp: {
      '1': [...lineClampBase, style({ WebkitLineClamp: '1' })],
      '2': [...lineClampBase, style({ WebkitLineClamp: '2' })],
      '3': [...lineClampBase, style({ WebkitLineClamp: '3' })],
      '4': [...lineClampBase, style({ WebkitLineClamp: '4' })],
    },
    /**
     * Whether to truncate the text and add an ellipsis at the end.
     */
    truncate: {
      true: [
        ...truncateBase,
        {
          whiteSpace: 'nowrap',
        },
      ],
    },
  },
});

export type TextVariants = RecipeVariants<typeof text>;
