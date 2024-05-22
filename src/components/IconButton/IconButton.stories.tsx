import IconButton from './IconButton';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from 'utils/common';

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
    iconName: 'check',
  },
};

export const IconButtonTypesAndSizes = {
  render: () => (
    <>
      <Stack>
        <IconButton iconName="moreOptions" />
        <IconButton iconName="moreOptions" type="secondary" />
        <IconButton iconName="moreOptions" type="tertiary" />
      </Stack>
      <Stack>
        <IconButton iconName="moreOptions" shape="square" />
        <IconButton iconName="moreOptions" type="secondary" shape="square" />
        <IconButton iconName="moreOptions" type="tertiary" shape="square" />
      </Stack>
      <Stack>
        <IconButton iconName="moreOptions" size="compact" />
        <IconButton iconName="moreOptions" type="secondary" size="compact" />
        <IconButton iconName="moreOptions" type="tertiary" size="compact" />
      </Stack>
      <Stack>
        <IconButton iconName="moreOptions" shape="square" size="compact" />
        <IconButton iconName="moreOptions" type="secondary" shape="square" size="compact" />
        <IconButton iconName="moreOptions" type="tertiary" shape="square" size="compact" />
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
    const { iconName, size, type, shape } = args;
    return (
      <Stack>
        <IconButton iconName={iconName} size={size} type={type} shape={shape} />
      </Stack>
    );
  },

  name: 'Playground',

  parameters: {
    controls: { include: ['iconName', 'size', 'type', 'shape'] },
  },
};
