// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
import { withA11y } from '@storybook/addon-a11y';
// Add prop tables to components (based on component type interfaces)
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';
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

// wrap all components with theme provider by default
addDecorator(storyFn => {
  return (
    <ThemeProvider theme={{}}>
      <ThemeSwitcher />
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
