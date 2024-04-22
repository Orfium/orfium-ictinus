import React from 'react';
import isEqual from 'react-fast-compare';

import { tTitleContainer } from './TTitle.style';

const TTitle: React.FCC = ({ children }) => {
  return <div css={tTitleContainer()}>{children}</div>;
};

export default React.memo(TTitle, isEqual);
