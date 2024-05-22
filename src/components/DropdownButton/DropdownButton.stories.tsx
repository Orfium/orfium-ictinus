import DropdownButton from './DropdownButton';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from 'utils/common';

export default {
  title: 'Updated Components/Buttons/DropdownButton',
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
    controls: {
      disable: true,
    },
  },
};

export const ButtonWithDropdown = {
  render: () => (
    <Stack height={150}>
      {' '}
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
      <DropdownButton
        size="compact"
        items={['Item 1', 'Item 2']}
        onButtonClick={() => console.log('click')}
        onOptionSelect={(option) => console.log(option)}
      >
        Click Here
      </DropdownButton>
      <DropdownButton
        size="compact"
        type="secondary"
        items={['Item 1', 'Item 2']}
        onButtonClick={() => console.log('click')}
        onOptionSelect={(option) => console.log(option)}
      >
        Click Here
      </DropdownButton>
      <DropdownButton
        size="compact"
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
    <Stack height={150}>
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
      <DropdownButton
        size="compact"
        items={['Item 1', 'Item 2']}
        onOptionSelect={(option) => console.log(option)}
      />
      <DropdownButton
        size="compact"
        type="secondary"
        items={['Item 1', 'Item 2']}
        onOptionSelect={(option) => console.log(option)}
      />
      <DropdownButton
        size="compact"
        type="tertiary"
        items={['Item 1', 'Item 2']}
        onOptionSelect={(option) => console.log(option)}
      />
    </Stack>
  ),

  name: 'IconButton with Dropdown',
};
