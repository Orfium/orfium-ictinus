import React from 'react';
import isEqual from 'react-fast-compare';

import { tHeadContainer } from './THead.style';

const THead: React.FCC = ({ children }) => {
  return <thead css={tHeadContainer()}>{children}</thead>;
};

export default React.memo(THead, isEqual);
