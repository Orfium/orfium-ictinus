import React from 'react';

import { ThemeProvider } from '@orfium/ictinus';

const ThemeWrapper: React.FCC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeWrapper;
 