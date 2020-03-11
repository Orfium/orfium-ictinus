/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useCallback } from 'react';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import { tableStyle } from './Table.style';
import head from 'lodash/head';
import useTheme from 'hooks/useTheme';
import rem from 'polished/lib/helpers/rem';
import { isComponentFunctionType } from 'utils/helpers';

type ContentComponent<T> = (data: Cell<T>) => React.Component | JSX.Element;
type Cell<T> = {
  content: number | string | ContentComponent<T>;
  rowSpan?: number;
  colSpan?: number;
};

type Row<T> = {
  id: string | number;
  cells: Cell<T>[];
  expanded?: (data: Row<T>) => React.Component;
  rowSpan?: number;
  colSpan?: number;
};

type Selection = string | number;

type Props<T> = {
  data: Row<T>[];
  columns: string[];
  fixedHeader?: boolean;
  type?: 'normal' | 'nested-header';
  onCheck?: (data: Selection[]) => void;
};

function Table<T extends object>({
  data,
  columns,
  type = 'normal',
  fixedHeader = false,
  onCheck,
}: Props<T>) {
  const theme = useTheme();
  const [selectingIds, setSelectingIds] = useState<Selection[]>([]);
  const columnCount = onCheck ? columns.length + 1 : columns.length;

  const onSelectionChange = (data: (state: Selection[]) => Selection[]) => {
    setSelectingIds(data);

    if (onCheck) {
      onCheck(selectingIds);
    }

    return data;
  };

  const columnsHasNumberArr = head(
    data.map(({ cells }) =>
      cells.map(({ content }) => {
        return Boolean(Number.isInteger(Number(content)) || parseFloat(`${content}`));
      })
    )
  );

  const renderRowWithCells = useCallback(
    (
      row: Row<T>,
      type: 'normal' | 'nested-header',
      onSelectionChangeExist: boolean,
      setSelectingIds: (data: (state: Selection[]) => Selection[]) => void,
      selectingIds: Selection[]
    ) => {
      let cellCounter = 0;
      let prevCellColSpan = 0;

      return (
        <TableRow>
          {onSelectionChangeExist && (
            <TableCell component={'th'} sticky={fixedHeader} width={30}>
              <input
                type="checkbox"
                checked={selectingIds.indexOf(row.id) > -1}
                onClick={() =>
                  setSelectingIds(state =>
                    selectingIds.indexOf(row.id) === -1
                      ? [...state, row.id]
                      : state.filter(item => item !== row.id)
                  )
                }
              />
            </TableCell>
          )}
          {row.cells.map(({ content, rowSpan, colSpan }, index) => {
            cellCounter = prevCellColSpan ? prevCellColSpan - 1 + index : index;
            prevCellColSpan = colSpan || prevCellColSpan ? prevCellColSpan + (colSpan || 0) : 0;

            return (
              <TableCell
                // eslint-disable-next-line react/no-array-index-key
                key={`${row.id}-${index}`}
                textAlign={
                  columnsHasNumberArr && columnsHasNumberArr[cellCounter] ? 'right' : 'left'
                }
                rowSpan={rowSpan}
                colSpan={colSpan}
              >
                {type === 'nested-header' && (
                  <div
                    css={{
                      color: theme.palette.gray100,
                      fontSize: theme.typography.fontSizes['14'],
                    }}
                  >
                    {columns[cellCounter]}
                  </div>
                )}
                {isComponentFunctionType(content) ? content({ content, colSpan }) : content}
              </TableCell>
            );
          })}
        </TableRow>
      );
    },
    []
  );

  return (
    <table css={tableStyle()(theme)}>
      {type === 'normal' && (
        <thead>
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
              <TableCell component={'th'} sticky={fixedHeader} width={30}>
                <input
                  type="checkbox"
                  checked={selectingIds.length > 0}
                  onClick={() => {
                    if (selectingIds.length === data.length) {
                      return setSelectingIds([]);
                    }

                    return setSelectingIds(data.map(({ id }) => id));
                  }}
                />
              </TableCell>
            )}
            {columns.map((item, index) => (
              <TableCell
                textAlign={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
                component={'th'}
                key={`${item}`}
                sticky={fixedHeader}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </thead>
      )}
      <tbody>
        {data.map((row, index) => {
          const { expanded } = row;
          const ExpandedComponent = expanded ? expanded(row) : null;
          const [toggled, setToggled] = useState(false);

          return (
            <React.Fragment key={row.id}>
              {!expanded ? (
                renderRowWithCells(row, type, Boolean(onCheck), onSelectionChange, selectingIds)
              ) : (
                <TableRow nested>
                  <TableCell colSpan={columnCount}>
                    <div css={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
                      <table css={tableStyle()(theme)}>
                        <tbody>
                          {renderRowWithCells(
                            row,
                            type,
                            Boolean(onCheck),
                            onSelectionChange,
                            selectingIds
                          )}

                          {toggled && (
                            <TableRow nested>
                              <TableCell colSpan={columnCount}>{ExpandedComponent}</TableCell>
                            </TableRow>
                          )}
                        </tbody>
                      </table>
                      <div
                        css={{
                          padding: theme.spacing.sm,
                          marginLeft: theme.spacing.lg,
                          width: 25,
                          overflow: 'hidden',
                        }}
                        onClick={() => setToggled(toggle => !toggle)}
                      >
                        toggle
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
