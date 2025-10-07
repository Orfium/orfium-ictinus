import { Button, IconButton, Switch } from '@orfium/ictinus';
import { Box, Text, Tooltip, TooltipContent, TooltipTrigger } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Vanilla/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flex="1">
      <Tooltip>
        <TooltipTrigger>
          <Button type="secondary">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>It was a dark and stormy night</TooltipContent>
      </Tooltip>
    </Box>
  ),
};

export const Inverse: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flex="1">
      <Tooltip>
        <TooltipTrigger>
          <IconButton iconName="informational" type="secondary" aria-label="More info" />
        </TooltipTrigger>
        <TooltipContent inverse>It was a dark and stormy night</TooltipContent>
      </Tooltip>
    </Box>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="lg"
        flex="1"
      >
        <Tooltip onOpenChange={setOpen} isOpen={open}>
          <TooltipTrigger>
            <Button type="secondary">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>This is a controlled tooltip</TooltipContent>
        </Tooltip>

        <Text typography="body02">Open: {open ? 'true' : 'false'}</Text>
      </Box>
    );
  },
};

export const Placement: Story = {
  render: () => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      gap="3xl"
    >
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <IconButton iconName="informational" type="secondary" aria-label="More info" />
        </TooltipTrigger>
        <TooltipContent placement="top">It was a dark and stormy night</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <IconButton iconName="informational" type="secondary" aria-label="More info" />
        </TooltipTrigger>
        <TooltipContent placement="right">It was a dark and stormy night</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <IconButton iconName="informational" type="secondary" aria-label="More info" />
        </TooltipTrigger>
        <TooltipContent placement="left">It was a dark and stormy night</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <IconButton iconName="informational" type="secondary" aria-label="More info" />
        </TooltipTrigger>
        <TooltipContent placement="bottom">It was a dark and stormy night</TooltipContent>
      </Tooltip>
    </Box>
  ),
};

export const Auto: Story = {
  render: () => {
    const [auto, setAuto] = useState(false);

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="lg"
        flex="1"
      >
        <Box display="flex" gap="2xl">
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            gap="lg"
            style={{ width: '180px' }}
          >
            <Tooltip auto={auto}>
              <TooltipTrigger>
                <Text role="button" lineClamp="1">
                  It was a dark and stormy night
                </Text>
              </TooltipTrigger>
              <TooltipContent>It was a dark and stormy night</TooltipContent>
            </Tooltip>
            <Tooltip auto={auto}>
              <TooltipTrigger>
                <Text role="button">Sample non-clipped</Text>
              </TooltipTrigger>
              <TooltipContent>Sample non-clipped</TooltipContent>
            </Tooltip>
          </Box>
          <Switch isSelected={auto} onChange={setAuto}>
            Auto
          </Switch>
        </Box>
      </Box>
    );
  },
};

export const Delay: Story = {
  render: () => (
    <Box display="flex" alignItems="center" justifyContent="center" flex="1" gap="lg">
      <Tooltip delay={0} closeDelay={0}>
        <TooltipTrigger>
          <Button type="secondary">Delay duration 0ms</Button>
        </TooltipTrigger>
        <TooltipContent>It was a dark and stormy night</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button type="secondary">Delay duration 500ms</Button>
        </TooltipTrigger>
        <TooltipContent>It was a dark and stormy night</TooltipContent>
      </Tooltip>
    </Box>
  ),
};
