/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../../../hooks/useTheme';
import TableCell from '../../../TableCell';
import { isComponentFunctionType } from '../../../../../../utils/helpers';
import { ContentComponent, TableType } from '../../../../Table';

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
}) => {
  const theme = useTheme();

  return (
    <TableCell
      textAlign={align ? align : columnsHasNumberArr[cellCounter] ? 'right' : 'left'}
      colSpan={colSpan}
      type={cellType}
      padded={padded}
      width={columnsWithWidth[cellCounter] ? `${columnsWithWidth[cellCounter]}%` : 'initial'}
    >
      {rowType === 'nested-header' && (
        <div
          css={{
            color: theme.utils.getColor('lightGray', 700),
            fontSize: theme.typography.fontSizes['14'],
          }}
        >
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
