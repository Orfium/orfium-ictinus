import { createContext, useContext } from 'react';
import type { Key } from 'react-aria-components';

export type FilterItemData = {
  id: Key;
  name: string;
};

export const FilterItemsContext = createContext<ReadonlyMap<Key, FilterItemData>>(new Map());

/** Selected keys living above Select so CollectionBuilder can filter items while building the collection. */
export const FilterSelectedKeysContext = createContext<readonly Key[]>([]);

export function useFilterSelectedItems<T extends FilterItemData = FilterItemData>(): T[] {
  const selectedKeys = useContext(FilterSelectedKeysContext);
  const itemsById = useContext(FilterItemsContext);

  return selectedKeys.map((key) => itemsById.get(key)).filter((item): item is T => item != null);
}

export function useFilterSelectedKeys(): ReadonlySet<Key> {
  return new Set(useContext(FilterSelectedKeysContext));
}
