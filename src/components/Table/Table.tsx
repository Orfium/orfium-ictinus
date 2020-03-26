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

export type ContentComponent<T> = (data: Cell<T>) => React.Component | JSX.Element;
export type Cell<T> = {
  content: number | string | ContentComponent<T>;
  colSpan?: number;
  type?: 'financial' | 'normal';
};

export type Row<T> = {
  id: string | number;
  cells: Cell<T>[];
  expanded?: (data: Row<T>) => React.Component;
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
  topLeftText?: string;
  /** Top right area to define a custom component for buttons or other usage. */
  topRightArea?: (data: Row<T>[], selectionData: Selection[]) => React.Component;
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
  const [selectingIds, setSelectingIds] = useState<Selection[]>([]);
  const columnCount = onCheck ? columns.length + 1 : columns.length;

  const onSelectionChange = (selections: Selection[]) => {
    setSelectingIds(selections);

    if (onCheck) {
      onCheck(selections);
    }

    return data;
  };

  const onSelectionAdd = useCallback(
    (rowId: Selection) => {
      const selections =
        selectingIds.indexOf(rowId) === -1
          ? [...selectingIds, rowId]
          : selectingIds.filter(item => item !== rowId);

      return onSelectionChange(selections);
    },
    [selectingIds]
  );

  const columnsHasNumberArr = React.useMemo(
    () =>
      head(
        data.map(({ cells }) =>
          cells.map(({ content }) => {
            return Boolean(Number.isInteger(Number(content)) || parseFloat(`${content}`));
          })
        )
      ),
    []
  );

  return (
    <table css={tableStyle()(theme)}>
      {(onCheck || topRightArea || type === 'normal') && (
        <thead>
          <TableRow>
            {onCheck && (
              <TableCell component={'th'} sticky={fixedHeader} width={30} padded={padded}>
                <input
                  type="checkbox"
                  checked={selectingIds.length > 0}
                  onClick={() => {
                    if (selectingIds.length === data.length) {
                      return onSelectionChange([]);
                    }

                    return onSelectionChange(data.map(({ id }) => id));
                  }}
                />
              </TableCell>
            )}
            <TableCell padded={padded}>
              {selectingIds.length > 0 ? (
                <span>
                  <b>{selectingIds.length}</b> {pluralize('item', selectingIds.length)} selected
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
                {topRightArea(data, selectingIds)}
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
        {data.map(row => {
          const isRowSelected = React.useMemo(() => selectingIds.indexOf(row.id) !== -1, [
            selectingIds,
          ]);
          const tChange = useCallback(() => {
            onSelectionAdd(row.id);
          }, [row.id, selectingIds]);

          return (
            <TableRowContext.Provider
              key={row.id}
              value={{
                row,
                columnsHasNumberArr,
                onSelectionChangeExist: Boolean(onCheck),
                padded,
                columns,
                fixedHeader,
                tChange,
                type,
                columnCount,
                isRowSelected,
              }}
            >
              <RenderRowOrNestedRow {...{ row }} />
            </TableRowContext.Provider>
          );
        })}
      </tbody>
    </table>
  );
}

Table.whyDidYouRender = true;

export default Table;
