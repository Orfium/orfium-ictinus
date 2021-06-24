/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import useTheme from 'hooks/useTheme';
import { parentStyles } from './TableCell.style';

type Props = {
  textAlign?: 'left' | 'right';
  component?: 'td' | 'th';
  width?: number | string;
  sticky?: boolean;
  colSpan?: number;
  type?: 'financial' | 'normal';
  padded?: boolean;
  dataTestIdPrefix?: string;
  rowIndex?: number;
  index?: number | string;
  isSortable?: boolean;
  isActive?: boolean;
  onClick?: () => void;
};

const TableCell: React.FC<Props> = React.memo(
  ({
    textAlign = 'left',
    component = 'td',
    width,
    sticky = false,
    colSpan,
    children,
    isSortable = false,
    isActive = false,
    type = 'normal',
    padded = false,
    dataTestIdPrefix,
    rowIndex,
    onClick,
    index,
  }) => {
    const theme = useTheme();
    const Component = component;

    const tableCellTestId = children
      ? component === 'th' && typeof children === 'string'
        ? (dataTestIdPrefix ? dataTestIdPrefix + '_' : '') +
          'table_header_' +
          children
            .split(' ')
            .join('_')
            .toLowerCase()
        : (dataTestIdPrefix ? dataTestIdPrefix + '_' : '') +
          (rowIndex != undefined ? 'table_row_' + rowIndex : '') +
          (index != undefined ? '_cell_' + index : '')
      : undefined;

    return (
      <Component
        colSpan={colSpan}
        css={[
          {
            position: 'relative',
            textAlign,
            padding: `${theme.spacing.xsm} ${padded ? theme.spacing.sm : 0}`,
            width,
          },
          component === 'th' && {
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.sm,
            fontWeight: theme.typography.weights.bold,
            fontSize: theme.typography.fontSizes['14'],
          },
          component === 'th' && isSortable && { ...parentStyles({ isActive })(theme) },
          sticky && {
            top: 0,
            left: 0,
            zIndex: 2,
            position: 'sticky',
            background: theme.palette.white,
          },
          type === 'financial' && {
            borderLeft: `1px solid ${theme.utils.getColor('lightGray', 400)}`,
          },
        ]}
        onClick={onClick}
        data-testid={tableCellTestId}
      >
        {children}
      </Component>
    );
  }
);

export default TableCell;
