import React from 'react';

import { Row, Selection, TableType } from '../../Table';
import { TableRowContext } from '../../TableRowContext';
import RenderRowOrNestedRow from '../RenderRowOrNestedRow/RenderRowOrNestedRow';

type TableRowWrapperProps<T> = {
  row: Row<T>;
  isRowSelected: boolean;
  onSelectionAdd: (selection: Selection) => void;
  columnsWithWidth: number[];
  isPadded: boolean;
  hasOnSelectionChange: boolean;
  columnCount: number;
  columns: string[];
  hasFixedHeader: boolean;
  type: TableType;
  isExpanded: boolean;
  actionWidth?: number;
  dataTestIdPrefix?: string;
  rowIndex?: number;
};

const TableRowWrapper = <T extends Record<string, unknown>>(props: TableRowWrapperProps<T>) => {
  const {
    row,
    isRowSelected,
    onSelectionAdd,
    isPadded,
    columns,
    hasFixedHeader,
    type,
    columnsWithWidth,
    columnCount,
    hasOnSelectionChange,
    isExpanded,
    actionWidth,
    dataTestIdPrefix,
    rowIndex,
  } = props;

  const tChange = React.useCallback(() => {
    onSelectionAdd(row.id);
  }, [onSelectionAdd, row.id]);

  return (
    <TableRowContext.Provider
      value={{
        row,
        columnsWithWidth,
        hasOnSelectionChange,
        isPadded,
        columns,
        hasFixedHeader,
        tChange,
        type,
        columnCount,
        isRowSelected,
        isBordered: !isExpanded,
        actionWidth,
      }}
    >
      <RenderRowOrNestedRow<T> row={row} dataTestIdPrefix={dataTestIdPrefix} rowIndex={rowIndex} />
    </TableRowContext.Provider>
  );
};

export default React.memo(TableRowWrapper) as typeof TableRowWrapper;
