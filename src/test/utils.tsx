import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import ThemeProvider from '../components/ThemeProvider';

export const selectDropdownOption = async (
  dropdownInput: HTMLInputElement,
  option: string
): Promise<void> => {
  await userEvent.type(dropdownInput, option); // type option on the dropdown input
  await userEvent.click(screen.getByText(option)); // select the option from displayed options
};

const renderWithThemeProvider = (children: JSX.Element) => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export * from '@testing-library/react';

export { renderHook, sleep, renderWithThemeProvider as render };
