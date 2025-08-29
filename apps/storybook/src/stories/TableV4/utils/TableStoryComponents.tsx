import type { FC } from 'react';

import type { TableV4Types } from '@orfium/ictinus';

/** This is just a dummy component to be used in Storybook for showing the Row type on props */
export const RowStory: FC<TableV4Types.Row<unknown>> = () => <div>dummy text to render props</div>;

/** This is just a dummy component to be used in Storybook for showing the Cell type on props */
export const CellStory: FC<TableV4Types.Cell<unknown>> = () => (
  <div>dummy text to render props</div>
);

/** This is just a dummy component to be used in Storybook for showing the ExtendedColumn type on props */
export const ExtendedColumnStory: FC<TableV4Types.ExtendedColumn> = () => (
  <div>dummy text to render props</div>
);
