/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from 'hooks/useTheme';

type Props = {
  textAlign?: 'left' | 'right';
  component?: 'td' | 'th';
  width?: number;
  sticky?: boolean;
  colSpan?: number;
  type?: 'financial' | 'normal';
  padded?: boolean;
};

const TableCell: React.FC<Props> = ({
  textAlign = 'left',
  component = 'td',
  width,
  sticky = false,
  colSpan,
  children,
  type = 'normal',
  padded = false,
}) => {
  const theme = useTheme();
  const Component = component;

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
          paddingTop: theme.spacing.md,
          paddingBottom: theme.spacing.md,
          fontWeight: theme.typography.weights.bold,
          fontSize: theme.typography.fontSizes['14'],
        },
        sticky && {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'sticky',
          background: '#fff',
        },
        type === 'financial' && {
          borderLeft: `1px solid ${theme.palette.gray50}`,
        },
      ]}
    >
      {children}
    </Component>
  );
};

export default TableCell;
