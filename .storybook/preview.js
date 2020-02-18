// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
import { withA11y } from '@storybook/addon-a11y';
// Add prop tables to components (based on component type interfaces)
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';
import defaultTheme from '../src/theme';
import { ThemeSwitchProvider, useThemeSwitch } from '../src/hooks/useThemeSwitch';

const viewPorts = [
  {
    name: 'Laptop Large',
    styles: {
      width: '1440px',
      height: '1073px',
    },
    type: 'desktop',
  },
  {
    name: 'Laptop Small',
    styles: {
      width: '1200px',
      height: '859px',
    },
    type: 'desktop',
  },

  {
    name: 'Tablet',
    styles: {
      width: '750px',
      height: '859px',
    },
    type: 'tablet',
  },
];

// wrap all components with theme provider by default
addDecorator(storyFn => {
  const themeSwitchState = useThemeSwitch();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => {
            console.log('toggle button');
            themeSwitchState.toggle();
          }}
        >
          toggle dark/light
        </button>
        <span>current theme: {themeSwitchState.dark ? 'dark' : 'light'}</span>
      </div>
      {storyFn()}
    </ThemeProvider>
  );
});
addDecorator(storyFn => <ThemeSwitchProvider>{storyFn()}</ThemeSwitchProvider>);
addDecorator(storyFn => <div style={{ margin: 5 }}>{storyFn()}</div>);

addParameters({
  viewport: {
    viewports: viewPorts,
    defaultViewport: 'someDefault',
  },
  options: { showPanel: true },
});
addDecorator(withA11y);
