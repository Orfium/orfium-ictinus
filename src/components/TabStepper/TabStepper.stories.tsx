import React from 'react';
import TabStepper from '~/components/TabStepper';
import { TabKey, TabPanel } from '../Tabs';
import { TabStepItem } from './types';
import { getContent } from './constants';

export default {
  title: 'Updated Components/Tabs/TabStepper',
  component: TabStepper,

  argTypes: {
    orientation: { type: 'radio', options: ['horizontal', 'vertical'] },
    status: { type: 'select', options: ['pending', 'warning', 'done'] },
    status1: { name: 'Step 1 Status', type: 'select', options: ['pending', 'warning', 'done'] },
    status2: { name: 'Step 2 Status', type: 'select', options: ['pending', 'warning', 'done'] },
    status3: { name: 'Step 3 Status', type: 'select', options: ['pending', 'warning', 'done'] },
    hasSubtitle: { name: 'has Subtitle', type: 'boolean' },
  },

  args: {
    orientation: 'horizontal',
    status: 'pending',
    status1: 'pending',
    status2: 'pending',
    status3: 'pending',
    hasSubtitle: false,
  },
};

export const TabStepperTypes = {
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

export const TabStepperWithContent = {
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

export const TabStepperOrientation = {
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

export const TabStepperStatuses = {
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

export const Playground = {
  render: (args) => {
    const { orientation, status1, status2, status3, hasSubtitle } = args;

    const [key, setKey] = React.useState<TabKey>('step_1');

    const getItems = (hasSubtitle: boolean): TabStepItem[] => {
      return [
        {
          id: 'step_1',
          title: 'Step 1',
          ...(hasSubtitle && { subtitle: 'This is subtitle for step 1' }),
          status: status1,
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
      include: ['orientation', 'Step 1 Status', 'Step 2 Status', 'Step 3 Status', 'has Subtitle'],
    },
  },
};
