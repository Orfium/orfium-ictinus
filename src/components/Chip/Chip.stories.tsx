import { select, text } from '@storybook/addon-knobs';
import { colorShades, flatColors } from '../../theme/palette';
import { flexCenterVertical } from '../../theme/functions';
import Stack from '../storyUtils/Stack';
import ChipShowcase from '../storyUtils/ChipShowcase';
import Chip from './Chip';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Chip',
  component: Chip,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Anatomy',
        url: `${FIGMA_URL}?node-id=10038%3A104524`,
      },
      {
        type: 'figma',
        name: 'Rules',
        url: `${FIGMA_URL}?node-id=10037%3A121257`,
      },
      {
        type: 'figma',
        name: 'Chip',
        url: `${FIGMA_URL}?node-id=10062%3A105272`,
      },
    ],
  },
};

export const ReadOnlyChips = {
  render: () => (
    <Stack>
      <Chip fill={select('fill', flatColors.concat(undefined), flatColors[3])}>Label</Chip>
      <Chip
        fill={select('fill', flatColors.concat(undefined), flatColors[3])}
        thumbnail={{
          src: '',
          name: 'KN',
        }}
      >
        Label
      </Chip>
      <Chip
        thumbnail={{
          src: 'https://mui.com/static/images/avatar/1.jpg',
          name: 'J',
        }}
        fill={select('fill', flatColors.concat(undefined), flatColors[3])}
      >
        Label
      </Chip>
    </Stack>
  ),

  name: 'Read-Only Chips',
};

export const InteractiveChips = {
  render: () => (
    <Stack>
      <Chip
        styleType={'interactive'}
        onClear={() => alert('You clicked the remove icon!')}
        fill={select('fill', flatColors.concat(undefined), flatColors[6])}
      >
        Label
      </Chip>
      <ChipShowcase
        styleType={'interactive'}
        isChecked
        fill={select('fill', flatColors.concat(undefined), flatColors[6])}
      >
        Label
      </ChipShowcase>
      <ChipShowcase
        styleType={'interactive'}
        badgeNumber={5}
        fill={select('fill', flatColors.concat(undefined), flatColors[6])}
      >
        Label
      </ChipShowcase>
    </Stack>
  ),

  name: 'Interactive Chips',
};
