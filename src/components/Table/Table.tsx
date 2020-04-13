/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useState } from 'react';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import { tableStyle } from './Table.style';
import head from 'lodash/head';
import useTheme from 'hooks/useTheme';
import rem from 'polished/lib/helpers/rem';
import pluralize from 'pluralize';
import RenderRowOrNestedRow from './components/RenderRowOrNestedRow';
import { TableRowContext } from './TableRowContext';
import CheckBox from '../CheckBox';

export type ContentComponent<T> = (data: Cell<T>) => React.Component | JSX.Element;
export type Cell<T> = {
  content: number | string | ContentComponent<T>;
  colSpan?: number;
  type?: 'financial' | 'normal';
};

export type Row<T> = {
  id: string | number;
  cells: Cell<T>[];
  expanded?: (data: Row<T>) => React.Component | JSX.Element;
  rowSpan?: number;
};

export type Selection = string | number;

export type TableType = 'normal' | 'nested-header';

type Props<T> = {
  /** The data for the table that needs to display. */
  data: Row<T>[];
  /** An array of titles to define columns. */
  columns: string[];
  /** Boolean defining if the header is fixed or not. */
  fixedHeader?: boolean;
  /** Type of the table which determine the headers display. */
  type?: TableType;
  /** Boolean defining the padding all over the table cells and rows. */
  padded?: boolean;
  /** Function that once provided on each check will return the selection. */
  onCheck?: (data: Selection[]) => void;
  /** Top left text on the table - showing a counter, text etc. */
  topLeftText?: string | JSX.Element;
  /** Top right area to define a custom component for buttons or other usage. */
  topRightArea?: (data: Row<T>[], selectionData: Selection[]) => React.Component | JSX.Element;
};

function Table<T>({
  data,
  columns,
  type = 'normal',
  fixedHeader = false,
  onCheck,
  padded = false,
  topLeftText = '',
  topRightArea,
}: Props<T>) {
  const theme = useTheme();
  const [selectedIds, setSelectedIds] = useState<Selection[]>([]);
  const columnCount = onCheck ? columns.length + 1 : columns.length;

  const onSelectionChange = (selections: Selection[]) => {
    setSelectedIds(selections);

    if (onCheck) {
      onCheck(selections);
    }
  };

  const onSelectionAdd = useCallback(
    (rowId: Selection) => {
      const selections =
        selectedIds.indexOf(rowId) === -1
          ? [...selectedIds, rowId]
          : selectedIds.filter(item => item !== rowId);

      onSelectionChange(selections);
    },
    [selectedIds]
  );

  const columnsHasNumberArr = React.useMemo(
    () =>
      head(
        data.map(({ cells }) =>
          cells.map(({ content }) => {
            return Boolean(Number.isInteger(Number(content)) || parseFloat(`${content}`));
          })
        )
      ) || [],
    []
  );

  return (
    <table css={tableStyle()(theme)}>
      {(onCheck || topRightArea || type === 'normal') && (
        <thead>
          <TableRow>
            {onCheck && (
              <TableCell component={'th'} sticky={fixedHeader} width={30} padded={padded}>
                <CheckBox
                  checked={selectedIds.length === data.length}
                  intermediate={selectedIds.length > 0 && selectedIds.length !== data.length}
                  onClick={() => {
                    if (selectedIds.length === data.length) {
                      onSelectionChange([]);
                    } else {
                      onSelectionChange(data.map(({ id }) => id));
                    }
                  }}
                />
              </TableCell>
            )}
            <TableCell padded={padded}>
              {selectedIds.length > 0 ? (
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
              >
                {topRightArea(data, selectedIds)}
              </TableCell>
            )}
          </TableRow>
          {type === 'normal' && (
            <TableRow
              css={[
                {
                  paddingTop: theme.spacing.md,
                  paddingBottom: theme.spacing.md,
                  borderBottomWidth: rem(1),
                  borderBottomStyle: 'solid',
                  borderBottomColor: theme.palette.gray100,
                },
              ]}
            >
              {onCheck && (
                <TableCell component={'th'} sticky={fixedHeader} width={30} padded={padded} />
              )}
              {columns.map((item, index) => (
                <TableCell
                  textAlign={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
                  component={'th'}
                  key={`${item}`}
                  sticky={fixedHeader}
                  padded={padded}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          )}
        </thead>
      )}
      <tbody>
        {data.map(row => (
          <TableRowWrapper<T>
            key={row.id}
            {...{
              row,
              selectedIds,
              onSelectionAdd,
              padded,
              columns,
              fixedHeader,
              type,
              columnCount,
              columnsHasNumberArr,
              onSelectionChangeExist: Boolean(onCheck),
              expanded: !!row.expanded,
            }}
          />
        ))}
      </tbody>
    </table>
  );
}

type TableRowWrapperProps<T> = {
  row: Row<T>;
  selectedIds: Selection[];
  onSelectionAdd: (selection: Selection) => void;
  columnsHasNumberArr: boolean[];
  padded: boolean;
  onSelectionChangeExist: boolean;
  columnCount: number;
  columns: string[];
  fixedHeader: boolean;
  type: TableType;
  expanded: boolean;
};

const TableRowWrapper = <T extends {}>({
  row,
  selectedIds,
  onSelectionAdd,
  padded,
  columns,
  fixedHeader,
  type,
  columnsHasNumberArr,
  columnCount,
  onSelectionChangeExist,
  expanded,
}: TableRowWrapperProps<T>) => {
  const isRowSelected = React.useMemo(() => selectedIds.indexOf(row.id) !== -1, [selectedIds]);
  const tChange = useCallback(() => {
    onSelectionAdd(row.id);
  }, [row.id, selectedIds]);

  return (
    <TableRowContext.Provider
      value={{
        row,
        columnsHasNumberArr,
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
      <RenderRowOrNestedRow<T> {...{ row }} />
    </TableRowContext.Provider>
  );
};

export default Table;
