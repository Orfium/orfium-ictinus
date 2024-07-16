import type { Key } from 'react';
import type { ComponentSizes } from 'utils/types';

import type { SelectOption } from 'components/Select';

export type ListSelection = Set<Key>;
export type ListSelected = 'all' | Iterable<Key>;

export type ListItemType = SelectOption;

export type ListRowSize = ComponentSizes;

export type SelectHandlerType = (option: ListItemType) => void;
