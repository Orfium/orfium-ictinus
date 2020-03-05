/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
// import { rem } from 'polished';
// import { flexCenter } from 'theme/functions';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import head from 'lodash/head';
import useTheme from '../../hooks/useTheme';
import rem from 'polished/lib/helpers/rem';

type Props<T> = {
  customerHeader?: (data: T) => React.Component;
  data: T[];
  columns: string[];
  sorting?: boolean;
  customerRow?: (data: T) => React.Component;
  fixedHeader?: boolean;
  selecting?: boolean;
};

function Table<T extends object>(props: Props<T>) {
  const theme = useTheme();

  const columnsHasNumberArr = head(
    props.data.map(item =>
      Object.keys(item).map(objectItem => {
        return Boolean(Number.isInteger(item[objectItem]) || parseFloat(item[objectItem]));
      })
    )
  );

  return (
    <table css={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
      <thead>
        <tr
          css={[
            {
              paddingTop: theme.spacing.md,
              paddingBottom: theme.spacing.md,
              borderBottomWidth: rem(1),
              borderBottomStyle: 'solid',
              borderBottomColor: theme.palette.gray100,
            },
          ]}
        >
          {props.columns.map((item, index) => (
            <TableCell
              align={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
              component={'th'}
              key={`${item}`}
            >
              {item}
            </TableCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <TableRow key={index}>
            {Object.keys(item).map((objectItem, index) => (
              <TableCell
                key={`${item}`}
                align={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
              >
                {item[objectItem]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
