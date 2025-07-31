import { Meta, StoryObj } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Box from '~/components/Box';
import { TabKey, TabPanel } from '~/components/Tabs';
import TabStepper from '~/components/TabStepper';
import { getContent } from './constants';
import { TabStepItem } from './types';

type Status = 'pending' | 'warning' | 'done';

type StoryArgs = ComponentProps<typeof TabStepper> & {
  status: Status;
  status1: Status;
  status2: Status;
  status3: Status;
  hasSubtitle: boolean;
  isDisabled: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Updated Components/Tabs/TabStepper',
  component: TabStepper,
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    iconPosition: { control: 'radio', options: ['adjacent', 'end'] },
    status: { control: 'select', options: ['pending', 'warning', 'done'] },
    status1: { name: 'Step 1 Status', control: 'select', options: ['pending', 'warning', 'done'] },
    status2: { name: 'Step 2 Status', control: 'select', options: ['pending', 'warning', 'done'] },
    status3: { name: 'Step 3 Status', control: 'select', options: ['pending', 'warning', 'done'] },
    hasSubtitle: { name: 'has Subtitle', control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    orientation: 'horizontal',
    iconPosition: 'adjacent',
    status: 'pending',
    status1: 'pending',
    status2: 'pending',
    status3: 'pending',
    hasSubtitle: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const TabStepperTypes: Story = {
  render: () => {
    const [key1, setKey1] = React.useState<TabKey>('step_1');
    const [key2, setKey2] = React.useState<TabKey>('step_1');

    const getItems = (hasSubtitle: boolean): TabStepItem[] => {
      return [
        {
          id: 'step_1',
          title: 'Step 1',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 1' }),
        },
        {
          id: 'step_2',
          title: 'Step 2',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 2' }),
        },
        {
          id: 'step_3',
          title: 'Step 3',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 3' }),
        },
      ];
    };

    return (
      <div css={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <TabStepper selectedKey={key1} onSelectionChange={setKey1} items={getItems(false)} />
        <TabStepper selectedKey={key2} onSelectionChange={setKey2} items={getItems(true)} />
      </div>
    );
  },
  name: 'TabStepper types',
  parameters: {
    controls: { disable: true },
  },
};

export const TabStepperWithContent: Story = {
  render: () => {
    const [key, setKey] = React.useState<TabKey>('step_1');

    const items: TabStepItem[] = [
      {
        id: 'step_1',
        title: 'Step 1',
        subtitle: 'This is subtitle for step 1',
      },
      {
        id: 'step_2',
        title: 'Step 2',
        subtitle: 'This is subtitle for step 2',
      },
      {
        id: 'step_3',
        title: 'Step 3',
        subtitle: 'This is subtitle for step 3',
      },
    ];

    return (
      <TabStepper selectedKey={key} onSelectionChange={setKey} items={items}>
        {items.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {getContent(item.id, 'horizontal')}
          </TabPanel>
        ))}
      </TabStepper>
    );
  },
  name: 'TabStepper with content',
  parameters: {
    controls: { disable: true },
  },
};

export const TabStepperOrientation: Story = {
  render: (args) => {
    const { orientation } = args;

    const [key, setKey] = React.useState<TabKey>('step_1');

    const items: TabStepItem[] = [
      {
        id: 'step_1',
        title: 'Step 1',
        subtitle: 'This is subtitle for step 1',
      },
      {
        id: 'step_2',
        title: 'Step 2',
        subtitle: 'This is subtitle for step 2',
      },
      {
        id: 'step_3',
        title: 'Step 3',
        subtitle: 'This is subtitle for step 3',
      },
    ];

    return (
      <TabStepper
        orientation={orientation}
        selectedKey={key}
        onSelectionChange={setKey}
        items={items}
      >
        {items.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {getContent(item.id, orientation)}
          </TabPanel>
        ))}
      </TabStepper>
    );
  },
  name: 'Orientation',
  parameters: {
    controls: { include: ['orientation'] },
  },
};

export const TabStepperDisabled: Story = {
  render: () => {
    const [key, setKey] = React.useState<TabKey>('tab-1');

    const items: TabStepItem[] = [
      {
        id: 'tab-1',
        title: 'Tab label',
        subtitle: 'Secondary information line',
        status: 'done',
      },
      {
        id: 'tab-2',
        title: 'Tab label',
        subtitle: 'Secondary information line',
        isDisabled: true,
      },
      {
        id: 'tab-3',
        title: 'Tab label',
        subtitle: 'Secondary information line',
      },
    ];

    return (
      <Box display="flex" flexDirection="column" gap="8" backgroundColor="default">
        <TabStepper
          orientation="horizontal"
          selectedKey={key}
          onSelectionChange={setKey}
          items={items}
        />
        <TabStepper
          orientation="vertical"
          iconPosition="end"
          selectedKey={key}
          onSelectionChange={setKey}
          items={items}
        />
      </Box>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

export const TabStepperStatuses: Story = {
  render: (args) => {
    const { status } = args;

    const [key, setKey] = React.useState<TabKey>('step_1');

    const items: TabStepItem[] = [
      {
        id: 'step_1',
        title: 'Step 1',
        subtitle: 'This is subtitle for step 1',
        status,
      },
      {
        id: 'step_2',
        title: 'Step 2',
        subtitle: 'This is subtitle for step 2',
        status,
      },
      {
        id: 'step_3',
        title: 'Step 3',
        subtitle: 'This is subtitle for step 3',
        status,
      },
    ];

    return (
      <TabStepper selectedKey={key} onSelectionChange={setKey} items={items}>
        {items.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {getContent(item.id, 'horizontal')}
          </TabPanel>
        ))}
      </TabStepper>
    );
  },
  name: 'TabStepper statuses',
  parameters: {
    controls: { include: ['status'] },
  },
};

export const Playground: Story = {
  render: (args) => {
    const { orientation, iconPosition, status1, status2, status3, hasSubtitle, isDisabled } = args;

    const [key, setKey] = React.useState<TabKey>('step_1');

    const getItems = (hasSubtitle: boolean): TabStepItem[] => {
      return [
        {
          id: 'step_1',
          title: 'Step 1',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 1' }),
          status: status1,
          isDisabled: isDisabled,
        },
        {
          id: 'step_2',
          title: 'Step 2',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 2' }),
          status: status2,
        },
        {
          id: 'step_3',
          title: 'Step 3',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 3' }),
          status: status3,
        },
      ];
    };

    return (
      <TabStepper
        orientation={orientation}
        iconPosition={iconPosition}
        selectedKey={key}
        onSelectionChange={setKey}
        items={getItems(hasSubtitle)}
      >
        <div css={{ width: '488px', height: '220px' }}>
          {getItems(hasSubtitle).map((item) => (
            <TabPanel key={item.id} id={item.id}>
              {getContent(item.id, orientation)}
            </TabPanel>
          ))}
        </div>
      </TabStepper>
    );
  },
  name: 'Playground',
  parameters: {
    controls: {
      include: [
        'orientation',
        'iconPosition',
        'Step 1 Status',
        'Step 2 Status',
        'Step 3 Status',
        'has Subtitle',
        'isDisabled',
      ],
    },
  },
};
