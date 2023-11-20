import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Link from './Link';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';
import { getIconSelectorKnob } from '../../utils/stories';
import { Link as ReactRouterLink, MemoryRouter as Router } from 'react-router-dom';

export default {
  title: 'Updated Components/Link',
  component: Link,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Avatar',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
  },
};

export const LinkStyles = {
  render: () => (
    <>
      <Stack isVertical>
        <Link href="#">Primary</Link>
      </Stack>
      <Stack isInverted>
        <Link href="#" type="inverted">
          Inverted
        </Link>
      </Stack>
    </>
  ),

  name: 'Link Styles',
};

export const Placement = {
  render: () => (
    <Stack isVertical>
      <div>
        This is an{' '}
        <Link href="#" placement="inline" size={1}>
          inline Link
        </Link>
        .
      </div>
      <div>
        This is a
        <Link href="#" size={1}>
          block Link
        </Link>
        .
      </div>
    </Stack>
  ),

  name: 'Link Placement',
};

export const Sizes = {
  render: () => (
    <Stack isVertical>
      <Link href="#" size={1}>
        Size 1
      </Link>
      <Link href="#" size={2}>
        Size 2
      </Link>
      <Link href="#" size={3}>
        Size 3
      </Link>
    </Stack>
  ),

  name: 'Link Sizes',
};

export const LinkWithIcon = {
  render: () => (
    <Stack isVertical>
      <Link href="#" size={1} iconName={getIconSelectorKnob('iconName', 'externalLink')}>
        Link
      </Link>
      <Link href="#" size={2} iconName={getIconSelectorKnob('iconName', 'externalLink')}>
        Link
      </Link>
      <Link href="#" size={3} iconName={getIconSelectorKnob('iconName', 'externalLink')}>
        Link
      </Link>
    </Stack>
  ),

  name: 'Link with Icon',

  parameters: {
    decorators: [withKnobs],
  },
};
export const ThirdPartyRoutingLibrary = {
  render: () => (
    <Router>
      <Link component={ReactRouterLink} href="/">
        Link
      </Link>
    </Router>
  ),

  name: 'Third-party Routing Library',

  parameters: {
    decorators: [withKnobs],
  },
};

export const Playground = {
  render: () => (
    <Stack isVertical>
      <Link
        href="#"
        size={select('size', [1, 2, 3], 1)}
        type={select('type', ['primary', 'inverted'], 'primary')}
        placement={select('placement', ['block', 'inline'], 'block')}
        isDisabled={boolean('isDisabled', false)}
      >
        Link
      </Link>
    </Stack>
  ),

  name: 'Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
