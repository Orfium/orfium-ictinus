import IconButton from './IconButton';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Updated Components/Buttons/IconButton',
  component: IconButton,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Buttons',
        url: `${FIGMA_URL}?node-id=574%3A7239`,
      },
      {
        type: 'figma',
        name: 'Documentation',
        url: `${FIGMA_URL}?node-id=8167%3A146863`,
      },
    ],
  },

  args: {
    shape: 'circle',
    size: 'normal',
    type: 'primary',
  },
};

export const IconButtonTypesAndSizes = {
  render: () => (
    <>
      <Stack>
        <IconButton name="moreOptions" />
        <IconButton name="moreOptions" type="secondary" />
        <IconButton name="moreOptions" type="tertiary" />
      </Stack>
      <Stack>
        <IconButton name="moreOptions" shape="square" />
        <IconButton name="moreOptions" type="secondary" shape="square" />
        <IconButton name="moreOptions" type="tertiary" shape="square" />
      </Stack>
      <Stack>
        <IconButton name="moreOptions" size="compact" />
        <IconButton name="moreOptions" type="secondary" size="compact" />
        <IconButton name="moreOptions" type="tertiary" size="compact" />
      </Stack>
      <Stack>
        <IconButton name="moreOptions" shape="square" size="compact" />
        <IconButton name="moreOptions" type="secondary" shape="square" size="compact" />
        <IconButton name="moreOptions" type="tertiary" shape="square" size="compact" />
      </Stack>
    </>
  ),

  name: 'IconButton Types and Sizes',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    /** @TODO: change IconButton property name to iconName */
    const { name = 'moreOptions', size, type, shape } = args;
    return (
      <Stack>
        <IconButton name={name} size={size} type={type} shape={shape} />
      </Stack>
    );
  },

  name: 'Playground',

  parameters: {
    controls: { include: ['name', 'size', 'type', 'shape'] },
  },
};
