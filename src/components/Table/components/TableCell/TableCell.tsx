/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../hooks/useTheme';

type Props = {
  textAlign?: 'left' | 'right';
  component?: 'td' | 'th';
  width?: number;
  sticky?: boolean;
  colSpan?: number;
};

const TableCell: React.FC<Props> = ({
  textAlign = 'left',
  component = 'td',
  width,
  sticky = false,
  colSpan,
  children,
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
          paddingTop: theme.spacing.xsm,
          paddingBottom: theme.spacing.xsm,
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
      ]}
    >
      {children}
    </Component>
  );
};

export default TableCell;
