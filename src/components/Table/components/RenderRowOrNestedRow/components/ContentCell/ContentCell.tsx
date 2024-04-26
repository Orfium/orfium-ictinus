import React, { useState } from 'react';
import { isComponentFunctionType } from 'utils/helpers';

import { nestedHeaderStyle } from './ContentCell.style';
import TruncatedContent from '../../../../../TruncatedContent';
import { ContentComponent, TableType } from '../../../../Table';
import TableCell from '../../../TableCell';
import { ExtendedColumn } from 'components/Table/types';

type Props = {
  columns: (string | ExtendedColumn)[];
  padded: boolean;
  // null value means we explicitly do not want any tooltips to be shown
  tooltipContent: string | undefined | null;
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

const ContentCell: React.FC<Props> = ({
  columns,
  padded,
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
  const [contentElementRef, setContentElementRef] = useState<HTMLSpanElement | null>(null);
  const col = columns[cellCounter];
  const columnName = typeof col === 'string' ? col : col.content.label;

  return (
    <TableCell
      textAlign={align ? align : isNumeral ? 'right' : 'left'}
      colSpan={colSpan}
      type={cellType}
      padded={padded}
      width={columnWidth ? `${columnWidth}%` : 'initial'}
      dataTestIdPrefix={dataTestIdPrefix}
      rowIndex={rowIndex}
      index={index}
    >
      {rowType === 'nested-header' && (
        <div css={nestedHeaderStyle()}>
          {/* nested header render */}
          {columnName}
        </div>
      )}

      <TruncatedContent
        placement={'bottom'}
        tooltipContent={
          tooltipContent === null
            ? undefined
            : tooltipContent ?? contentElementRef?.textContent ?? ''
        }
      >
        <span
          ref={(el) => {
            setContentElementRef(el);
          }}
          data-column={columnName}
        >
          {isComponentFunctionType(content) ? content({ content, colSpan }) : content}
        </span>
      </TruncatedContent>
    </TableCell>
  );
};

export default React.memo(ContentCell);
