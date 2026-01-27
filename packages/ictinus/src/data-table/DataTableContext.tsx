import type { Table } from '@tanstack/table-core';
import { createContext, type ReactNode, useContext } from 'react';

type DataTableContextValue = {
  highlightedIndex: number;
  setHighlightedIndex: (highlightedIndex: number) => void;
  table: Table<unknown>;
};

const DataTableContext = createContext<DataTableContextValue | null>(null);

export function DataTableProvider({
  children,
  ...value
}: DataTableContextValue & { children: ReactNode }) {
  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>;
}

export function useDataTableContext() {
  const context = useContext(DataTableContext);

  if (context === null) {
    throw new Error('useDataTableContext must be used within a DataTableProvider');
  }

  return context;
}
