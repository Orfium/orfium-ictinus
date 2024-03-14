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

  args: {
    message:
      'This is just a text inside the modal. This text serves really no purpose but for some reason here you are, continuing reading it. You are just like Alice in Wonderland, trying to see where this will lead you.',
    label: 'Label',
    heading: 'Heading',
    primaryCTALabel: 'Do Action',
    secondaryCTALabel: 'Secondary Action',
  },
};

export const Modal = {
  render: (args) => {
    const { message } = args;
    return (
      <Stack>
        <PresentComponent name="" width={768}>
          <ModalShowcase>
            <div>{message}</div>
          </ModalShowcase>
        </PresentComponent>
      </Stack>
    );
  },

  name: 'Modal',

  parameters: {
    controls: { include: ['message'] },
  },
};

export const ModalContent = {
  render: (args) => {
    const { label, heading, message, primaryCTALabel, secondaryCTALabel } = args;
    return (
      <Stack>
        <PresentComponent name="" width={768}>
          <ModalShowcase
            contentProps={{
              label,
              heading,
              message,
              primaryCTALabel,
              primaryCTA: () => console.log('primaryCTA'),
              secondaryCTALabel,
              secondaryCTA: () => console.log('secondaryCTA'),
            }}
          />
        </PresentComponent>
      </Stack>
    );
  },

  name: 'Modal Content',

  parameters: {
    controls: { include: ['label', 'heading', 'message', 'primaryCTALabel', 'secondaryCTALabel'] },
  },
};
