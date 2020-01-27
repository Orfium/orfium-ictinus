import * as React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../Button';
import ThemeProvider from './ThemeProvider';

storiesOf('ThemeProvider', module).add('setting up a button example', () => (
  <ThemeProvider theme={{ colors: { primary: 'red' } }}>
    <Button bg={'green'}>Hello world</Button>
  </ThemeProvider>
));
