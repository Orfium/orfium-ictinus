/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../hooks/useTheme';

type Props = {
  align?: 'left' | 'right';
  component?: 'td' | 'th';
  sticky?: boolean;
  colspan?: number;
};

const TableCell: React.FC<Props> = ({
  align: textAlign = 'left',
  component = 'td',
  sticky = false,
  colspan = 0,
  children,
}) => {
  const theme = useTheme();
  const Component = component;

  return (
    // @ts-ignore
    <Component
      // @ts-ignore
      colspan={colspan}
      css={[
        { textAlign, paddingTop: theme.spacing.xsm, paddingBottom: theme.spacing.xsm },
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
