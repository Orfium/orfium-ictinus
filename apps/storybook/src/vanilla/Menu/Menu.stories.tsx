import { Button, Switch } from '@orfium/ictinus';
import {
  Box,
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuTrigger,
  Text,
  type Selection,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Menu> = {
  title: 'Vanilla/Menu',
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Selection>('all');

    return (
      <Box>
        <Menu>
          <MenuTrigger>
            <Button>Open</Button>
          </MenuTrigger>
          <MenuContent
            selectionMode="multiple"
            popover={{ placement: 'bottom left' }}
            style={{ minWidth: '280px' }}
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <MenuItem id="item-1">
              <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                <MenuLabel>
                  <Text
                    color={selected === 'all' || selected.has('item-1') ? 'active' : 'primary'}
                    typography={selected === 'all' || selected.has('item-1') ? 'label02' : 'body02'}
                  >
                    Item 1
                  </Text>
                </MenuLabel>
                <Switch isSelected={selected === 'all' || selected.has('item-1')} />
              </Box>
            </MenuItem>
            <MenuItem id="item-2">
              <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                <MenuLabel>
                  <Text
                    color={selected === 'all' || selected.has('item-2') ? 'active' : 'primary'}
                    typography={selected === 'all' || selected.has('item-2') ? 'label02' : 'body02'}
                  >
                    Item 2
                  </Text>
                </MenuLabel>
                <Switch isSelected={selected === 'all' || selected.has('item-2')} />
              </Box>
            </MenuItem>
            <MenuItem id="item-3">
              <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                <MenuLabel>
                  <Text
                    color={selected === 'all' || selected.has('item-3') ? 'active' : 'primary'}
                    typography={selected === 'all' || selected.has('item-3') ? 'label02' : 'body02'}
                  >
                    Item 3
                  </Text>
                </MenuLabel>
                <Switch isSelected={selected === 'all' || selected.has('item-3')} />
              </Box>
            </MenuItem>
          </MenuContent>
        </Menu>
      </Box>
    );
  },
};
