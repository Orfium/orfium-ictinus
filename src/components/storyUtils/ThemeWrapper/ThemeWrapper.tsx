import React from 'react';

import { flatPaletteConfig } from '../../../theme/palette.config';
import ThemeProvider from '../../ThemeProvider';

const ThemeWrapper: React.FC = ({ children }) => {
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
