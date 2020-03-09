/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from 'hooks/useTheme';

type Props = {
  onClick?: () => void;
  nested?: boolean;
};

const TableRow: React.FC<Props> = ({ nested, children, ...rest }) => {
  const theme = useTheme();

  return (
    <tr
      css={[
        {
          paddingTop: theme.spacing.xsm,
          paddingBottom: theme.spacing.xsm,
          '> td': {
            paddingTop: nested ? 0 : undefined,
            paddingBottom: nested ? 0 : undefined,
          },
        },
      ]}
      {...rest}
    >
      {children}
    </tr>
  );
};

export default TableRow;
