// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';
import { ThemeSwitchProvider, useThemeSwitch } from '../src/hooks/useThemeSwitch';
import { css, Global } from '@emotion/core';
import { normalize } from 'polished';

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

const globalStyles = css`
  ${normalize()};
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');

  body,
  html {
    font-family: 'Lato', Tahoma;
    font-size: 16px;
    font-weight: normal;
  }

  #root {
    display: 'flex';
  }
`;

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
      <ThemeProvider theme={{ palette: { branded1: '#000' } }}>
        <ThemeSwitcher />
        <Story />
        <Global styles={globalStyles} />
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
