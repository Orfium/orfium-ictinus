import React from 'react';
import { ReactFCC } from 'utils/types';

import { flatPaletteConfig } from '../../../theme/palette.config';
import ThemeProvider from '../../ThemeProvider';

const ThemeWrapper: ReactFCC = ({ children }) => {
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
