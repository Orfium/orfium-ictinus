import type React from 'react';

import type { Cell, Row } from '../Table';

/** This is just a dummy component to be used in Storybook for showing the Row type on props */
export const RowStory: React.FC<Row<unknown>> = () => null;

/** This is just a dummy component to be used in Storybook for showing the Row type on props */
export const CellStory: React.FC<Cell<unknown>> = () => null;
