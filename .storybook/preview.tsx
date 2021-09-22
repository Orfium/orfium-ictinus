// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';
import { ThemeSwitchProvider, useThemeSwitch } from '../src/hooks/useThemeSwitch';
import { flatPaletteConfig } from '../src/theme/palette.config';

const viewPorts = {
  desktop1920: {
    name: 'Desktop 1920',
    styles: {
      width: '1920px',
      height: '1080px',
    },
    type: 'desktop',
  },
  desktop1440: {
    name: 'Desktop 1440',
    styles: {
      width: '1440px',
      height: '1080px',
    },
    type: 'desktop',
  },
  desktop1366: {
    name: 'Desktop 1366',
    styles: {
      width: '1366px',
      height: '768px',
    },
    type: 'desktop',
  },
  desktop1200: {
    name: 'Desktop 1200',
    styles: {
      width: '1200px',
      height: '800px',
    },
    type: 'desktop',
  },
  tablet1024: {
    name: 'Tablet 1024',
    styles: {
      width: '1024px',
      height: '1024px',
    },
    type: 'tablet',
  },
  tablet970: {
    name: 'Tablet 970',
    styles: {
      width: '970px',
      height: '1024px',
    },
    type: 'tablet',
  },
  mob480: {
    name: 'Mobile 480',
    styles: {
      width: '480px',
      height: '320px',
    },
    type: 'mobile',
  },
  mob320: {
    name: 'Mobile 320',
    styles: {
      width: '320px',
      height: '480px',
    },
    type: 'mobile',
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
  (Story: any) => {
    return (
      <ThemeProvider
        theme={{
          palette: { primary: flatPaletteConfig.purple, secondary: flatPaletteConfig.magenta },
        }}
      >
        <ThemeSwitcher />
        <Story />
      </ThemeProvider>
    );
  },
  (Story: any) => {
    return (
      <ThemeSwitchProvider>
        <Story />
      </ThemeSwitchProvider>
    );
  },
  (Story: any) => (
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
