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
    isChecked = false,
    toggleChecked = () => {},
    dataTestIdPrefix,
    rowIndex,
  }: {
    isChecked?: boolean;
    toggleChecked?: () => void;
    dataTestIdPrefix?: string;
    rowIndex?: number;
  }) => {
    const {
      columnsWithWidth,
      hasOnSelectionChange,
      isPadded,
      columns,
      tChange,
      row,
      type,
      isRowSelected,
      isBordered,
      actionWidth,
    } = React.useContext(TableRowContext);
    const { expanded } = row;
    const isExpandedExists = Boolean(expanded);
    const [lastItem] = row.cells?.slice(-1);

    return (
      <TableRow
        isSelected={isRowSelected}
        onClick={isExpandedExists ? toggleChecked : undefined}
        css={borderedRowStyle({
          isBordered,
          isCustomCell: isExpandedExists || isComponentFunctionType(lastItem.content),
        })}
      >
        {hasOnSelectionChange && (
          <TableCell
            component={'th'}
            isSticky={false}
            width={50}
            isPadded={isPadded}
            dataTestIdPrefix={dataTestIdPrefix}
            rowIndex={rowIndex}
            index={0}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CheckBox
                dataTestIdSuffix={'row-check'}
                isChecked={isRowSelected}
                onClick={tChange}
                isFilled={false}
              />
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
              columnWidth={columnsWithWidth[index]}
              columns={columns}
              tooltipContent={
                hasTruncatedTooltip
                  ? isComponentFunctionType(content)
                    ? tooltipContent
                    : tooltipContent ?? content.toString()
                  : undefined
              }
              isPadded={isPadded}
              colSpan={colSpan}
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
          isChecked={isChecked}
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
  const { isRowSelected, columnCount, hasFixedHeader } = React.useContext(TableRowContext);
  const { expanded } = row;
  const [isChecked, toggleIsChecked] = useToggle(false);
  const ExpandedComponent = expanded
    ? expanded({ row, selected: isRowSelected, expanded: isChecked })
    : null;

  return (
    <React.Fragment>
      {!expanded ? (
        <RenderRowWithCells dataTestIdPrefix={dataTestIdPrefix} rowIndex={rowIndex} />
      ) : (
        <TableRow isNested isSelected={isRowSelected}>
          <TableCell
            colSpan={columnCount}
            isPadded={false}
            dataTestIdPrefix={dataTestIdPrefix}
            rowIndex={rowIndex}
          >
            <div css={expandableRowStyle({ isFirstRow: rowIndex === 1, hasFixedHeader })}>
              <table css={tableStyle()()}>
                <tbody>
                  <RenderRowWithCells
                    {...{ isChecked, toggleChecked: toggleIsChecked }}
                    dataTestIdPrefix={dataTestIdPrefix}
                    rowIndex={rowIndex}
                  />
                  {isChecked && (
                    <TableRow isNested>
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
