/** @jsx jsx */
import { jsx } from '@emotion/core';
import head from 'lodash/head';
import pluralize from 'pluralize';
import rem from 'polished/lib/helpers/rem';
import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import CheckBox from '../CheckBox';
import RenderRowOrNestedRow from './components/RenderRowOrNestedRow';
import TableCell from './components/TableCell';
import TableRow from './components/TableRow';
import { tableStyle } from './Table.style';
import { TableRowContext } from './TableRowContext';

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
  const [selectedIds, setSelectedIds] = React.useState<Selection[]>([]);
  const columnCount = onCheck ? columns.length + 1 : columns.length;

  React.useEffect(() => {
    // when changing data reset the selecting ids since it might have changed
    setSelectedIds([]);
  }, [data]);

  const onSelectionChange = (selections: Selection[]) => {
    setSelectedIds(selections);

    if (onCheck) {
      onCheck(selections);
    }
  };

  const onSelectionAdd = React.useCallback(
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
    [data]
  );

  const columnsWithWidth = React.useMemo(
    () =>
      head(
        data.map(({ cells }) =>
          cells.map(({ widthPercentage }) => {
            return widthPercentage;
          })
        )
      ) || [],
    [data]
  );

  return (
    <React.Fragment>
      <table css={tableStyle()}>
        {(onCheck || topRightArea || type === 'normal') && (
          <thead>
            <TableRow>
              {onCheck && (
                <TableCell component={'th'} sticky={fixedHeader} width={50} padded={padded}>
                  <CheckBox
                    checked={Boolean(selectedIds.length > 0)}
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
          </thead>
        )}
      </table>
      <table css={tableStyle()}>
        {(onCheck || topRightArea || type === 'normal') && (
          <thead>
            {type === 'normal' && (
              <TableRow
                css={[
                  {
                    paddingTop: theme.spacing.md,
                    paddingBottom: theme.spacing.md,
                    borderBottomWidth: rem(1),
                    borderBottomStyle: 'solid',
                    borderBottomColor: theme.palette.flat.lightGray[700],
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
                    width={columnsWithWidth[index] ? `${columnsWithWidth[index]}%` : 'initial'}
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
            // @ts-ignore
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
                columnsWithWidth,
                onSelectionChangeExist: Boolean(onCheck),
                expanded: !!row.expanded,
              }}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

type TableRowWrapperProps<T> = {
  row: Row<T>;
  selectedIds: Selection[];
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
};

const TableRowWrapper = <T extends { [key: string]: unknown }>({
  row,
  selectedIds,
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
}: TableRowWrapperProps<T>) => {
  const isRowSelected = React.useMemo(() => selectedIds.indexOf(row.id) !== -1, [
    row.id,
    selectedIds,
  ]);
  const tChange = React.useCallback(() => {
    onSelectionAdd(row.id);
  }, [onSelectionAdd, row.id, selectedIds]);

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
      <RenderRowOrNestedRow<T> {...{ row }} />
    </TableRowContext.Provider>
  );
};

export default Table;
