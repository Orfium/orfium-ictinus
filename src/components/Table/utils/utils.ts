import { Theme } from 'theme';

import { ExtendedColumn } from '../types';

export const isItemString = (prop: string | ExtendedColumn): prop is string =>
  typeof prop === 'string';

export const getBorderColor = (theme: Theme): string => theme.utils.getColor('lightGrey', 200);
