import { IconButton } from '@orfium/ictinus';
import { Box } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FIGMA_URL } from 'utils/common';

const meta: Meta<typeof IconButton> = {
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
    color: '',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const IconButtonTypesAndSizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg">
      <Box display="flex" alignItems="center" gap="sm">
        <IconButton iconName="moreOptions" />
        <IconButton iconName="moreOptions" type="secondary" />
        <IconButton iconName="moreOptions" type="tertiary" />
      </Box>
      <Box display="flex" alignItems="center" gap="sm">
        <IconButton iconName="moreOptions" shape="square" />
        <IconButton iconName="moreOptions" type="secondary" shape="square" />
        <IconButton iconName="moreOptions" type="tertiary" shape="square" />
      </Box>
      <Box display="flex" alignItems="center" gap="sm">
        <IconButton iconName="moreOptions" size="compact" />
        <IconButton iconName="moreOptions" type="secondary" size="compact" />
        <IconButton iconName="moreOptions" type="tertiary" size="compact" />
      </Box>
      <Box display="flex" alignItems="center" gap="sm">
        <IconButton iconName="moreOptions" shape="square" size="compact" />
        <IconButton iconName="moreOptions" type="secondary" shape="square" size="compact" />
        <IconButton iconName="moreOptions" type="tertiary" shape="square" size="compact" />
      </Box>
      <Box display="flex" alignItems="center" gap="sm">
        <IconButton
          iconName="success"
          type="secondary"
          shape="square"
          size="compact"
          color="indicator.success"
        />
        <IconButton
          iconName="warning"
          type="secondary"
          shape="square"
          size="compact"
          color="indicator.warning"
        />
        <IconButton
          iconName="edit"
          type="tertiary"
          shape="square"
          size="compact"
          color="secondary"
        />
      </Box>
    </Box>
  ),
  name: 'IconButton Types and Sizes',
  parameters: {
    controls: { disable: true },
  },
};

export const Playground: Story = {
  render: (args) => {
    const { iconName, size, type, shape, color } = args;

    return <IconButton iconName={iconName} size={size} type={type} shape={shape} color={color} />;
  },
  name: 'Playground',
  parameters: {
    controls: { include: ['iconName', 'size', 'type', 'shape', 'color'] },
  },
};
