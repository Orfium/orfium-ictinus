import { Button, Tooltip } from '@orfium/ictinus';
import { Box } from '@orfium/ictinus/vanilla';
import { FIGMA_URL } from 'utils/common';
import Stack from '../storyUtils/Stack';
import TooltipShowcase from '../storyUtils/TooltipShowcase';
import { hoverOnTooltips } from './utils';

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
    placement: 'right',
  },

  argTypes: {
    content: { type: 'string' },
  },
};

export const TextTooltip = {
  render: () => (
    <>
      <Stack>
        <div style={{ padding: '16px' }}>
          <Tooltip data-testid={'tooltip-button'} content={'This is a Tooltip'} placement={'right'}>
            <Button>Hover here</Button>
          </Tooltip>
        </div>
      </Stack>
      <Stack isInverted>
        <div style={{ padding: '16px' }}>
          <Tooltip
            data-testid={'tooltip-button'}
            content={'This is a Tooltip'}
            placement={'right'}
            isInverted
          >
            <Button>Hover here</Button>
          </Tooltip>
        </div>
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      h="full"
    >
      <Box display="flex" alignItems="center" gap="2xl">
        <Tooltip data-testid={'tooltip-button'} content={'This is a Tooltip'} placement={'left'}>
          <Button>Left Tooltip</Button>
        </Tooltip>
        <Tooltip data-testid={'tooltip-button'} content={'This is a Tooltip'} placement={'top'}>
          <Button>Top Tooltip</Button>
        </Tooltip>
        <Tooltip data-testid={'tooltip-button'} content={'This is a Tooltip'} placement={'bottom'}>
          <Button>Bottom Tooltip</Button>
        </Tooltip>
        <Tooltip data-testid={'tooltip-button'} content={'This is a Tooltip'} placement={'right'}>
          <Button>Right Tooltip</Button>
        </Tooltip>
      </Box>
    </Box>
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
