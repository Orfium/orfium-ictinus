/** @jsx jsx */
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import * as React from 'react';
import useTheme from '../../../../hooks/useTheme';
import useToggle from '../../../../hooks/useToggle';
import { isComponentFunctionType } from '../../../../utils/helpers';
import CheckBox from '../../../CheckBox';
import Icon from '../../../Icon';
import { Row } from '../../Table';
import { tableStyle } from '../../Table.style';
import { TableRowContext } from '../../TableRowContext';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

const RenderRowWithCells = React.memo(({ checked = false, toggleChecked = () => {} }: any) => {
  const {
    columnsHasNumberArr,
    columnsWithWidth,
    onSelectionChangeExist,
    padded,
    columns,
    fixedHeader,
    tChange,
    row,
    type,
    isRowSelected,
    bordered,
  } = React.useContext(TableRowContext);
  const theme = useTheme();
  let cellCounter = 0;
  let prevCellColSpan = 0;
  const { expanded } = row;

  return (
    <TableRow
      selected={isRowSelected}
      css={bordered && { borderBottom: `${rem(1)} solid ${theme.palette.flat.lightGray[400]}` }}
    >
      {onSelectionChangeExist && (
        <TableCell component={'td'} sticky={fixedHeader} width={50} padded={padded}>
          <CheckBox checked={isRowSelected} onClick={tChange} />
        </TableCell>
      )}
      {row.cells.map(({ content, colSpan, type: cellType, align }, index) => {
        cellCounter = prevCellColSpan ? prevCellColSpan - 1 + index : index;
        prevCellColSpan = colSpan || prevCellColSpan ? prevCellColSpan + (colSpan || 0) : 0;

        return (
          <TableCell
            // eslint-disable-next-line react/no-array-index-key
            key={`${row.id}-${index}`}
            textAlign={
              align
                ? align
                : columnsHasNumberArr && columnsHasNumberArr[cellCounter]
                ? 'right'
                : 'left'
            }
            colSpan={colSpan}
            type={cellType}
            padded={padded}
            width={columnsWithWidth[index] ? `${columnsWithWidth[index]}%` : 'initial'}
          >
            {type === 'nested-header' && (
              <div
                css={{
                  color: theme.palette.flat.lightGray[700],
                  fontSize: theme.typography.fontSizes['14'],
                }}
              >
                {columns[cellCounter]}
              </div>
            )}
            {isComponentFunctionType(content) ? (
              content({ content, colSpan })
            ) : (
              <span data-column={columns[cellCounter]}>{content}</span>
            )}
          </TableCell>
        );
      })}

      {expanded && (
        <TableCell width={67}>
          <div>
            <div
              css={{
                padding: theme.spacing.sm,
                overflow: 'hidden',
                borderRadius: rem(20),
                backgroundColor: checked
                  ? theme.palette.flat.darkGray[400]
                  : theme.palette.flat.lightGray[200],
                margin: `${rem(8)} ${theme.spacing.md}`,
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
        </TableCell>
      )}
    </TableRow>
  );
});
RenderRowWithCells.displayName = 'RenderRowWithCells';

const RenderRowOrNestedRow = <T extends { [key: string]: unknown }>({ row }: { row: Row<T> }) => {
  const { isRowSelected, columnCount } = React.useContext(TableRowContext);
  const theme = useTheme();
  const { expanded } = row;
  const [checked, toggleChecked] = useToggle(false);
  const ExpandedComponent = expanded
    ? expanded({ row, selected: isRowSelected, expanded: checked })
    : null;

  return (
    <React.Fragment>
      {!expanded ? (
        <RenderRowWithCells />
      ) : (
        <TableRow nested selected={isRowSelected}>
          <TableCell colSpan={columnCount} padded={false}>
            <div
              css={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                borderBottom: `${rem(1)} solid ${theme.palette.flat.lightGray[400]}`,
              }}
            >
              <table css={tableStyle()()}>
                <tbody>
                  <RenderRowWithCells {...{ checked, toggleChecked }} />
                  {checked && (
                    <TableRow nested>
                      {/* colSpan is +1 because of the tableCell added for the arrow icon */}
                      <TableCell colSpan={columnCount + 1}>{ExpandedComponent}</TableCell>
                    </TableRow>
                  )}
                </tbody>
              </table>
            </div>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

RenderRowOrNestedRow.displayName = 'RenderRowOrNestedRow';

export default RenderRowOrNestedRow;
