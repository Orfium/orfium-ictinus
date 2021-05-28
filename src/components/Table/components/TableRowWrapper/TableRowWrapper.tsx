/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { TableRowContext } from '../../TableRowContext';
import RenderRowOrNestedRow from '../RenderRowOrNestedRow/RenderRowOrNestedRow';
import { Row, Selection, TableType } from '../../Table';

type TableRowWrapperProps<T> = {
  row: Row<T>;
  isRowSelected: boolean;
  onSelectionAdd: (selection: Selection) => void;
  columnsHasNumberArr: boolean[];
  columnsWithWidth: number[];
  padded: boolean;
  onSelectionChangeExist: boolean;
  columnCount: number;
  columns: string[];
  fixedHeader: boolean;
  type: TableType;
  expanded: boolean;
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
    columnsHasNumberArr,
    columnsWithWidth,
    columnCount,
    onSelectionChangeExist,
    expanded,
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
        columnsHasNumberArr,
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
      }}
    >
      <RenderRowOrNestedRow<T> row={row} dataTestIdPrefix={dataTestIdPrefix} rowIndex={rowIndex} />
    </TableRowContext.Provider>
  );
};

export default React.memo(TableRowWrapper) as typeof TableRowWrapper;
