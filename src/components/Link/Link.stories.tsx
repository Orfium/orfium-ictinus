import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Link from './Link';
import Stack from '../storyUtils/Stack';
import { BASE_SHADE } from '../../theme/palette';
import { FIGMA_URL } from '../../utils/common';
import { getIconSelectorKnob } from '../../utils/stories';
import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Design System/Link',
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

export const Style = {
  render: () => (
    <Stack isVertical>
      <Link href="#">Primary</Link>
    </Stack>
  ),

  name: 'Style',
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

  name: 'Placement',
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

  name: 'Sizes',
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
