import React from 'react';

import { overviewStyles } from './Overview.style';
import Typography from 'components/Typography';

const Overview: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div css={overviewStyles()}>
      <Typography>{children}</Typography>
    </div>
  );
};

export default Overview;
