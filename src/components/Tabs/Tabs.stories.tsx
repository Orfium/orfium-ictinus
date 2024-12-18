import React from 'react';
import Tabs, { TabPanel } from '~/components/Tabs';
import { TabKey } from './types';
import { getContent, getItems } from './constants';

export default {
  title: 'Updated Components/Tabs/Tabs',
  component: Tabs,

  argTypes: {
    orientation: { type: 'radio', options: ['horizontal', 'vertical'] },
    hasCounter: { type: 'boolean' },
  },

  args: {
    orientation: 'horizontal',
  },
};

export const SimpleTabs = {
  render: () => {
    const [selectedFriend, setSelectedFriend] = React.useState<TabKey>('geller');

    return (
      <Tabs
        selectedKey={selectedFriend}
        onSelectionChange={setSelectedFriend}
        items={getItems(false)}
      />
    );
  },

  name: 'Simple Tabs',

  parameters: {
    controls: { disable: true },
  },
};

export const TabsWithContent = {
  render: () => {
    const [selectedFriend, setSelectedFriend] = React.useState<TabKey>('geller');

    const content = getContent('horizontal');

    return (
      <Tabs
        selectedKey={selectedFriend}
        onSelectionChange={setSelectedFriend}
        items={getItems(false)}
      >
        {Object.keys(content).map((friend) => (
          <TabPanel key={friend} tabId={friend}>
            {content[friend]}
          </TabPanel>
        ))}
      </Tabs>
    );
  },

  name: 'Tabs with content',

  parameters: {
    controls: { disable: true },
  },
};

export const TabsOrientation = {
  render: (args) => {
    const { orientation } = args;

    const [selectedFriend, setSelectedFriend] = React.useState<TabKey>('geller');

    const content = getContent(orientation);

    return (
      <Tabs
        orientation={orientation}
        selectedKey={selectedFriend}
        onSelectionChange={setSelectedFriend}
        items={getItems(false)}
      >
        {Object.keys(content).map((friend) => (
          <TabPanel key={friend} tabId={friend}>
            {content[friend]}
          </TabPanel>
        ))}
      </Tabs>
    );
  },

  name: 'Tabs Orientation',

  parameters: {
    controls: { include: ['orientation'] },
  },
};

export const TabsWithCounter = {
  render: () => {
    const [selectedFriend, setSelectedFriend] = React.useState<TabKey>('geller');

    const content = getContent('horizontal');

    return (
      <Tabs
        selectedKey={selectedFriend}
        onSelectionChange={setSelectedFriend}
        items={getItems(true)}
      >
        {Object.keys(content).map((friend) => (
          <TabPanel key={friend} tabId={friend}>
            {content[friend]}
          </TabPanel>
        ))}
      </Tabs>
    );
  },

  name: 'Tabs With Counter',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { orientation, hasCounter } = args;

    const [selectedFriend, setSelectedFriend] = React.useState<TabKey>('geller');

    const content = getContent(orientation);

    return (
      <Tabs
        orientation={orientation}
        selectedKey={selectedFriend}
        onSelectionChange={setSelectedFriend}
        items={getItems(hasCounter)}
      >
        {Object.keys(content).map((friend) => (
          <TabPanel key={friend} tabId={friend}>
            {content[friend]}
          </TabPanel>
        ))}
      </Tabs>
    );
  },

  name: 'Playground',

  parameters: {
    controls: { include: ['orientation', 'hasCounter'] },
  },
};
