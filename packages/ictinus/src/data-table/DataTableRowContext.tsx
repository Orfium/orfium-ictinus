import type { CellContext, Column, Table } from '@tanstack/table-core';
import { createContext, createElement, useContext, type RefObject } from 'react';
import { Skeleton } from '../skeleton';

export type DataTableRowContextValue = {
  actions: Array<RefObject<HTMLDivElement>>;
  focusManaged: boolean | undefined;
  highlightedIndex: number;
  labelId: string | undefined;
  onActionMount:
    | ((params: { primary: boolean | undefined; ref: RefObject<HTMLDivElement> }) => () => void)
    | undefined;
  row: ReturnType<typeof fakeRow> | undefined;
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

const fakeCellsFactory = (columns: Column<unknown, unknown>[], rowIndex: number) => () =>
  columns.map((column, columnIndex) => ({
    column: {
      ...column,
      columnDef: {
        ...column.columnDef,
        cell: () =>
          createElement(Skeleton, {
            w: (['1/2', 'full', '3/4'] as const)[(rowIndex + columnIndex) % 3],
          }),
      },
    } as Column<unknown, unknown>,
    getContext: () => ({}) as CellContext<unknown, unknown>,
    id: column.id,
  }));

export const fakeRow = (table: Table<unknown>, rowIndex: number) => ({
  getCanMultiSelect: () => false,
  getCanSelect: () => false,
  getCenterVisibleCells: fakeCellsFactory(table.getCenterVisibleLeafColumns(), rowIndex),
  getIsSelected: () => false,
  getLeftVisibleCells: fakeCellsFactory(table.getLeftVisibleLeafColumns(), rowIndex),
  getRightVisibleCells: fakeCellsFactory(table.getRightVisibleLeafColumns(), rowIndex),
  getToggleSelectedHandler: () => (__event: unknown) => {},
  id: 'loading' + rowIndex,
  toggleSelected: (__value?: boolean) => {},
});
