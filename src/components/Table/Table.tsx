/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import head from 'lodash/head';
import pluralize from 'pluralize';
import React, { useEffect, useState } from 'react';

import CheckBox from 'components/CheckBox';
import TableCell from './components/TableCell';
import TableRow from './components/TableRow';
import { tableRowHeadersStyle, tableStyle } from './Table.style';
import TableRowWrapper from './components/TableRowWrapper';
import ExtendedColumnItem from './components/ExtendedColumnItem';
import { ExtendedColumn, Sort, SortingOrder } from './types';
import { isItemString } from './utils';

export type ContentComponent<T> = (data: Cell<T>) => React.Component | JSX.Element;
export type Cell<T> = {
  content: number | string | ContentComponent<T>;
  colSpan?: number;
  type?: 'financial' | 'normal';
  align?: 'left' | 'right';
  widthPercentage?: number;
};

export type Row<T> = {
  id: string | number;
  cells: Cell<T>[];
  expanded?: ({
    row,
    selected,
    expanded,
  }: {
    row: Row<T>;
    selected: boolean;
    expanded: boolean;
  }) => React.Component | JSX.Element;
  rowSpan?: number;
};

export type Selection = string | number;

export type TableType = 'normal' | 'nested-header';

type Props<T> = {
  /** The data for the table that needs to display. */
  data: Row<T>[];
  /** An array of titles or objects to define columns. */
  columns: (string | ExtendedColumn)[];
  /** Boolean defining if the header is fixed or not. */
  fixedHeader?: boolean;
  /** Type of the table which determine the headers display. */
  type?: TableType;
  /** Boolean defining the padding all over the table cells and rows. */
  padded?: boolean;
  /** Function that once provided on each check will return the selection. */
  onCheck?: (data: Selection[]) => void;
  /** Function that once provided will provide the currently selected sorting configuration */
  onSort?: (column: string, order: SortingOrder) => void;
  /** Initial sorting column and order. Should be provided along with onSort */
  initialSort?: Sort;
  /** Top left text on the table - showing a counter, text etc. */
  topLeftText?: string | JSX.Element;
  /** Top right area to define a custom component for buttons or other usage. */
  topRightArea?: (data: Row<T>[], selectionData?: Selection[]) => React.Component | JSX.Element;
  /** Data test id prefix for all th/td elements */
  dataTestIdPrefix?: string;
};

function Table<T>({
  data,
  columns,
  type = 'normal',
  fixedHeader = false,
  onCheck,
  padded = false,
  onSort,
  initialSort = { column: '', order: 'desc' },
  topLeftText,
  topRightArea,
  dataTestIdPrefix,
}: Props<T>) {
  const [selectedIds, setSelectedIds] = useState<Selection[] | undefined>(undefined);

  const [sorting, setSorting] = useState<Sort>(initialSort);

  const columnCount = onCheck ? columns.length + 1 : columns.length;

  useEffect(() => {
    if (onSort) {
      onSort(sorting.column, sorting.order);
    }
  }, [onSort, sorting]);

  /** when the selection of ids change then inform the user if onCheck callback provided **/
  React.useEffect(() => {
    if (onCheck && selectedIds) {
      onCheck(selectedIds as Selection[]);
    }
  }, [onCheck, selectedIds]);

  React.useEffect(() => {
    // when data are fresh initialize the selectedIds state
    setSelectedIds(undefined);
  }, [data]);

  const onSelectionAdd = React.useCallback((rowId: Selection) => {
    setSelectedIds((selectedIds: Selection[] = []) =>
      selectedIds.indexOf(rowId) === -1
        ? [...selectedIds, rowId]
        : selectedIds.filter(item => item !== rowId)
    );
  }, []);

  const columnsHasNumberArr = React.useMemo(
    () =>
      head(data)?.cells.map(({ content }) => {
        return Boolean(Number.isInteger(Number(content)) || parseFloat(`${content}`));
      }) || [],
    [data]
  );

  const columnsWithWidth = React.useMemo(
    () =>
      head(data)?.cells.map(({ widthPercentage }) => {
        return widthPercentage;
      }) || [],
    [data]
  );

  const handleSorting = (column: string) => {
    setSorting(prevState => {
      return prevState.column !== column
        ? {
            column,
            order: 'asc',
          }
        : {
            column,
            order: prevState.order === 'asc' ? 'desc' : 'asc',
          };
    });
  };

  return (
    <React.Fragment>
      {(onCheck || topRightArea || topLeftText) && (
        <table css={tableStyle()}>
          <thead>
            <TableRow>
              {onCheck && (
                <TableCell
                  component={'th'}
                  sticky={fixedHeader}
                  width={50}
                  padded={padded}
                  dataTestIdPrefix={dataTestIdPrefix}
                  rowIndex={0}
                  index={0}
                >
                  <CheckBox
                    checked={Boolean(selectedIds && selectedIds.length > 0)}
                    intermediate={
                      selectedIds && selectedIds.length > 0 && selectedIds?.length !== data.length
                    }
                    onClick={() => {
                      if (selectedIds?.length === data.length) {
                        setSelectedIds([]);
                      } else {
                        setSelectedIds(data.map(({ id }) => id));
                      }
                    }}
                  />
                </TableCell>
              )}
              <TableCell padded={padded} dataTestIdPrefix={dataTestIdPrefix} rowIndex={0} index={1}>
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
                  textAlign={'right'}
                  padded={padded}
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
              <TableRow css={tableRowHeadersStyle()}>
                {onCheck && (
                  <TableCell
                    component={'th'}
                    sticky={fixedHeader}
                    width={50}
                    padded={padded}
                    dataTestIdPrefix={dataTestIdPrefix}
                  />
                )}
                {/* TODO: Remove this when the open TS issue, regarding arrays with multiple types, is fixed */}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                {columns.map((item: string | ExtendedColumn, index: number) => {
                  return (
                    <TableCell
                      textAlign={
                        columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'
                      }
                      component={'th'}
                      key={`${isItemString(item) ? item : item.content}`}
                      sticky={fixedHeader}
                      padded={padded}
                      width={columnsWithWidth[index] ? `${columnsWithWidth[index]}%` : 'initial'}
                      isSortable={!isItemString(item) && item.isSortable}
                      onClick={() => {
                        if (!isItemString(item) && item.isSortable) {
                          handleSorting(item.content);
                        }
                      }}
                      dataTestIdPrefix={`${dataTestIdPrefix}_${
                        !isItemString(item) ? item?.content.toLowerCase() : item.toLowerCase()
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
              </TableRow>
            )}
          </thead>
        )}
        <tbody>
          {data.map((row, index) => (
            // @ts-ignore
            <TableRowWrapper<T>
              key={row.id}
              {...{
                row,
                isRowSelected: selectedIds ? selectedIds.indexOf(row.id) !== -1 : false,
                onSelectionAdd,
                padded,
                columns,
                fixedHeader,
                type,
                columnCount,
                columnsHasNumberArr,
                columnsWithWidth,
                onSelectionChangeExist: Boolean(onCheck),
                expanded: !!row.expanded,
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

export default Table;
