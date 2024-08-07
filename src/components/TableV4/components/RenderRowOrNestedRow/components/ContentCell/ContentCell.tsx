import React from 'react';
import { isComponentFunctionType } from 'utils/helpers';

import { nestedHeaderStyle } from './ContentCell.style';
import TruncatedContent from '../../../../../TruncatedContent';
import type { ContentComponent, TableType } from '../../../../TableV4';
import TableCell from '../../../TableCell';

type ContentCellProps = {
  columns: string[];
  isPadded: boolean;
  tooltipContent?: string;
  columnWidth?: number;
  content: number | string | ContentComponent<any>;
  colSpan?: number;
  cellType?: 'financial' | 'normal';
  align?: 'left' | 'right';
  rowType: TableType;
  cellCounter: number;
  dataTestIdPrefix?: string;
  rowIndex?: number;
  index?: number;
};

const ContentCell: React.FCC<ContentCellProps> = ({
  columns,
  isPadded,
  columnWidth,
  tooltipContent,
  content,
  colSpan,
  rowType,
  cellType,
  align,
  cellCounter,
  dataTestIdPrefix,
  rowIndex,
  index,
}) => {
  const isNumeral = !Number.isNaN(Number(content));

  return (
    <TableCell
      textAlign={align ? align : isNumeral ? 'right' : 'left'}
      colSpan={colSpan}
      type={cellType}
      isPadded={isPadded}
      width={columnWidth ? `${columnWidth}%` : 'initial'}
      dataTestIdPrefix={dataTestIdPrefix}
      rowIndex={rowIndex}
      index={index}
    >
      {rowType === 'nested-header' && (
        <div css={nestedHeaderStyle()}>
          {/* nested header render */}
          {columns[cellCounter]}
        </div>
      )}

      <TruncatedContent placement="bottom" tooltipContent={tooltipContent}>
        {isComponentFunctionType(content) ? (
          content({ content, colSpan })
        ) : (
          <span data-column={columns[cellCounter]}>{content}</span>
        )}
      </TruncatedContent>
    </TableCell>
  );
};

export default React.memo(ContentCell);
