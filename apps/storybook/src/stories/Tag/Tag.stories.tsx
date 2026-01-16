import { Tag, Typography } from '@orfium/ictinus';
import { useState } from 'react';
import { FIGMA_URL } from 'utils/common';
import Stack from '~/stories/storyUtils/Stack';
import TagShowcase from '../../storybook/Showcases/TagShowcase';

export default {
  title: 'Updated Components/Tag',
  component: Tag,

  args: {
    variant: 'default',
    text: 'Label',
    size: 'normal',
    type: 'read-only',
    color: 'neutral',
  },

  argTypes: {
    type: { type: 'select', options: ['read-only', 'selectable', 'clearable'] },
  },

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Tag',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
    chromatic: { diffThreshold: 0.3 },
  },
};

export const ReadOnlyTag = {
  render: () => (
    <Stack>
      <Tag>Label</Tag>
      <Tag color="blue">Label</Tag>
      <Tag color="red">Label</Tag>
      <Tag color="purple">Label</Tag>
      <Tag color="teal">Label</Tag>
      <Tag color="orange">Label</Tag>
    </Stack>
  ),
  name: 'Read-only Tag',
  parameters: {
    controls: { disable: true },
  },
};

export const ReadOnlyTagWithIcon = {
  render: () => (
    <Stack>
      <Tag iconName={'bookmark'}>Label</Tag>
      <Tag iconName={'bookmark'} color="blue">
        Label
      </Tag>
      <Tag iconName={'bookmark'} color="red">
        Label
      </Tag>
      <Tag iconName={'bookmark'} color="purple">
        Label
      </Tag>
      <Tag iconName={'bookmark'} color="teal">
        Label
      </Tag>
      <Tag iconName={'bookmark'} color="orange">
        Label
      </Tag>
    </Stack>
  ),
  name: 'Read-only Tag with icon',
  parameters: {
    controls: { disable: true },
  },
};

export const SelectableTag = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Tag isSelected={isSelected} onSelect={() => setIsSelected((isSelected) => !isSelected)}>
        Label
      </Tag>
    );
  },
  name: 'Selectable Tag',
  parameters: {
    controls: { disable: true },
  },
};

export const ClearableTag = {
  render: () => <Tag onClear={() => console.log('clear')}>Label</Tag>,
  name: 'Clearable Tag',
};

export const CodeTag = {
  render: () => (
    <Stack>
      <Tag variant="code">c0d31a831</Tag>
      <Tag variant="code" size="small">
        c0d31a831
      </Tag>
    </Stack>
  ),
  name: 'Code Tag',
  parameters: {
    controls: { disable: true },
  },
};

export const TagSizes = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <>
        <Stack>
          <Typography>Read-only Tag</Typography>
        </Stack>
        <Stack>
          <Tag>Normal</Tag>
          <Tag color="blue">Normal</Tag>
          <Tag color="red">Normal</Tag>
          <Tag color="purple">Normal</Tag>
          <Tag color="teal">Normal</Tag>
          <Tag color="orange">Normal</Tag>
        </Stack>
        <Stack>
          <Tag size="small">Small</Tag>
          <Tag size="small" color="blue">
            Small
          </Tag>
          <Tag size="small" color="red">
            Small
          </Tag>
          <Tag size="small" color="purple">
            Small
          </Tag>
          <Tag size="small" color="teal">
            Small
          </Tag>
          <Tag size="small" color="orange">
            Small
          </Tag>
        </Stack>
        <Stack>
          <Typography>Selectable Tag</Typography>
        </Stack>
        <Stack>
          <Tag isSelected={isSelected} onSelect={() => setIsSelected((isSelected) => !isSelected)}>
            Normal
          </Tag>

          <Tag isSelected={isSelected} onSelect={() => setIsSelected((isSelected) => !isSelected)}>
            Normal
          </Tag>
        </Stack>
        <Stack>
          <Tag
            size="small"
            isSelected={isSelected}
            onSelect={() => setIsSelected((isSelected) => !isSelected)}
          >
            Small
          </Tag>

          <Tag
            size="small"
            isSelected={isSelected}
            onSelect={() => setIsSelected((isSelected) => !isSelected)}
          >
            Small
          </Tag>
        </Stack>
        <Stack>
          <Typography>Clearable Tag</Typography>
        </Stack>
        <Stack>
          <Tag onClear={() => console.log('clear')}>Normal</Tag>
        </Stack>
        <Stack>
          <Tag size="small" onClear={() => console.log('clear')}>
            Small
          </Tag>
        </Stack>
        <Stack>
          <Typography>Code Tag</Typography>
        </Stack>
        <Stack>
          <Tag variant="code">Normal</Tag>
        </Stack>
        <Stack>
          <Tag variant="code" size="small">
            Small
          </Tag>
        </Stack>
      </>
    );
  },
  name: 'Tag sizes',
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args: Parameters<typeof TagShowcase>[0]) => {
    const { variant, text, type, size, color, iconName } = args;
    return (
      <TagShowcase
        text={text}
        type={type}
        size={size}
        color={color}
        iconName={iconName}
        variant={variant}
      />
    );
  },
  name: 'Playground',
  parameters: {
    controls: { include: ['variant', 'text', 'type', 'size', 'color', 'iconName'] },
  },
};
