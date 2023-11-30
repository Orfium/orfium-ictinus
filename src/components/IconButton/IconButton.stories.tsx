import { select } from '@storybook/addon-knobs';
import IconButton from './IconButton';
import Stack from '../storyUtils/Stack';
import iconSelector from '../Icon/assets/iconSelector';
import { FIGMA_URL } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';
import { getIconSelectorKnob } from '../../utils/stories';
import { AcceptedIconNames } from '../Icon';

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
};

export const Playground = {
  render: () => (
    <Stack>
      <IconButton
        name={select(
          'name',
          Object.keys(iconSelector)
            .sort((a, b) => a.localeCompare(b))
            .map((iconName) => iconName) as AcceptedIconNames[],
          'check'
        )}
        size={select('size', ['compact', 'normal'], 'normal')}
        type={select('type', ['primary', 'secondary', 'tertiary'], 'primary')}
        shape={select('shape', ['circle', 'square'], 'circle')}
      />
    </Stack>
  ),

  name: 'Playground',
};
