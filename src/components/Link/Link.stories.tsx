import Link from './Link';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';
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

  args: { placement: 'block', size: 1 },
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

  parameters: {
    controls: { disable: true },
  },
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

  parameters: {
    controls: { disable: true },
  },
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

  parameters: {
    controls: { disable: true },
  },
};

export const LinkWithIcon = {
  render: (args) => {
    const { iconName } = args;
    return (
      <Stack isVertical>
        <Link href="#" size={1} iconName={iconName}>
          Link
        </Link>
        <Link href="#" size={2} iconName={iconName}>
          Link
        </Link>
        <Link href="#" size={3} iconName={iconName}>
          Link
        </Link>
      </Stack>
    );
  },

  name: 'Link with Icon',

  args: {
    iconName: 'externalLink',
  },

  parameters: {
    controls: { include: ['iconName'] },
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
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { size, iconName, isDisabled, placement, type } = args;
    return (
      <Stack isVertical>
        <Link
          href="#"
          size={size}
          iconName={iconName}
          type={type}
          placement={placement}
          isDisabled={isDisabled}
        >
          Link
        </Link>
      </Stack>
    );
  },

  name: 'Playground',

  parameters: {
    controls: { include: ['size', 'iconName', 'type', 'placement', 'isDisabled'] },
  },
};
