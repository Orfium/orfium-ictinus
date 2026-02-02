import type { VisibilityState } from '@tanstack/react-table';
import { useMemo } from 'react';

import Button from '../components/Button';
import { Switch } from '../components/Controls';
import { Box } from '../vanilla/Box';
import { Menu, MenuContent, MenuItem, MenuLabel, MenuTrigger } from '../vanilla/Menu';
import { Text } from '../vanilla/Text';
import { useDataTableContext } from './DataTableContext';

export function DataTableEditColumns() {
  const { table } = useDataTableContext();

  const allColumns = table.getAllColumns();

  const hidableColumns = allColumns.filter((column) => column.getCanHide());

  const selectedColumns = useMemo(() => {
    const selected = new Set<string>();
    for (const column of hidableColumns) {
      if (column.getIsVisible()) {
        selected.add(column.id);
      }
    }

    return selected;
  }, [hidableColumns]);

  const handleSelectionChange = (keys: 'all' | Set<string>) => {
    const newVisibility: VisibilityState = {};
    for (const column of hidableColumns) {
      if (keys === 'all') {
        newVisibility[column.id] = true;
      } else {
        newVisibility[column.id] = keys.has(column.id);
      }
    }
    table.setColumnVisibility(newVisibility);
  };

  return (
    <Menu>
      <MenuTrigger>
        <Button type="secondary" size="compact" iconLeftName="columnChooser">
          Edit columns
        </Button>
      </MenuTrigger>
      <MenuContent
        selectionMode="multiple"
        popover={{ placement: 'bottom right' }}
        style={{ minWidth: '280px' }}
        selectedKeys={selectedColumns}
        onSelectionChange={handleSelectionChange}
      >
        {allColumns.map((column) => {
          const canHide = column.getCanHide();
          const isSelected = canHide ? selectedColumns.has(column.id) : true;
          const label = (column.columnDef.meta as { label?: string })?.label;

          if (!label) {
            return null;
          }

          return (
            <MenuItem
              key={column.id}
              id={column.id}
              isDisabled={!canHide}
              style={!canHide ? { cursor: 'not-allowed' } : undefined}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                <MenuLabel>
                  <Text
                    color={!canHide ? 'inverted.secondary' : isSelected ? 'active' : 'primary'}
                    typography={isSelected ? 'label02' : 'body02'}
                  >
                    {label}
                  </Text>
                </MenuLabel>
                <Switch isSelected={isSelected} isDisabled={!canHide} />
              </Box>
            </MenuItem>
          );
        })}
      </MenuContent>
    </Menu>
  );
}
