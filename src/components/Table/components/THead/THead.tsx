import React from 'react';
import isEqual from 'react-fast-compare';

const THead: React.FCC = ({ children }) => {
  return <thead>{children}</thead>;
};

export default React.memo(THead, isEqual);
