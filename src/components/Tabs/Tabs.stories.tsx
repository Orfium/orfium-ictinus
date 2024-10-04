import React from 'react';
import Tabs, { Tab } from '~/components/Tabs';
import { TabKey } from './types';
import { getItems } from './constants';

export default {
  title: 'Updated Components/Tabs/Tabs',
  component: Tab,

  argTypes: {
    orientation: { type: 'radio', options: ['horizontal', 'vertical'] },
    hasCounter: { type: 'boolean' },
  },
};

export const SimpleTabs = {
  render: () => {
    const [timePeriod, setTimePeriod] = React.useState<TabKey>('geller');

    return (
      <Tabs selectedKey={timePeriod} onSelectionChange={setTimePeriod} items={getItems(false)} />
    );
  },

  name: 'Simple Tabs',

  parameters: {
    controls: { disable: true },
  },
};

export const TabsOrientation = {
  render: (args) => {
    const { orientation } = args;

    const [timePeriod, setTimePeriod] = React.useState<TabKey>('geller');

    return (
      <Tabs
        orientation={orientation}
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
        items={getItems(false)}
      />
    );
  },

  name: 'Tabs Orientation',

  parameters: {
    controls: { include: ['orientation'] },
  },
};

export const TabsWithCounter = {
  render: () => {
    const [timePeriod, setTimePeriod] = React.useState<TabKey>('geller');

    return (
      <Tabs selectedKey={timePeriod} onSelectionChange={setTimePeriod} items={getItems(true)} />
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

    const [timePeriod, setTimePeriod] = React.useState<TabKey>('geller');

    return (
      <Tabs
        orientation={orientation}
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
        items={getItems(hasCounter)}
      />
    );
  },

  name: 'Playground',

  parameters: {
    controls: { include: ['orientation', 'hasCounter'] },
  },
};
