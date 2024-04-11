import React from 'react';

import ColumnChooser from './components/ColumnChooser';
import { tTitleContainer } from './TTitle.style';
import type { TableProps } from 'components/Table/types';

type Props = Pick<TableProps<any>, 'columnsConfig' | 'columns'>;

const TTitle: React.FCC<Props> = ({ columns, columnsConfig, children }) => {
  return (
    <div css={tTitleContainer()}>
      <div>{children}</div>
      <ColumnChooser columns={columns} columnsConfig={columnsConfig} />
    </div>
  );
};

export default TTitle;
