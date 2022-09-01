import * as React from 'react';

import useTheme from '../../../../hooks/useTheme';

type Props = {
  isSelected?: boolean;
  isNested?: boolean;
  onClick?: () => void;
};

const TableRow: React.FC<Props> = ({ isNested, isSelected, children, onClick, ...rest }) => {
  const theme = useTheme();

  return (
    <tr
      onClick={() => {
        onClick && onClick();
      }}
      css={[
        {
          backgroundColor: isSelected ? theme.utils.getColor('blue', 50) : undefined,
          paddingTop: theme.spacing.xsm,
          paddingBottom: theme.spacing.xsm,
          cursor: onClick && 'pointer',
          '&:hover': {
            backgroundColor: onClick && theme.utils.getColor('lightGrey', 50),
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
