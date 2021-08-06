import * as React from 'react';

import useTheme from '../../../../hooks/useTheme';

type Props = {
  selected?: boolean;
  nested?: boolean;
  onClick?: () => void;
};

const TableRow: React.FC<Props> = ({ nested, selected, children, onClick, ...rest }) => {
  const theme = useTheme();

  return (
    <tr
      onClick={() => {
        onClick && onClick();
      }}
      css={[
        {
          backgroundColor: selected ? theme.utils.getColor('lightTintedGrey', 50) : undefined,
          paddingTop: theme.spacing.xsm,
          paddingBottom: theme.spacing.xsm,
          cursor: onClick && 'pointer',
          '&:hover': {
            backgroundColor: onClick && theme.utils.getColor('lightTintedGrey', 250),
          },

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
