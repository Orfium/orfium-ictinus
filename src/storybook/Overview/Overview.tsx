import React from 'react';
import Typography from 'storybook/Typography/Typography';

import { overviewStyles } from './Overview.style';

const Overview: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div css={overviewStyles()}>
      <Typography variant="body01">{children}</Typography>
    </div>
  );
};

export default Overview;
