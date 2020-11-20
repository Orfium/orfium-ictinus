/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import useTheme from '../../../../hooks/useTheme';

type Props = {
  textAlign?: 'left' | 'right';
  component?: 'td' | 'th';
  width?: number | string;
  sticky?: boolean;
  colSpan?: number;
  type?: 'financial' | 'normal';
  padded?: boolean;
};

const TableCell: React.FC<Props> = React.memo(
  ({
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
        /** this ignore the css property that doesnt recognize array of objects as property **/
        // @ts-ignore
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
            background: theme.palette.white,
          },
          type === 'financial' && {
            borderLeft: `1px solid ${theme.getColor('lightGray', 400)}`,
          },
        ]}
      >
        {children}
      </Component>
    );
  }
);

export default TableCell;
