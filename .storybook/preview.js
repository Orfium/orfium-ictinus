// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';
import { ThemeSwitchProvider, useThemeSwitch } from '../src/hooks/useThemeSwitch';

const viewPorts = {
  laptopLg: {
    name: 'Laptop Large',
    styles: {
      width: '1440px',
      height: '1073px',
    },
    type: 'desktop',
  },
  laptopSm: {
    name: 'Laptop Small',
    styles: {
      width: '1200px',
      height: '859px',
    },
    type: 'desktop',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '750px',
      height: '859px',
    },
    type: 'tablet',
  },
};

const ThemeSwitcher = () => {
  const themeSwitchState = useThemeSwitch();
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        onClick={themeSwitchState.toggle}
        css={{
          backgroundColor: themeSwitchState.dark ? '#000' : 'transparent',
          color: themeSwitchState.dark ? '#fff' : '#000',
          outline: 'none',
          borderRadius: 4,
        }}
      >
        turn {themeSwitchState.dark ? 'light' : 'dark'} on
      </button>
    </div>
  );
};

export const decorators = [
  Story => {
    return (
      <ThemeProvider>
        <ThemeSwitcher />
        <Story />
      </ThemeProvider>
    );
  },
  Story => {
    return (
      <ThemeSwitchProvider>
        <Story />
      </ThemeSwitchProvider>
    );
  },
  Story => (
    <div style={{ margin: 5 }}>
      <Story />
    </div>
  ),
];
export const parameters = {
  viewport: {
    viewports: viewPorts,
    defaultViewport: 'laptopLg',
  },
  options: { showPanel: true },
};
