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
    chromatic: { delay: 400 },
  },

  args: {
    content: 'This is a Tooltip',
  },

  argTypes: {
    content: { type: 'string' },
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
                  <Button>Hover here</Button>
                </Tooltip>
              </div>
            );
          }}
        </Function>
      </Stack>
    </>
  ),
  autoplay: true,
  play: hoverOnTooltips,
  name: 'Text Tooltip',

  parameters: {
    controls: { disable: true },
  },
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
  autoplay: true,
  play: hoverOnTooltips,
  name: 'Interactive Tooltip',

  parameters: {
    controls: { disable: true },
  },
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
  autoplay: true,
  play: hoverOnTooltips,
  name: 'Tooltip placement',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { content, placement, isInverted, delayIn, delayOut } = args;
    return (
      <Stack isInverted={isInverted} height={500}>
        <Function>
          {() => {
            return (
              <div
                style={{
                  padding: '16px',
                  display: 'flex',
                  gap: '128px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Tooltip
                  content={content}
                  placement={placement}
                  isInverted={isInverted}
                  delayIn={delayIn}
                  delayOut={delayOut}
                >
                  <Button>Text</Button>
                </Tooltip>
                <TooltipShowcase
                  buttonText={'Interactive'}
                  placement={placement}
                  isInverted={isInverted}
                  delayIn={delayIn}
                  delayOut={delayOut}
                />
              </div>
            );
          }}
        </Function>
      </Stack>
    );
  },
  autoplay: true,
  play: hoverOnTooltips,
  name: 'Playground',

  parameters: {
    controls: { include: ['content', 'placement', 'isInverted', 'delayIn', 'delayOut'] },
  },
};
