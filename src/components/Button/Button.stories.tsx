import * as React from 'react';
import Button from 'src/components/Button';
import { color, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Button',
};

export const withBackground = () => <Button bg={'green'}>Hello world</Button>;

export const withBackgroundKnobs = () => <Button bg={color('bg', 'red')}>Hello world2</Button>;

withBackgroundKnobs.story = {
  decorators: [withKnobs],
};
