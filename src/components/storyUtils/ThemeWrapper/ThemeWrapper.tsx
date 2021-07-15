import React from 'react';

import ThemeProvider from '../../ThemeProvider';

const ThemeWrapper: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeWrapper;
