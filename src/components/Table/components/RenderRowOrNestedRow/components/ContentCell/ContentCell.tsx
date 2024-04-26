import React from 'react';
import { isComponentFunctionType } from 'utils/helpers';

import { nestedHeaderStyle } from './ContentCell.style';
import TruncatedContent from '../../../../../TruncatedContent';
import { ContentComponent, TableType } from '../../../../Table';
import TableCell from '../../../TableCell';
import { ExtendedColumn } from 'components/Table/types';

type Props = {
  columns: (string | ExtendedColumn)[];
  padded: boolean;
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
  const col = columns[cellCounter];

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
          {typeof col === 'string' ? col : col.content.label}
        </div>
      )}

      <TruncatedContent
        placement={'bottom'}
        tooltipContent={tooltipContent}
      >
        {isComponentFunctionType(content) ? (
          content({ content, colSpan })
        ) : (
          <span data-column={col}>{content}</span>
        )}
      </TruncatedContent>
    </TableCell>
  );
};

export default React.memo(ContentCell);
