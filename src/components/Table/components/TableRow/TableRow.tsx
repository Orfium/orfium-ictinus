/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from 'hooks/useTheme';

type Props = {};

const TableRow: React.FC<Props> = props => {
  const theme = useTheme();

  return (
    <tr
      css={[
        {
          paddingTop: theme.spacing.xsm,
          paddingBottom: theme.spacing.xsm,
        },
      ]}
    >
      {props.children}
    </tr>
  );
};

export default TableRow;
