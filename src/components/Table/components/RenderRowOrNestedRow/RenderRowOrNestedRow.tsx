/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useContext } from 'react';
import useToggle from 'hooks/useToggle';
import useTheme from 'hooks/useTheme';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import { tableStyle } from '../../Table.style';
import rem from 'polished/lib/helpers/rem';
import Icon from 'components/Icon';
import { isComponentFunctionType } from 'utils/helpers';
import { TableRowContext } from '../../TableRowContext';
import { Row } from '../../Table';

const RenderRowWithCells = React.memo(() => {
  const {
    columnsHasNumberArr,
    onSelectionChangeExist,
    padded,
    columns,
    fixedHeader,
    tChange,
    row,
    type,
    isRowSelected,
    bordered,
  } = useContext(TableRowContext);
  const theme = useTheme();
  let cellCounter = 0;
  let prevCellColSpan = 0;

  return (
    <TableRow
      selected={isRowSelected}
      css={bordered && { borderBottom: `${rem(1)} solid ${theme.palette.gray50}` }}
    >
      {onSelectionChangeExist && (
        <TableCell component={'th'} sticky={fixedHeader} width={30} padded={padded}>
          <input type="checkbox" checked={isRowSelected} onChange={tChange} />
        </TableCell>
      )}
      {row.cells.map(({ content, colSpan, type: cellType }, index) => {
        cellCounter = prevCellColSpan ? prevCellColSpan - 1 + index : index;
        prevCellColSpan = colSpan || prevCellColSpan ? prevCellColSpan + (colSpan || 0) : 0;

        return (
          <TableCell
            // eslint-disable-next-line react/no-array-index-key
            key={`${row.id}-${index}`}
            textAlign={columnsHasNumberArr && columnsHasNumberArr[cellCounter] ? 'right' : 'left'}
            colSpan={colSpan}
            type={cellType}
            padded={padded}
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
});
RenderRowWithCells.displayName = 'RenderRowWithCells';

const RenderRowOrNestedRow = <T extends {}>({ row }: { row: Row<T> }) => {
  const { isRowSelected, columnCount } = useContext(TableRowContext);
  const theme = useTheme();
  const { expanded } = row;
  const ExpandedComponent = expanded ? expanded(row) : null;
  const [checked, toggleChecked] = useToggle(false);

  return (
    <React.Fragment>
      {!expanded ? (
        <RenderRowWithCells {...{}} />
      ) : (
        <TableRow nested selected={isRowSelected}>
          <TableCell colSpan={columnCount} padded={false}>
            <div
              css={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                borderBottom: `${rem(1)} solid ${theme.palette.gray50}`,
              }}
            >
              <table css={tableStyle()(theme)}>
                <tbody>
                  <RenderRowWithCells />

                  {checked && (
                    <TableRow nested>
                      <TableCell colSpan={columnCount}>{ExpandedComponent}</TableCell>
                    </TableRow>
                  )}
                </tbody>
              </table>
              <div>
                <div
                  css={{
                    padding: theme.spacing.sm,
                    marginLeft: theme.spacing.lg,
                    overflow: 'hidden',
                    borderRadius: rem(20),
                    backgroundColor: checked ? theme.palette.gray200 : theme.palette.gray,
                    marginTop: rem(8),
                    transition: '0.2s all ease-in-out',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleChecked()}
                >
                  <div
                    css={{
                      transition: '0.3s all ease-in-out',
                      transform: `rotate(${checked ? '180' : '0'}deg)`,
                    }}
                  >
                    <Icon name={'arrowDown'} size={15} color={checked ? 'light' : 'dark'} />
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

RenderRowOrNestedRow.displayName = 'RenderRowOrNestedRow';

export default RenderRowOrNestedRow;
