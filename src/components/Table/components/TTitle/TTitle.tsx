import React from 'react';

import { tTitleContainer } from './TTitle.style';

const TTitle: React.FCC = ({ children }) => {
  return <div css={tTitleContainer()}>{children}</div>;
};

export default TTitle;
