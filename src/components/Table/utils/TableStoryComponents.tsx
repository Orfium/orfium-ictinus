import type React from 'react';

import type { TableRow, ColumnsConfig, TableColumn, RowsConfig } from '../types';

/** This is just a dummy component to be used in Storybook for showing the ColumnsConfig type on props */
export const ColumnsConfigStory: React.FC<ColumnsConfig<unknown>> = () => null;

/** This is just a dummy component to be used in Storybook for showing the GroupColumn type on props */
// export const GroupColumnStory: React.FC<GroupColumn> = () => null;

/** This is just a dummy component to be used in Storybook for showing the DisplayColumn type on props */
export const TableColumnStory: React.FC<TableColumn<unknown>> = () => null;

/** This is just a dummy component to be used in Storybook for showing the RowsConfig type on props */
export const RowsConfigStory: React.FC<RowsConfig> = () => null;

/** This is just a dummy component to be used in Storybook for showing the TableRow type on props */
export const TableRowStory: React.FC<TableRow<unknown>> = () => null;
