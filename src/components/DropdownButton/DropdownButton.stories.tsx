import DropdownButton from './DropdownButton';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Design System/Button/DropdownButton',
  component: DropdownButton,

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

export const ButtonWithDropdown = {
  render: () => (
    <Stack>
      <DropdownButton
        items={['Item 1', 'Item 2']}
        onButtonClick={() => console.log('click')}
        onOptionSelect={(option) => console.log(option)}
      >
        Click Here
      </DropdownButton>
      <DropdownButton
        type="secondary"
        items={['Item 1', 'Item 2']}
        onButtonClick={() => console.log('click')}
        onOptionSelect={(option) => console.log(option)}
      >
        Click Here
      </DropdownButton>
      <DropdownButton
        type="tertiary"
        items={['Item 1', 'Item 2']}
        onButtonClick={() => console.log('click')}
        onOptionSelect={(option) => console.log(option)}
      >
        Click Here
      </DropdownButton>
    </Stack>
  ),

  name: 'Button with Dropdown',
};

export const IconButtonWithDropdown = {
  render: () => (
    <Stack>
      <DropdownButton
        items={['Item 1', 'Item 2']}
        onOptionSelect={(option) => console.log(option)}
      />
      <DropdownButton
        type="secondary"
        items={['Item 1', 'Item 2']}
        onOptionSelect={(option) => console.log(option)}
      />
      <DropdownButton
        type="tertiary"
        items={['Item 1', 'Item 2']}
        onOptionSelect={(option) => console.log(option)}
      />
    </Stack>
  ),

  name: 'IconButton with Dropdown',
};
