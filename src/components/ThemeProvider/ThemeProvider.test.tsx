import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { useThemeSwitch } from '../../hooks/useThemeSwitch';
import ThemeProvider from './ThemeProvider';

const ThemeSwitcher = () => {
  const themeSwitchState = useThemeSwitch();

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        onClick={themeSwitchState.toggle}
        css={{
          backgroundColor: themeSwitchState.dark ? '#fff' : 'transparent',
          color: '#000',
          outline: 'none',
          borderRadius: 4,
        }}
      >
        turn {themeSwitchState.dark ? 'light' : 'dark'} on
      </button>
    </div>
  );
};

test('ThemeProvider has default dark mode', () => {
  render(
    <ThemeProvider theme={{}}>
      <ThemeSwitcher />
    </ThemeProvider>
  );
  expect(screen.getByText(/turn dark on/i)).toBeInTheDocument();
});

test('ThemeProvider changes default dark mode to light', () => {
  render(
    <ThemeProvider theme={{}}>
      <ThemeSwitcher />
    </ThemeProvider>
  );
  userEvent.click(screen.getByText(/turn dark on/i));

  expect(screen.getByText(/turn light on/i)).toBeInTheDocument();
});
