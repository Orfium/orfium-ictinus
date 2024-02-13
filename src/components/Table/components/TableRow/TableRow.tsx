import * as React from 'react';

import useTheme from '../../../../hooks/useTheme';

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
  const theme = useTheme();

  return (
    <tr
      onClick={() => {
        onClick && onClick();
      }}
      css={[
        {
          backgroundColor: isSelected ? theme.tokens.colors.get('palette.secondary.light') : undefined,
          paddingTop: theme.globals.spacing.get('3'),
          paddingBottom: theme.globals.spacing.get('3'),
          cursor: onClick && 'pointer',
          '&:hover': {
            backgroundColor: onClick && theme.tokens.colors.get('palette.secondary.main'),
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
