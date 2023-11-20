import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import PresentComponent from '../storyUtils/PresentComponent';
import ModalShowcase from '../storyUtils/ModalShowcase';
import Stack from '../storyUtils/Stack';
import ModalComponent from './Modal';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Modal',
  component: ModalComponent,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Modal',
        url: `${FIGMA_URL}?node-id=7809%3A132081`,
      },
    ],
  },
};

export const Modal = {
  render: () => (
    <Stack>
      <PresentComponent name="" width={768}>
        <ModalShowcase>
          <div>
            {text(
              'message',
              'This is just a text inside the modal. This text serves really no purpose but for some reason here you are, continuing reading it. You are just like Alice in Wonderland, trying to see where this will lead you.'
            )}
          </div>
        </ModalShowcase>
      </PresentComponent>
    </Stack>
  ),

  name: 'Modal',

  parameters: {
    decorators: [withKnobs],
  },
};

export const ModalContent = {
  render: () => (
    <Stack>
      <PresentComponent name="" width={768}>
        <ModalShowcase
          contentProps={{
            label: text('label', 'Label'),
            heading: text('heading', 'Heading'),

            message: text(
              'message',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique eros at fringilla fringilla. Donec volutpat lobortis euismod'
            ),

            primaryCTALabel: text('primaryCTALabel', 'Do Action'),
            primaryCTA: () => console.log('primaryCTA'),
            secondaryCTALabel: text('secondaryCTALabel', 'Secondary Action'),
            secondaryCTA: () => console.log('secondaryCTA'),
          }}
        />
      </PresentComponent>
    </Stack>
  ),

  name: 'Modal Content',

  parameters: {
    decorators: [withKnobs],
  },
};
