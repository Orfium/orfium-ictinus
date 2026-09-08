import {
  Badge,
  Box,
  InformationalIcon,
  TextField,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof TextField> = {
  title: 'Vanilla/TextField',
  component: TextField,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" style={{ maxWidth: '24rem' }}>
      <TextField>
        <TextField.Label>Email</TextField.Label>
        <TextField.Input type="email" placeholder="name@example.com" />
        <TextField.Description>We’ll only use this for product updates.</TextField.Description>
      </TextField>

      <TextField isInvalid>
        <TextField.Label>Password</TextField.Label>
        <TextField.Input type="password" placeholder="Enter password" />
        <TextField.Error>Please enter a valid password.</TextField.Error>
      </TextField>

      <TextField>
        <TextField.Label>Search</TextField.Label>
        <TextField.InputWrapper>
          <TextField.FloatingLabel>Search</TextField.FloatingLabel>
          <TextField.Input type="search" placeholder="Search products" />
        </TextField.InputWrapper>
      </TextField>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" style={{ maxWidth: '24rem' }}>
      <TextField>
        <TextField.Label>Normal</TextField.Label>
        <TextField.Input variant="normal" placeholder="Normal size" />
      </TextField>

      <TextField>
        <TextField.Label>Compact</TextField.Label>
        <TextField.Input variant="compact" placeholder="Compact size" />
      </TextField>

      <TextField isInvalid>
        <TextField.Label>Invalid</TextField.Label>
        <TextField.Input variant="normal" placeholder="Invalid value" />
        <TextField.Error>This value is invalid.</TextField.Error>
      </TextField>

      <TextField isDisabled>
        <TextField.Label>Disabled</TextField.Label>
        <TextField.Input variant="normal" placeholder="Disabled field" />
        <TextField.Description>This field is disabled.</TextField.Description>
      </TextField>
    </Box>
  ),
};

export const Addons: Story = {
  render: () => {
    const [amount, setAmount] = useState('');

    return (
      <Box display="flex" flexDirection="column" gap="2xl" style={{ maxWidth: '24rem' }}>
        <TextField>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <TextField.Label>Workspace name</TextField.Label>
            <Badge size="small" colorScheme="blue">
              Recommended
            </Badge>
          </Box>
          <TextField.Input placeholder="Acme workspace" />
          <TextField.Description>Choose a name your team will recognize.</TextField.Description>
        </TextField>

        <TextField>
          <TextField.Label>Website URL</TextField.Label>
          <TextField.Group>
            <TextField.Addon align="inline-start">https://</TextField.Addon>
            <TextField.Input type="url" placeholder="example.com" />
            <TextField.Addon align="inline-end">
              <Tooltip>
                <TooltipTrigger>
                  <InformationalIcon color="active" aria-label="Website URL information" />
                </TooltipTrigger>
                <TooltipContent>Use the domain without https://.</TooltipContent>
              </Tooltip>
            </TextField.Addon>
          </TextField.Group>
          <TextField.Description>Your public website address.</TextField.Description>
        </TextField>

        <TextField>
          <TextField.Label>Monthly budget</TextField.Label>
          <TextField.Group>
            <TextField.Addon align="inline-start">$</TextField.Addon>
            <TextField.Input
              type="text"
              inputMode="decimal"
              value={amount}
              placeholder="0.00"
              onChange={(event) =>
                setAmount(
                  event.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                )
              }
              onKeyDown={(event) => {
                if (
                  (event.key.length === 1 && !/[0-9.]/.test(event.key)) ||
                  (event.key === '.' && event.currentTarget.value.includes('.'))
                ) {
                  event.preventDefault();
                }
              }}
              px="2xs"
            />
            <TextField.Addon align="inline-end">USD</TextField.Addon>
          </TextField.Group>
          <TextField.Description>
            Only numbers and one decimal point are accepted.
          </TextField.Description>
        </TextField>
      </Box>
    );
  },
};

export const FloatingLabel: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" style={{ maxWidth: '24rem' }}>
      <TextField>
        <TextField.Label>Email</TextField.Label>
        <TextField.InputWrapper>
          <TextField.FloatingLabel>Email</TextField.FloatingLabel>
          <TextField.Input type="email" placeholder="name@example.com" />
        </TextField.InputWrapper>
        <TextField.Description>We’ll only use this for product updates.</TextField.Description>
      </TextField>

      <TextField isInvalid>
        <TextField.Label>Password</TextField.Label>
        <TextField.InputWrapper>
          <TextField.FloatingLabel>Password</TextField.FloatingLabel>
          <TextField.Input type="password" placeholder="Enter password" />
        </TextField.InputWrapper>
        <TextField.Error>Please enter a valid password.</TextField.Error>
      </TextField>

      <TextField isDisabled>
        <TextField.Label>Search</TextField.Label>
        <TextField.InputWrapper>
          <TextField.FloatingLabel>Search</TextField.FloatingLabel>
          <TextField.Input type="search" placeholder="Search products" />
        </TextField.InputWrapper>
      </TextField>

      <TextField>
        <TextField.Label>Email</TextField.Label>
        <TextField.InputWrapper>
          <TextField.FloatingLabel>Email</TextField.FloatingLabel>
          <TextField.Input type="email" placeholder="name@example.com" variant="compact" />
        </TextField.InputWrapper>
        <TextField.Description>We’ll only use this for product updates.</TextField.Description>
      </TextField>
    </Box>
  ),
};
