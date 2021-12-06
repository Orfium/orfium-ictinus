import useTheme from 'hooks/useTheme';
import { rem } from 'polished';
import * as React from 'react';

import { parentStyles } from './TableCell.style';

type Props = {
  textAlign?: 'left' | 'right';
  component?: 'td' | 'th';
  width?: number | string;
  sticky?: boolean;
  paddedSticky?: boolean;
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
    paddedSticky = false,
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

    const getTestId = () => {
      if (!children) {
        return undefined;
      }

      if (component === 'th' && typeof children === 'string') {
        return [dataTestIdPrefix, 'table_header', children?.replace(/ /g, '_').toLowerCase()]
          .filter(value => value)
          .join('_');
      } else {
        return [
          dataTestIdPrefix,
          rowIndex !== undefined ? `table_row_${rowIndex}` : '',
          index !== undefined ? `cell_${index}` : '',
        ]
          .filter(value => value)
          .join('_');
      }
    };

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
            top: paddedSticky ? rem(64) : 0,
            left: 0,
            zIndex: 2,
            position: 'sticky',
            background: theme.palette.white,
            boxShadow: `inset 0px -1px 0px 0px ${theme.utils.getColor('lightGrey', 200)}`,
          },
          type === 'financial' && {
            borderLeft: `1px solid ${theme.utils.getColor('lightGrey', 100)}`,
          },
        ]}
        onClick={onClick}
        data-testid={getTestId()}
      >
        {children}
      </Component>
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
