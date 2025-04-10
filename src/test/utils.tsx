import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import React from 'react';

import ThemeProvider from '../components/ThemeProvider';
import { flatPaletteConfig } from '../theme/palette.config';

export const selectDropdownOption = async (
  dropdownInput: HTMLInputElement,
  option: string
): Promise<void> => {
  userEvent.type(dropdownInput, option); // type option on the dropdown input
  screen.debug();
  userEvent.click(screen.getByText(option)); // select the option from displayed options
};

const renderWithThemeProvider = (children: React.ReactElement) => {
  return render(
    <ThemeProvider
      theme={{
        palette: { primary: flatPaletteConfig.blue, secondary: flatPaletteConfig.teal },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export * from '@testing-library/react';

export { renderHook, renderWithThemeProvider as render };
