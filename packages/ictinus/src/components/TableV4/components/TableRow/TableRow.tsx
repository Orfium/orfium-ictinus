import { vars } from '@orfium/tokens';
import * as React from 'react';

export type TableRowProps = {
  isSelected?: boolean;
  isNested?: boolean;
  onClick?: () => void;
};

const TableRow: React.FCC<TableRowProps> = ({
  isNested,
  isSelected,
  children,
  onClick,
  ...rest
}) => {
  return (
    <tr
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      css={[
        {
          backgroundColor: isSelected ? vars.color.palette.secondary.muted : undefined,
          paddingTop: vars.spacing['3'],
          paddingBottom: vars.spacing['3'],
          cursor: onClick && 'pointer',
          '&:hover': {
            backgroundColor: onClick && vars.color.palette.secondary.base,
          },

          '> td': {
            paddingTop: isNested ? 0 : undefined,
            paddingBottom: isNested ? 0 : undefined,
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
