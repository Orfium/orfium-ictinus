import { flexRender } from '@tanstack/react-table';
import React, { useMemo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import type { CSSObject } from '@emotion/react';
import type { Row } from '@tanstack/react-table';

import TD from './TD';
import TR from './TR';
import type { RowSize } from '../types';

type OptimizedTableRowProps<TData> = {
  row: Row<TData>;
  index: number;
  rowSize: RowSize;
  isSelectable: boolean;
  isExpandable: boolean;
  sx?: {
    tr?: CSSObject;
    td?: ((originalRow: TData) => CSSObject) | CSSObject;
  };
  dataTestPrefixId: string;
  data: any[];
  allColumnsLength: number;
};

/**
 * OptimizedTableRow - Internal table row component with performance optimizations
 * 
 * This component is specifically designed for internal use within the Table component
 * and provides the following optimizations:
 * - Memoized rendering with deep equality checks to prevent unnecessary re-renders
 * - Optimized cell rendering and event handling
 * - Support for selectable and expandable row functionality
 * - Efficient handling of row state changes (selection, expansion)
 * 
 * @internal - Not exported as it's tightly coupled to the Table component's architecture
 */
const OptimizedTableRow = <TData,>({
  row,
  index,
  rowSize,
  isSelectable,
  isExpandable,
  sx,
  dataTestPrefixId,
  data,
  allColumnsLength,
}: OptimizedTableRowProps<TData>) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rowLength = useMemo(() => row.getVisibleCells().length, [row.getVisibleCells().length]);
  
  const cells = useMemo(() => {
    return rowLength - +isExpandable - +isSelectable;
  }, [rowLength, isExpandable, isSelectable]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isSelected = useMemo(() => row.getIsSelected(), [row.getIsSelected()]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isExpanded = useMemo(() => row.getIsExpanded(), [row.getIsExpanded()]);

  // Memoize row click handler
  const handleRowClick = useCallback(() => {
    if (isExpandable) {
      const isExpanded = row.getIsExpanded();
      row.toggleExpanded(!isExpanded);
    } else if (isSelectable) {
      row.toggleSelected();
    }
  }, [row, isExpandable, isSelectable]);

  // Memoize row props
  const rowProps = useMemo(() => {
    if (!isSelectable && !isExpandable) {
      return { sx: sx?.tr };
    }

    return {
      sx: sx?.tr,
      isSelectable,
      isExpandable,
      isSelected,
      isExpanded,
      onClick: handleRowClick,
    };
  }, [sx?.tr, isSelectable, isExpandable, isSelected, isExpanded, handleRowClick]);

  // Memoize visible cells to prevent unnecessary recalculations
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const visibleCells = useMemo(() => row.getVisibleCells(), [row.getVisibleCells()]);

  // Memoize rendered cells
  const renderedCells = useMemo(() => {
    return visibleCells.map((cell) => (
      <TD
        columnId={cell.column.id}
        rowId={cell.id}
        key={cell.id}
        rowSize={rowSize}
        width={cell.column.getSize() || 100 / cells}
        metaData={cell.column.columnDef.meta}
        sx={typeof sx?.td === 'function' ? sx.td(cell.row.original) : sx?.td}
        dataTestPrefixId={dataTestPrefixId}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </TD>
    ));
  }, [visibleCells, rowSize, cells, sx, dataTestPrefixId]);

  return (
    <>
      <TR {...rowProps}>
        {renderedCells}
      </TR>
      {isExpanded && (
        <TR>
          <TD
            rowId={row.id}
            colSpan={allColumnsLength}
            isDetails
            dataTestPrefixId={dataTestPrefixId}
          >
            {data[index].details}
          </TD>
        </TR>
      )}
    </>
  );
};

export default React.memo(OptimizedTableRow, isEqual) as typeof OptimizedTableRow; 