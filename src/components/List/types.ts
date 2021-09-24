import React from 'react';

import { FilterOption } from 'components/Filter/types';
import { SelectOption } from 'components/Select/Select';

export type ListItemType = string | number | SelectOption | FilterOption | React.ReactNode;

export type ListRowSize = 'small' | 'normal';

export type SelectHandlerType =
  | ((option: string) => void)
  | ((option: number) => void)
  | ((option: SelectOption) => void)
  | ((option: FilterOption) => void);
