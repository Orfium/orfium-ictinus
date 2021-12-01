import React from 'react';

import { Row, Selection, TableType } from '../../Table';
import { TableRowContext } from '../../TableRowContext';
import RenderRowOrNestedRow from '../RenderRowOrNestedRow/RenderRowOrNestedRow';

type TableRowWrapperProps<T> = {
  row: Row<T>;
  isRowSelected: boolean;
  onSelectionAdd: (selection: Selection) => void;
  columnsWithWidth: number[];
  padded: boolean;
  onSelectionChangeExist: boolean;
  columnCount: number;
  columns: string[];
  fixedHeader: boolean;
  type: TableType;
  expanded: boolean;
  actionWidth?: number;
  dataTestIdPrefix?: string;
  rowIndex?: number;
};

const TableRowWrapper = <T extends Record<string, unknown>>(props: TableRowWrapperProps<T>) => {
  const {
    row,
    isRowSelected,
    onSelectionAdd,
    padded,
    columns,
    fixedHeader,
    type,
    columnsWithWidth,
    columnCount,
    onSelectionChangeExist,
    expanded,
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
        onSelectionChangeExist,
        padded,
        columns,
        fixedHeader,
        tChange,
        type,
        columnCount,
        isRowSelected,
        bordered: !expanded,
        actionWidth,
      }}
    >
      <RenderRowOrNestedRow<T> row={row} dataTestIdPrefix={dataTestIdPrefix} rowIndex={rowIndex} />
    </TableRowContext.Provider>
  );
};

export default React.memo(TableRowWrapper) as typeof TableRowWrapper;
