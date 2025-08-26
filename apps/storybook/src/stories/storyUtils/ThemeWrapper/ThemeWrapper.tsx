import React from 'react';

import { ThemeProvider } from '@orfium/ictinus';
import { flatPaletteConfig } from '../../../theme/palette.config';

const ThemeWrapper: React.FCC = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        palette: { primary: flatPaletteConfig.blue, secondary: flatPaletteConfig.teal },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
