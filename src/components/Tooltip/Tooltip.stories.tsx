import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import Tooltip from './Tooltip';
import Stack from '../storyUtils/Stack';
import { hoverOnTooltips } from './utils';
import { FIGMA_URL, Function } from '../../utils/common';
import Button from '../Button';
import TooltipShowcase from '../storyUtils/TooltipShowcase';

export default {
  title: 'Updated Components/Tooltip',
  component: Tooltip,
  parameters: {
    design: [
      {
        type: 'figma',
        url: `${FIGMA_URL}?node-id=10283%3A104370`,
      },
    ],
  },
};

export const TextTooltip = {
  render: () => (
    <>
      <Stack>
        <Function>
          {() => {
            return (
              <div style={{ padding: '16px' }}>
                <Tooltip content={'This is a Tooltip'} placement={'right'}>
                  <Button>Hover here</Button>
                </Tooltip>
              </div>
            );
          }}
        </Function>
      </Stack>
      <Stack isInverted>
        <Function>
          {() => {
            return (
              <div style={{ padding: '16px' }}>
                <Tooltip content={'This is a Tooltip'} placement={'right'} isInverted>
                  <Button type="inverted">Hover here</Button>
                </Tooltip>
              </div>
            );
          }}
        </Function>
      </Stack>
    </>
  ),
  parameters: {
    docs: {
      story: { autoplay: true, play: hoverOnTooltips },
    },
  },
  name: 'Text Tooltip',
};

export const InteractiveTooltip = {
  render: () => (
    <>
      <Stack>
        <TooltipShowcase />
      </Stack>
      <Stack isInverted>
        <TooltipShowcase isInverted />
      </Stack>
    </>
  ),
  parameters: {
    docs: {
      story: { autoplay: true, play: hoverOnTooltips },
    },
  },
  name: 'Interactive Tooltip',
};

export const TooltipPlacement = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          return (
            <div
              style={{
                padding: '48px 72px',
                width: '600px',
                gap: '32px',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Tooltip content={'This is a Tooltip'} placement={'left'}>
                <Button>Left Tooltip</Button>
              </Tooltip>
              <Tooltip content={'This is a Tooltip'} placement={'top'}>
                <Button>Top Tooltip</Button>
              </Tooltip>
              <Tooltip content={'This is a Tooltip'} placement={'bottom'}>
                <Button>Bottom Tooltip</Button>
              </Tooltip>
              <Tooltip content={'This is a Tooltip'} placement={'right'}>
                <Button>Right Tooltip</Button>
              </Tooltip>
            </div>
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    docs: {
      story: { autoplay: true, play: hoverOnTooltips },
    },
  },
  name: 'Tooltip placement',
};

export const Playground = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          return (
            <div
              style={{
                padding: '16px',
                width: '600px',
                height: '200px',
                display: 'flex',
                gap: '128px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Tooltip
                content={text('Tooltip Text', 'This is a Tooltip')}
                placement={select('placement', ['top', 'right', 'bottom', 'left'], 'right')}
                isInverted={boolean('isInverted', false)}
                delayIn={number('delayIn', 100)}
                delayOut={number('delayOut', 100)}
              >
                <Button>Text</Button>
              </Tooltip>
              <TooltipShowcase
                buttonText={'Interactive'}
                isInverted={boolean('isInverted', false)}
                delayIn={number('delayIn', 100)}
                delayOut={number('delayOut', 100)}
                placement={select('placement', ['top', 'right', 'bottom', 'left'], 'right')}
              />
            </div>
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    docs: {
      story: { autoplay: true, play: hoverOnTooltips },
    },
  },
  name: 'Playground',
};
