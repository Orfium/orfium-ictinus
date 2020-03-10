/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useCallback } from 'react';
// import { rem } from 'polished';
// import { flexCenter } from 'theme/functions';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import { tableStyle } from './Table.style';
import head from 'lodash/head';
import useTheme from 'hooks/useTheme';
import rem from 'polished/lib/helpers/rem';

type Cell<T> = {
  component?: (data: Cell<T>) => React.Component;
  content?: string | number;
  rowSpan?: number;
  colSpan?: number;
};

type Row<T> = {
  cells: Cell<T>[];
  expanded?: (data: Row<T>) => React.Component;
  rowSpan?: number;
  colSpan?: number;
};

type Props<T> = {
  data: Row<T>[];
  columns: string[];
  fixedHeader?: boolean;
  type?: 'normal' | 'nested-header';
  sorting?: boolean;
  selecting?: boolean;
};

function Table<T extends object>({
  data,
  columns,
  type = 'normal',
  fixedHeader = false,
}: Props<T>) {
  const theme = useTheme();

  const columnsHasNumberArr = head(
    data.map(({ cells }) =>
      cells.map(({ content }) => {
        return Boolean(Number.isInteger(Number(content)) || parseFloat(`${content}`));
      })
    )
  );

  const renderRowWithCells = useCallback((cells: Cell<T>[], type: 'normal' | 'nested-header') => {
    let cellCounter = 0;
    let prevCellColSpan = 0;

    return (
      <TableRow>
        {cells.map((cell, index) => {
          const { component, content, rowSpan, colSpan } = cell;
          cellCounter = prevCellColSpan ? prevCellColSpan - 1 + index : index;
          prevCellColSpan = colSpan || prevCellColSpan ? prevCellColSpan + (colSpan || 0) : 0;

          return component ? (
            <TableCell key={`${index}`} rowSpan={rowSpan} colSpan={colSpan}>
              {component(cell)}
            </TableCell>
          ) : (
            <TableCell
              key={`${index}`}
              align={columnsHasNumberArr && columnsHasNumberArr[cellCounter] ? 'right' : 'left'}
              rowSpan={rowSpan}
              colSpan={colSpan}
            >
              {type === 'nested-header' && (
                <div
                  css={{ color: theme.palette.gray100, fontSize: theme.typography.fontSizes['14'] }}
                >
                  {columns[cellCounter]}
                </div>
              )}
              {content}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }, []);

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
            {columns.map((item, index) => (
              <TableCell
                align={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
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
          const { cells, expanded } = row;
          const ExpandedComponent = expanded ? expanded(row) : null;
          const [toggled, setToggled] = useState(false);

          return (
            <React.Fragment key={index}>
              {!expanded ? (
                renderRowWithCells(cells, type)
              ) : (
                <TableRow nested>
                  <TableCell colSpan={columns.length}>
                    <div css={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
                      <table css={tableStyle()(theme)}>
                        <tbody>
                          {renderRowWithCells(cells, type)}

                          {toggled && (
                            <TableRow nested>
                              <TableCell colSpan={columns.length}>{ExpandedComponent}</TableCell>
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
                        click here
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
