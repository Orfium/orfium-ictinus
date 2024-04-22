import React from 'react';
import isEqual from 'react-fast-compare';

const TBody: React.FCC = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default React.memo(TBody, isEqual);
