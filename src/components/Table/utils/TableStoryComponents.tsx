import type React from 'react';

import type { Cell, Row } from '../Table';
import type { ExtendedColumn } from '../types';

/** This is just a dummy component to be used in Storybook for showing the Row type on props */
export const RowStory: React.FC<Row<unknown>> = () => null;

/** This is just a dummy component to be used in Storybook for showing the Cell type on props */
export const CellStory: React.FC<Cell<unknown>> = () => null;

/** This is just a dummy component to be used in Storybook for showing the ExtendedColumn type on props */
export const ExtendedColumnStory: React.FC<ExtendedColumn> = () => null;
