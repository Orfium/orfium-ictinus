import * as React from 'react';

import useToggle from '../../../../hooks/useToggle';
import { isComponentFunctionType } from '../../../../utils/helpers';
import CheckBox from '../../../CheckBox';
import { Row } from '../../Table';
import { tableStyle } from '../../Table.style';
import { TableRowContext } from '../../TableRowContext';
import TableCell from '../TableCell';
import TableRow from '../TableRow';
import ContentCell from './components/ContentCell';
import ExpandedButtonCell from './components/ExpandedButtonCell';
import { borderedRowStyle, expandableRowStyle } from './RenderRowOrNestedRow.style';

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
      tChange,
      row,
      type,
      isRowSelected,
      bordered,
      actionWidth,
    } = React.useContext(TableRowContext);
    const { expanded } = row;
    const isExpandedExists = Boolean(expanded);
    const [lastItem] = row.cells?.slice(-1);

    return (
      <TableRow
        selected={isRowSelected}
        onClick={isExpandedExists ? toggleChecked : undefined}
        css={borderedRowStyle({
          bordered,
          isCustomCell: isExpandedExists || isComponentFunctionType(lastItem.content),
        })}
      >
        {onSelectionChangeExist && (
          <TableCell
            component={'th'}
            sticky={false}
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
        {row.cells?.map(
          (
            { content, tooltipContent, hasTruncatedTooltip = true, colSpan, type: cellType, align },
            index
          ) => (
            <ContentCell
              key={`${row.id}-${index}`}
              cellCounter={index}
              columnsHasNumberArr={columnsHasNumberArr}
              columns={columns}
              tooltipContent={
                hasTruncatedTooltip
                  ? isComponentFunctionType(content)
                    ? tooltipContent
                    : tooltipContent ?? content.toString()
                  : undefined
              }
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
          )
        )}

        <ExpandedButtonCell
          isExpandedExists={isExpandedExists}
          checked={checked}
          toggleChecked={toggleChecked}
          actionWidth={actionWidth}
          dataTestIdPrefix={dataTestIdPrefix}
          rowIndex={rowIndex}
          index={row.cells?.length + 1}
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
  const { isRowSelected, columnCount, fixedHeader } = React.useContext(TableRowContext);
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
            <div css={expandableRowStyle({ isFirstRow: rowIndex === 1, fixedHeader })}>
              <table css={tableStyle()()}>
                <tbody>
                  <RenderRowWithCells
                    {...{ checked, toggleChecked }}
                    dataTestIdPrefix={dataTestIdPrefix}
                    rowIndex={rowIndex}
                  />
                  {checked && (
                    <TableRow nested>
                      <TableCell
                        colSpan={columnCount}
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
