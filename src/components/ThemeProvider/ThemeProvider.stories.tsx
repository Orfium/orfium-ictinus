import * as React from 'react';
import Button from 'components/Button';
import ThemeProvider from './ThemeProvider';

export default {
  title: 'ThemeProvider',
};

export const settingUpAButtonExample = () => (
  <ThemeProvider theme={{ palette: { primary: 'red' } }}>
    <Button bg={'green'}>Hello world</Button>
  </ThemeProvider>
);
