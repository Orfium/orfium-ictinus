import type { Row } from '@tanstack/table-core';
import { createContext, useContext, type RefObject } from 'react';

export type DataTableRowContextValue<TData = unknown> = {
  actions: Array<RefObject<HTMLDivElement>>;
  focusManaged: boolean | undefined;
  highlightedIndex: number;
  labelId: string | undefined;
  onActionMount:
    | ((params: { primary: boolean | undefined; ref: RefObject<HTMLDivElement> }) => () => void)
    | undefined;
  row: Row<TData> | undefined;
  setHighlightedIndex: ((highlightedIndex: number) => void) | undefined;
  setSelector: ((ref: RefObject<HTMLLabelElement> | undefined) => void) | undefined;
};

const DataTableRowContext = createContext<DataTableRowContextValue | null>({
  actions: [],
  focusManaged: undefined,
  highlightedIndex: -1,
  labelId: undefined,
  onActionMount: undefined,
  row: undefined,
  setHighlightedIndex: undefined,
  setSelector: undefined,
});

export const DataTableRowProvider = DataTableRowContext.Provider;

export function useDataTableRowContext() {
  const context = useContext(DataTableRowContext);

  if (!context) {
    throw new Error('Must be used within DataTableRow');
  }

  return context;
}
