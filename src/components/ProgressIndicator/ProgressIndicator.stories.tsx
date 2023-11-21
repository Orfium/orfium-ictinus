import { withKnobs } from '@storybook/addon-knobs';

import ProgressIndicator from './ProgressIndicator';
import Typography from '../Typography';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL, Function } from '../../utils/common';
import { useState, useEffect } from 'react';

export default {
  title: 'Updated Components/Progress Indicator',
  component: ProgressIndicator,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'ProgressIndicator',
        url: `${FIGMA_URL}?node-id=10283%3A104361`,
      },
    ],
  },
};

export const LinearProgressIndicatorWithPercentage = {
  render: () => (
    <Stack width={300}>
      <Function>
        {() => {
          const [value, setValue] = useState(0);
          useEffect(() => {
            const interval = setInterval(
              () =>
                setValue((value) => {
                  if (value + 20 > 100) return 0;
                  return value + 20;
                }),
              1000
            );
            return () => {
              clearInterval(interval);
            };
          }, []);
          return (
            <div
              style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <ProgressIndicator value={value} />
              <Typography variant="body03">Loading: {value}%</Typography>
            </div>
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'Linear ProgressIndicator with percentage',
};

export const LinearProgressIndicatorIndeterminate = {
  render: () => (
    <Stack width={300}>
      <ProgressIndicator />
    </Stack>
  ),
  name: 'Linear ProgressIndicator - indeterminate',
};

export const BlockProgressIndicator = {
  render: () => (
    <Stack isVertical>
      <ProgressIndicator isBlock />
    </Stack>
  ),
  name: 'Block ProgressIndicator',
};

export const CircularProgressIndicatorWithPercentage = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          const [value, setValue] = useState(0);
          useEffect(() => {
            const interval = setInterval(
              () =>
                setValue((value) => {
                  if (value + 20 > 100) return 0;
                  return value + 20;
                }),
              1000
            );
            return () => {
              clearInterval(interval);
            };
          }, []);
          return (
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              <ProgressIndicator type={'circular'} value={value} />
              <Typography variant="body03">Loading: {value}%</Typography>
            </div>
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'Circular ProgressIndicator with percentage',
};

export const CircularProgressIndicatorIndeterminate = {
  render: () => (
    <Stack>
      <ProgressIndicator type={'circular'} />
    </Stack>
  ),
  name: 'Circular ProgressIndicator - indeterminate',
};

export const CircularProgressIndicatorErrorStates = {
  render: () => (
    <>
      <Stack>
        <ProgressIndicator type={'circular'} value={60} status="error" />
      </Stack>
      <Stack width={300}>
        <ProgressIndicator value={60} status="error" />
      </Stack>
    </>
  ),
  name: 'Circular ProgressIndicator - Error states',
};

export const Playground = {
  render: () => (
    <>
      <Stack>
        <ProgressIndicator type={'circular'} value={60} status="error" />
      </Stack>
      <Stack width={300}>
        <ProgressIndicator value={60} status="error" />
      </Stack>
    </>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'Playground',
};
