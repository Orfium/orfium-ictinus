import Tag from './Tag';

import { FIGMA_URL, Function } from '../../utils/common';
import Stack from 'components/storyUtils/Stack';
import { useState } from 'react';
import TagShowcase from '../../storybook/Showcases/TagShowcase';
import Typography from '../Typography';

export default {
  title: 'Updated Components/Tag',
  component: Tag,

  args: {
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
  render: () => (
    <Stack>
      <Function>
        {() => {
          const [isSelected, setIsSelected] = useState(false);
          return (
            <Tag
              isSelected={isSelected}
              onSelect={() => setIsSelected((isSelected) => !isSelected)}
            >
              Label
            </Tag>
          );
        }}
      </Function>
      <Function>
        {() => {
          const [isSelected, setIsSelected] = useState(true);
          return (
            <Tag
              isSelected={isSelected}
              onSelect={() => setIsSelected((isSelected) => !isSelected)}
            >
              Label
            </Tag>
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'Selectable Tag',
  parameters: {
    controls: { disable: true },
  },
};

export const ClearableTag = {
  render: () => <Tag onClear={() => console.log('clear')}>Label</Tag>,
  name: 'Clearable Tag',
};

export const TagSizes = {
  render: () => (
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
        <Function>
          {() => {
            const [isSelected, setIsSelected] = useState(false);
            return (
              <Tag
                isSelected={isSelected}
                onSelect={() => setIsSelected((isSelected) => !isSelected)}
              >
                Normal
              </Tag>
            );
          }}
        </Function>
        <Function>
          {() => {
            const [isSelected, setIsSelected] = useState(true);
            return (
              <Tag
                isSelected={isSelected}
                onSelect={() => setIsSelected((isSelected) => !isSelected)}
              >
                Normal
              </Tag>
            );
          }}
        </Function>
      </Stack>
      <Stack>
        <Function>
          {() => {
            const [isSelected, setIsSelected] = useState(false);
            return (
              <Tag
                size="small"
                isSelected={isSelected}
                onSelect={() => setIsSelected((isSelected) => !isSelected)}
              >
                Small
              </Tag>
            );
          }}
        </Function>
        <Function>
          {() => {
            const [isSelected, setIsSelected] = useState(true);
            return (
              <Tag
                size="small"
                isSelected={isSelected}
                onSelect={() => setIsSelected((isSelected) => !isSelected)}
              >
                Small
              </Tag>
            );
          }}
        </Function>
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
    </>
  ),
  name: 'Tag sizes',
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { text, type, size, color, iconName } = args;
    return <TagShowcase text={text} type={type} size={size} color={color} iconName={iconName} />;
  },
  name: 'Playground',
  parameters: {
    controls: { include: ['text', 'type', 'size', 'color', 'iconName'] },
  },
};
