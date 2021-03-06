/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import TableCell from '../../../TableCell';
import { isComponentFunctionType } from '../../../../../../utils/helpers';
import { ContentComponent, TableType } from '../../../../Table';
import { nestedHeaderStyle } from './ContentCell.style';

type Props = {
  columnsHasNumberArr: boolean[];
  columns: string[];
  padded: boolean;
  columnsWithWidth: number[];
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
  columnsHasNumberArr,
  columns,
  padded,
  columnsWithWidth,
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
  const isNumeral = columnsHasNumberArr[cellCounter];

  return (
    <TableCell
      textAlign={align ? align : isNumeral ? 'right' : 'left'}
      colSpan={colSpan}
      type={cellType}
      padded={padded}
      width={columnsWithWidth[cellCounter] ? `${columnsWithWidth[cellCounter]}%` : 'initial'}
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
      {isComponentFunctionType(content) ? (
        content({ content, colSpan })
      ) : (
        <span data-column={columns[cellCounter]}>{content}</span>
      )}
    </TableCell>
  );
};

export default React.memo(ContentCell);
