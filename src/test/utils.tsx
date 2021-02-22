import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import ThemeProvider from '../components/ThemeProvider';

const renderWithThemeProvider = (children: JSX.Element) => {
  return render(
    <ThemeProvider theme={{ palette: { branded1: '#000' } }}>{children}</ThemeProvider>
  );
};

export * from '@testing-library/react';
export { renderHook, renderWithThemeProvider as render };
