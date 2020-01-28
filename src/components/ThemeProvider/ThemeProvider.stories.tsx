import * as React from 'react';
import Button from '../Button';
import ThemeProvider from './ThemeProvider';

export default {
  title: 'ThemeProvider',
};

export const settingUpAButtonExample = () => (
  <ThemeProvider theme={{ colors: { primary: 'red' } }}>
    <Button bg={'green'}>Hello world</Button>
  </ThemeProvider>
);
