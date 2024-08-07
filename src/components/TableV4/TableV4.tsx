import useBreakpoints from 'hooks/useBreakpoints';
import { head } from 'lodash-es';
import pluralize from 'pluralize';
import React, { memo, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';

import ExtendedColumnItem from './components/ExtendedColumnItem';
import TableCell from './components/TableCell';
import TableRow from './components/TableRow';
import TableRowWrapper from './components/TableRowWrapper';
import { tableCTAStyle, tableRowHeadersStyle, tableStyle } from './TableV4.style';
import type { ExtendedColumn, Sort, SortingOrder } from './types';
import { isItemString } from './utils';
import { CheckBox } from '../Controls';

export type ContentComponent<T> = (data: Cell<T>) => React.ReactNode;
export type Cell<T> = {
  /** the content of the cell to be displayed. You can pass also custom component. `ContentComponent: (data: Cell<T>) => React.ReactNode`. The type defines that will be a function that returns cell to use cell data.  */
  content: number | string | ContentComponent<T>;
  /** the truncated tooltip content, you can override it or it will take the content @default content */
  tooltipContent?: string;
  /** show or not the truncated tooltip @default true if the text is truncated */
  hasTruncatedTooltip?: boolean;
  /** the colSpan of the cell to be displayed */
  colSpan?: number;
  /** the type of the cell to be displayed @default normal */
  type?: 'financial' | 'normal';
  /** the alignment of the cell to be displayed */
  align?: 'left' | 'right';
  /** the width of the cell to be displayed */
  widthPercentage?: number;
};

export type Row<T> = {
  /** the id of the row */
  id: string | number;
  /** the cells of the row, see Cell type for each */
  cells: Cell<T>[];
  /** the expanded content of the row, if its expandable */
  expanded?: ({
    row,
    isSelected,
    isExpanded,
  }: {
    row: Row<T>;
    isSelected: boolean;
    isExpanded: boolean;
  }) => React.ReactNode;
  rowSpan?: number;
};

export type Selection = string | number;

export type TableType = 'normal' | 'nested-header';

export type TablePropsV4<T> = {
  /** The data for the table that needs to display. */
  data: Row<T>[];
  /** An array of titles or objects to define columns. */
  columns: (string | ExtendedColumn)[];
  /** Boolean defining if the header is fixed or not. */
  hasFixedHeader?: boolean;
  /** Boolean defining if the CTA's container is fixed or not. */
  hasFixedCTA?: boolean;
  /** Type of the table which determine the headers display. */
  type?: TableType;
  /** Boolean defining the padding all over the table cells and rows. */
  isPadded?: boolean;
  /** Function that once provided on each check will return the selection. */
  onCheck?: (data: Selection[]) => void;
  /** Function that once provided will provide the currently selected sorting configuration */
  onSort?: (column: string, order: SortingOrder) => void;
  /** Initial sorting column and order. Should be provided along with onSort */
  initialSort?: Sort;
  /** If provided sort will only work with this option (asc or desc only). By default supports bidirectional sort*/
  sortDir?: SortingOrder;
  /** Top left text on the table - showing a counter, text etc. */
  topLeftText?: string | React.ReactElement;
  /** Top right area to define a custom component for buttons or other usage. */
  topRightArea?: (data: Row<T>[], selectionData?: Selection[]) => React.ReactNode;
  /** Action cell width for Table with Expandable Rows (in %)*/
  actionWidth?: number;
  /** If true, table's expandable rows will be expanded on initial render. */
  isInitiallyExpanded?: boolean;
  /** Data test id prefix for all th/td elements */
  dataTestIdPrefix?: string;
};

const getColumnCount = (
  columns: (string | ExtendedColumn)[],
  onCheck: ((data: Selection[]) => void) | undefined,
  hasExpandableRows: boolean
) => {
  if (!onCheck && !hasExpandableRows) {
    return columns.length;
  }
  if (Boolean(onCheck) && hasExpandableRows) {
    return columns.length + 2;
  }

  return columns.length + 1;
};

function TableV4<T>({
  data,
  columns,
  type = 'normal',
  hasFixedHeader = false,
  hasFixedCTA = false,
  onCheck,
  isPadded = false,
  onSort,
  initialSort = { column: '', order: 'desc' },
  sortDir,
  topLeftText,
  topRightArea,
  actionWidth,
  isInitiallyExpanded = false,
  dataTestIdPrefix,
}: TablePropsV4<T>) {
  const breakpoints = useBreakpoints();
  const actionCellWidth = actionWidth ? `${actionWidth}%` : breakpoints.des1920 ? '5%' : '7%';

  const [selectedIds, setSelectedIds] = useState<Selection[] | undefined>(undefined);

  const [sorting, setSorting] = useState<Sort>(initialSort);

  const hasExpandableRows = data.some((row) => Boolean(row.expanded));

  const columnCount = getColumnCount(columns, onCheck, hasExpandableRows);

  /** when the selection of ids change then inform the user if onCheck callback provided **/
  useEffect(() => {
    if (onCheck && selectedIds) {
      onCheck(selectedIds);
    }
  }, [onCheck, selectedIds]);

  useEffect(() => {
    // when data are fresh initialize the selectedIds state
    setSelectedIds(undefined);
  }, [data]);

  const onSelectionAdd = React.useCallback((rowId: Selection) => {
    setSelectedIds((selectedIds: Selection[] = []) =>
      selectedIds.indexOf(rowId) === -1
        ? [...selectedIds, rowId]
        : selectedIds.filter((item) => item !== rowId)
    );
  }, []);

  const columnsHasNumberArr = React.useMemo(
    () =>
      head(data)?.cells?.map(({ content }) => {
        return !Number.isNaN(Number(content));
      }) || [],
    [data]
  );

  const columnsHasCustomAlignment = React.useMemo(
    () =>
      head(data)?.cells?.map(({ align }) => {
        return align;
      }) || [],
    [data]
  );

  const columnsWithWidth = React.useMemo(
    () =>
      head(data)?.cells?.map(({ widthPercentage }) => {
        return widthPercentage;
      }) || [],
    [data]
  );

  const handleSorting = (column: string) => {
    setSorting((prevState) => {
      if (sortDir) {
        onSort?.(column, sortDir);

        return {
          column,
          order: sortDir,
        };
      }

      if (prevState.column !== column) {
        onSort?.(column, 'asc');

        return {
          column,
          order: 'asc',
        };
      }

      onSort?.(column, prevState.order === 'asc' ? 'desc' : 'asc');

      return {
        column,
        order: prevState.order === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  return (
    <React.Fragment>
      {(onCheck || topRightArea || topLeftText) && (
        <table css={tableCTAStyle(hasFixedCTA)}>
          <thead>
            <TableRow>
              {onCheck && (
                <TableCell
                  component="th"
                  width={50}
                  isPadded={isPadded}
                  dataTestIdPrefix={dataTestIdPrefix}
                  rowIndex={0}
                  index={0}
                >
                  <CheckBox
                    isSelected={Boolean(selectedIds && selectedIds.length > 0)}
                    isIndeterminate={
                      selectedIds && selectedIds.length > 0 && selectedIds?.length !== data.length
                    }
                    onChange={() => {
                      if (selectedIds?.length === data.length) {
                        setSelectedIds([]);
                      } else {
                        setSelectedIds(data.map(({ id }) => id));
                      }
                    }}
                  />
                </TableCell>
              )}
              <TableCell
                isPadded={isPadded}
                dataTestIdPrefix={dataTestIdPrefix}
                rowIndex={0}
                index={1}
              >
                {selectedIds && selectedIds?.length > 0 ? (
                  <span>
                    <b>{selectedIds.length}</b> {pluralize('item', selectedIds.length)} selected
                  </span>
                ) : (
                  topLeftText
                )}
              </TableCell>
              {topRightArea && (
                <TableCell
                  textAlign="right"
                  isPadded={isPadded}
                  colSpan={columnCount - (onCheck ? 2 : 1)}
                  dataTestIdPrefix={dataTestIdPrefix}
                  rowIndex={0}
                  index={2}
                >
                  {topRightArea(data, selectedIds)}
                </TableCell>
              )}
            </TableRow>
          </thead>
        </table>
      )}

      <table css={tableStyle()}>
        {(onCheck || topRightArea || type === 'normal') && (
          <thead>
            {type === 'normal' && (
              <TableRow
                css={tableRowHeadersStyle(hasExpandableRows, Boolean(onCheck), hasFixedHeader)}
              >
                {onCheck && (
                  <TableCell
                    component="th"
                    isPaddedSticky={hasFixedCTA}
                    isSticky={hasFixedHeader}
                    width={50}
                    isPadded={isPadded}
                    dataTestIdPrefix={dataTestIdPrefix}
                  />
                )}
                {columns.map((item: string | ExtendedColumn, index: number) => {
                  return (
                    <TableCell
                      textAlign={
                        columnsHasCustomAlignment && columnsHasCustomAlignment[index]
                          ? columnsHasCustomAlignment[index]
                          : columnsHasNumberArr && columnsHasNumberArr[index]
                          ? 'right'
                          : 'left'
                      }
                      component="th"
                      key={`${isItemString(item) ? item : item.content.sortingKey}`}
                      isSticky={hasFixedHeader}
                      isPaddedSticky={hasFixedCTA}
                      isPadded={isPadded}
                      width={columnsWithWidth[index] ? `${columnsWithWidth[index]}%` : 'initial'}
                      isSortable={!isItemString(item) && item.isSortable}
                      isActive={!isItemString(item) && item.content.sortingKey === sorting.column}
                      onClick={() => {
                        if (!isItemString(item) && item.isSortable) {
                          handleSorting(item.content.sortingKey);
                        }
                      }}
                      dataTestIdPrefix={`${dataTestIdPrefix}_${
                        !isItemString(item)
                          ? item.content.sortingKey.trim().toLowerCase().replace(/ /g, '_')
                          : item.trim().toLowerCase().replace(/ /g, '_')
                      }`}
                    >
                      {isItemString(item) ? (
                        <ExtendedColumnItem item={item} />
                      ) : (
                        <ExtendedColumnItem
                          sorting={sorting}
                          isNumerical={columnsHasNumberArr && columnsHasNumberArr[index]}
                          item={item}
                        />
                      )}
                    </TableCell>
                  );
                })}
                {hasExpandableRows && (
                  <TableCell
                    component="th"
                    isSticky={hasFixedHeader}
                    isPaddedSticky={hasFixedCTA}
                    width={actionCellWidth}
                    dataTestIdPrefix={dataTestIdPrefix}
                  />
                )}
              </TableRow>
            )}
          </thead>
        )}
        <tbody>
          {data.map((row, index) => (
            /* @ts-ignore */
            <TableRowWrapper<T>
              key={row.id}
              {...{
                row,
                isRowSelected: selectedIds ? selectedIds.indexOf(row.id) !== -1 : false,
                onSelectionAdd,
                isPadded,
                columns,
                hasFixedHeader: hasFixedHeader,
                type,
                columnCount,
                columnsWithWidth,
                hasOnSelectionChange: Boolean(onCheck),
                isExpanded: Boolean(row.expanded),
                actionWidth: actionWidth,
                isInitiallyExpanded,
              }}
              dataTestIdPrefix={dataTestIdPrefix}
              rowIndex={index + 1}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default memo(TableV4, isEqual);
