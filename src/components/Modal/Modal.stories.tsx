import { screen, userEvent, within } from '@storybook/testing-library';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';
import { currentDay } from 'components/DatePicker/utils';
import Filter, { FilterOption } from 'components/Filter';
import Select from 'components/Select';
import { toast, ToastContainer } from 'components/Toast';
import { useState } from 'react';
import { FIGMA_URL } from 'utils/common';
import ModalShowcase from '../storyUtils/ModalShowcase';
import PresentComponent from '../storyUtils/PresentComponent';
import Stack from '../storyUtils/Stack';
import ModalComponent from './Modal';

export default {
  title: 'Original Components/Modal',
  component: ModalComponent,
  parameters: {
    chromatic: { delay: 400 },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Open Modal' });
    await userEvent.click(button);
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Open Modal' });
    await userEvent.click(button);
  },
};

export const WithOverlays = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>(undefined);
    const [selectedOption, setSelectedOption] = useState<FilterOption>(undefined);

    const handleClear = () => setSelectedFilter(undefined);

    const [date, setDate] = useState({ from: currentDay.toDate(), to: undefined });

    return (
      <Stack>
        <PresentComponent name="" width={768}>
          <ModalShowcase>
            <Stack isVertical>
              <Select
                label="Select"
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
                selectedOption={selectedOption}
                onChange={setSelectedOption}
              />
              <Filter
                hasWrapperWidth
                selectedFilter={selectedFilter}
                onChange={setSelectedFilter}
                onClear={handleClear}
                defaultValue={{ label: 'All', value: 'all' }}
                label="Filter"
                items={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
              />
              <DatePicker
                filterConfig={{ label: 'My date', filterType: 'added' }}
                onClear={() => setDate({ from: undefined, to: undefined })}
                value={date}
                onChange={setDate}
              />
            </Stack>
          </ModalShowcase>
        </PresentComponent>
      </Stack>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Open Modal' });
    await userEvent.click(button);

    const filter = await canvas.findByTestId('ictinus_filter_filter_button');
    await userEvent.click(filter);
  },
};

export const WithToast = {
  render: (args) => {
    const { message } = args;
    return (
      <Stack>
        <PresentComponent name="" width={768}>
          <ModalShowcase>
            <Stack>
              <div>{message}</div>
              <Button
                onClick={() =>
                  toast('Toast messages should be clear and short.', {
                    status: 'success',
                  })
                }
              >
                Show toast
              </Button>
            </Stack>
          </ModalShowcase>
        </PresentComponent>
        <ToastContainer />
      </Stack>
    );
  },
  parameters: {
    controls: { include: ['message'] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Open Modal' });
    await userEvent.click(button);

    const toastButton = await canvas.findByRole('button', { name: 'Show toast' });
    await userEvent.click(toastButton);

    const dismissToastButton = await screen.findByRole('button', { name: 'Dismiss toast' });
    await userEvent.click(dismissToastButton);
  },
};
