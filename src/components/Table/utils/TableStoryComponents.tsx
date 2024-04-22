import type React from 'react';

import type { DisplayColumn, TableData } from '../types';

/** This is just a dummy component to be used in Storybook for showing the Row type on props */
export const DisplayColumnStory: React.FC<DisplayColumn> = () => null;

/** This is just a dummy component to be used in Storybook for showing the Cell type on props */
export const TableDataStory: React.FC<TableData<any>> = () => null;
