import { Key } from 'react';
import { ComponentSizes } from '../../utils/types';
import { SelectOption } from '../Select';
export type ListSelection = Set<Key>;
export type ListSelected = 'all' | Iterable<Key>;
export type ListItemType = SelectOption;
export type ListRowSize = ComponentSizes;
export type SelectHandlerType = (option: ListItemType) => void;
