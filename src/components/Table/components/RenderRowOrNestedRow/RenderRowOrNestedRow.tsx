/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import * as React from 'react';
import useTheme from '../../../../hooks/useTheme';
import useToggle from '../../../../hooks/useToggle';
import CheckBox from '../../../CheckBox';
import { Row } from '../../Table';
import { tableStyle } from '../../Table.style';
import { TableRowContext } from '../../TableRowContext';
import TableCell from '../TableCell';
import TableRow from '../TableRow';
import ContentCell from './components/ContentCell';
import ExpandedButtonCell from './components/ExpandedButtonCell';

const RenderRowWithCells = React.memo(
  ({
    checked = false,
    toggleChecked = () => {},
    dataTestIdPrefix,
    rowIndex,
  }: {
    checked?: boolean;
    toggleChecked?: () => void;
    dataTestIdPrefix?: string;
    rowIndex?: number;
  }) => {
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
    const { expanded } = row;
    const isExpandedExists = Boolean(expanded);

    return (
      <TableRow
        selected={isRowSelected}
        onClick={isExpandedExists ? toggleChecked : undefined}
        css={
          bordered && { borderBottom: `${rem(1)} solid ${theme.utils.getColor('lightGray', 400)}` }
        }
      >
        {onSelectionChangeExist && (
          <TableCell
            component={'th'}
            sticky={fixedHeader}
            width={50}
            padded={padded}
            dataTestIdPrefix={dataTestIdPrefix}
            rowIndex={rowIndex}
            index={0}
          >
            <div onClick={e => e.stopPropagation()}>
              <CheckBox dataTestIdSuffix={'row-check'} checked={isRowSelected} onClick={tChange} />
            </div>
          </TableCell>
        )}
        {row.cells.map(({ content, colSpan, type: cellType, align }, index) => (
          <ContentCell
            key={`${row.id}-${index}`}
            cellCounter={index}
            columnsHasNumberArr={columnsHasNumberArr}
            columns={columns}
            padded={padded}
            colSpan={colSpan}
            columnsWithWidth={columnsWithWidth}
            content={content}
            cellType={cellType}
            rowType={type}
            align={align}
            dataTestIdPrefix={dataTestIdPrefix}
            rowIndex={rowIndex}
            index={index + 1}
          />
        ))}

        <ExpandedButtonCell
          isExpandedExists={isExpandedExists}
          checked={checked}
          toggleChecked={toggleChecked}
          dataTestIdPrefix={dataTestIdPrefix}
          rowIndex={rowIndex}
          index={row.cells.length + 1}
        />
      </TableRow>
    );
  }
);
RenderRowWithCells.displayName = 'RenderRowWithCells';

const RenderRowOrNestedRow = <T extends { [key: string]: unknown }>({
  row,
  dataTestIdPrefix,
  rowIndex,
}: {
  row: Row<T>;
  dataTestIdPrefix?: string;
  rowIndex?: number;
}) => {
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
        <RenderRowWithCells dataTestIdPrefix={dataTestIdPrefix} rowIndex={rowIndex} />
      ) : (
        <TableRow nested selected={isRowSelected}>
          <TableCell
            colSpan={columnCount}
            padded={false}
            dataTestIdPrefix={dataTestIdPrefix}
            rowIndex={rowIndex}
          >
            <div
              css={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                borderTop:
                  //Adds border to the first row only.
                  rowIndex === 1
                    ? `${rem(1)} solid ${theme.utils.getColor('lightGray', 400)}`
                    : 'none',
                borderBottom: `${rem(1)} solid ${theme.utils.getColor('lightGray', 400)}`,
              }}
            >
              <table css={tableStyle()()}>
                <tbody>
                  <RenderRowWithCells
                    {...{ checked, toggleChecked }}
                    dataTestIdPrefix={dataTestIdPrefix}
                    rowIndex={rowIndex}
                  />
                  {checked && (
                    <TableRow nested>
                      {/* colSpan is +1 because of the tableCell added for the arrow icon */}

                      <TableCell
                        colSpan={columnCount + 1}
                        dataTestIdPrefix={dataTestIdPrefix}
                        rowIndex={rowIndex}
                        index={'expanded'}
                      >
                        {ExpandedComponent}
                      </TableCell>
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

export default React.memo(RenderRowOrNestedRow) as typeof RenderRowOrNestedRow;
