import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const table = recipe({
  base: [
    sprinkles({
      color: 'primary',
      fontSize: '3',
      w: 'full',
    }),
    style({
      borderCollapse: 'collapse',
      borderColor: 'inherit',
      textIndent: 0,
      captionSide: 'bottom',
    }),
  ],

  variants: {
    /**
     * Use default table layout or grid for rows and cells.
     */
    layout: {
      auto: [
        style({
          /**
           * Setting the table height to 1px allows cell content to stretch and fill
           * up the whole cell height.
           */
          height: '1px',
        }),
      ],
      fixed: [
        {
          display: 'grid',
        },
        style({
          isolation: 'isolate',
        }),
      ],
    },
  },
});

export const wrapper = recipe({
  base: [
    sprinkles({
      bg: 'default',
      border: '1',
      borderStyle: 'solid',
      borderColor: 'decorative.default',
      maxW: 'full',
      overflow: 'auto',
      rounded: '2',
    }),
    style({
      position: 'relative',
    }),
  ],
});

export type TableVariants = RecipeVariants<typeof table>;
