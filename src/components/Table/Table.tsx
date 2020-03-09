/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useCallback } from 'react';
// import { rem } from 'polished';
// import { flexCenter } from 'theme/functions';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import { tableStyle } from './Table.style';
import head from 'lodash/head';
import useTheme from '../../hooks/useTheme';
import rem from 'polished/lib/helpers/rem';

type Cell<T> = {
  component?: (data: T) => React.Component;
  content?: string;
};

type Row<T> = {
  cells: Cell<T>[];
  expanded?: (data: T) => React.Component;
  toggled: boolean;
};

type Props<T> = {
  customerHeader?: (data: T) => React.Component;
  data: Row<T>[];
  columns: string[];
  sorting?: boolean;
  customerRow?: (data: T) => React.Component;
  fixedHeader?: boolean;
  selecting?: boolean;
};

function Table<T extends object>({ data, columns, fixedHeader = false }: Props<T>) {
  const theme = useTheme();

  const columnsHasNumberArr = head(
    data.map(item =>
      Object.keys(item).map(objectItem => {
        return Boolean(Number.isInteger(item[objectItem]) || parseFloat(item[objectItem]));
      })
    )
  );

  const renderRowWithCells = useCallback((cells: Cell<T>[]) => {
    return (
      <TableRow>
        {cells.map(({ component, content }, index) =>
          component ? (
            component
          ) : (
            <TableCell
              key={`${index}`}
              align={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
            >
              {content}
            </TableCell>
          )
        )}
      </TableRow>
    );
  }, []);

  return (
    <table css={tableStyle()(theme)}>
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
      <tbody>
        {data.map((row, index) => {
          const { cells, expanded } = row;
          // @ts-ignore
          const ExpandedComponent = expanded ? expanded(row) : null;
          // @ts-ignore
          const [toggled, setToggled] = useState(false);

          return (
            <React.Fragment key={index}>
              {!expanded ? (
                renderRowWithCells(cells)
              ) : (
                <TableRow nested onClick={() => setToggled(toggle => !toggle)}>
                  <TableCell colspan={columns.length}>
                    <table css={tableStyle()(theme)}>
                      <tbody>
                        {renderRowWithCells(cells)}

                        {toggled && (
                          <TableRow nested>
                            <TableCell colspan={columns.length}>{ExpandedComponent}</TableCell>
                          </TableRow>
                        )}
                      </tbody>
                    </table>
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
