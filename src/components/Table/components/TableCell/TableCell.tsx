import useTheme from 'hooks/useTheme';
import { rem } from 'polished';
import * as React from 'react';

import { parentStyles } from './TableCell.style';
import { getTestId } from './utils';
import { getBorderColor } from 'components/Table/utils';

export type TableCellProps = {
  textAlign?: 'left' | 'right';
  component?: 'td' | 'th';
  width?: number | string;
  isSticky?: boolean;
  isPaddedSticky?: boolean;
  colSpan?: number;
  type?: 'financial' | 'normal';
  isPadded?: boolean;
  dataTestIdPrefix?: string;
  rowIndex?: number;
  index?: number | string;
  isSortable?: boolean;
  isActive?: boolean;
  onClick?: () => void;
};

const TableCell: React.FC<TableCellProps> = React.memo(
  ({
    textAlign = 'left',
    component = 'td',
    width,
    isSticky = false,
    isPaddedSticky = false,
    colSpan,
    children,
    isSortable = false,
    isActive = false,
    type = 'normal',
    isPadded = false,
    dataTestIdPrefix,
    rowIndex,
    onClick,
    index,
  }) => {
    const theme = useTheme();
    const Component = component;
    const dataTestId = getTestId(children, component, dataTestIdPrefix, rowIndex, index);

    return (
      <Component
        colSpan={colSpan}
        css={[
          {
            position: 'relative',
            textAlign,
            padding: `${theme.spacing.xsm} ${isPadded ? theme.spacing.sm : 0}`,
            width,
          },
          component === 'th' && {
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.sm,
            fontWeight: theme.typography.weights.bold,
            fontSize: theme.typography.fontSizes['14'],
          },
          component === 'th' && isSortable && { ...parentStyles({ isActive })(theme) },
          isSticky && {
            top: isPaddedSticky ? rem(64) : 0,
            left: 0,
            zIndex: 2,
            position: 'sticky',
            background: theme.palette.white,
            boxShadow: `inset 0px -1px 0px 0px ${getBorderColor(theme)}`,
          },
          type === 'financial' && {
            borderLeft: `1px solid ${getBorderColor(theme)}`,
          },
        ]}
        onClick={onClick}
        data-testid={dataTestId}
      >
        {children}
      </Component>
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
