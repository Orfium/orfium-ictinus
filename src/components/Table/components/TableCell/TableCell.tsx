/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../hooks/useTheme';

type Props = {
  align?: 'left' | 'right';
  component?: 'td' | 'th';
};

const TableCell: React.FC<Props> = ({ align: textAlign = 'left', component = 'td', children }) => {
  const theme = useTheme();
  const Component = component;

  return (
    // @ts-ignore
    <Component
      css={[
        { textAlign, paddingTop: theme.spacing.xsm, paddingBottom: theme.spacing.xsm },
        component === 'th' && {
          paddingTop: theme.spacing.md,
          paddingBottom: theme.spacing.md,
          fontWeight: theme.typography.weights.bold,
          fontSize: theme.typography.fontSizes['14'],
        },
      ]}
    >
      {children}
    </Component>
  );
};

export default TableCell;
