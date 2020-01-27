import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ThemeProvider from '../src/components/ThemeProvider';
import { addReadme } from 'storybook-readme';
import defaultTheme from '../src/theme/globals';

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

// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
addDecorator(withInfo());

// wrap all components with theme provider by default
addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>);
addParameters({
  viewport: {
    viewports: viewPorts,
    defaultViewport: 'someDefault',
  },
  options: { showPanel: true },
});
addDecorator(addReadme);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  // ensure the welcome is always on top
  require('../src/components/Welcome/welcome.stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
