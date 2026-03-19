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

const MENU_ITEMS_COUNT = 15;
const INITIAL_SELECTED_COUNT = 5;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Selection>(
      () => new Set(Array.from({ length: INITIAL_SELECTED_COUNT }, (_, i) => `item-${i + 1}`))
    );

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
            {Array.from({ length: MENU_ITEMS_COUNT }, (_, i) => {
              const id = `item-${i + 1}`;
              const isSelected =
                selected === 'all' || (selected instanceof Set && selected.has(id));
              return (
                <MenuItem key={id} id={id}>
                  <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                    <MenuLabel>
                      <Text
                        color={isSelected ? 'active' : 'primary'}
                        typography={isSelected ? 'label02' : 'body02'}
                      >
                        Item {i + 1}
                      </Text>
                    </MenuLabel>
                    <Switch isSelected={isSelected} />
                  </Box>
                </MenuItem>
              );
            })}
          </MenuContent>
        </Menu>
      </Box>
    );
  },
};
