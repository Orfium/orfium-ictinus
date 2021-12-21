import React from 'react';

import ThemeProvider from '../../ThemeProvider';
import { flatPaletteConfig } from '../../../theme/palette.config';

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
