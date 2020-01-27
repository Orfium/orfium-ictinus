import * as React from 'react';

import { storiesOf } from '@storybook/react';
import Button from 'src/components/Button';
import { withKnobs, color } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with background', () => <Button bg={'green'}>Hello world</Button>)
  .add('with background knobs', () => <Button bg={color('bg', 'red')}>Hello world2</Button>);
