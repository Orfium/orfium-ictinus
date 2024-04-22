import React from 'react';
import isEqual from 'react-fast-compare';

const TR: React.FCC = ({ children }) => {
  return <tr>{children}</tr>;
};

export default React.memo(TR, isEqual);
