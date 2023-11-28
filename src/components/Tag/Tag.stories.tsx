import Tag from './Tag';

import { FIGMA_URL, Function } from '../../utils/common';
import Stack from 'components/storyUtils/Stack';
import { useState } from 'react';
import TagShowcase from '../../storybook/Showcases/TagShowcase';
import { boolean, select, text } from '@storybook/addon-knobs';
import Typography from '../Typography';
import { getIconSelectorKnob } from '../../utils/stories';

export default {
  title: 'Updated Components/Tag',
  component: Tag,
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
    </Stack>
  ),
  name: 'Read-only Tag',
};

export const ReadOnlyTagWithIcon = {
  render: () => (
    <Stack>
      <Tag iconName={'dashboard'}>Label</Tag>
      <Tag iconName={'dashboard'} color="blue">
        Label
      </Tag>
      <Tag iconName={'dashboard'} color="red">
        Label
      </Tag>
      <Tag iconName={'dashboard'} color="purple">
        Label
      </Tag>
      <Tag iconName={'dashboard'} color="teal">
        Label
      </Tag>
    </Stack>
  ),
  name: 'Read-only Tag with icon',
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
};

export const Playground = {
  render: () => (
    <TagShowcase
      text={text('text', 'Label')}
      type={select('type', ['read-only', 'selectable', 'clearable'], 'read-only')}
      size={select('size', ['normal', 'small'], 'normal')}
      color={select('color', ['neutral', 'blue', 'red', 'purple', 'teal'], 'neutral')}
      hasIcon={boolean('hasIcon (only for Read-only)', false)}
      iconName={getIconSelectorKnob('iconLeftName (only for Read-only)')}
    />
  ),
  name: 'Playground',
};
