import { ExtendedColumn } from '../types';

export const isItemString = (prop: string | ExtendedColumn): prop is string =>
  typeof prop === 'string';
