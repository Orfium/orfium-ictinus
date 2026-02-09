import { Box, type BoxProps } from '../vanilla/Box';
import { useDataTableContext } from './DataTableContext';

export type DataTableBulkActionsProps = BoxProps<'div'>;

export function DataTableBulkActions({ children, ...props }: DataTableBulkActionsProps) {
  const { table } = useDataTableContext();
  const hasSelection = table.getSelectedRowModel().rows.length > 0;

  if (!hasSelection) return null;

  return (
    <Box display="flex" alignItems="center" gap="sm" {...props}>
      {children}
    </Box>
  );
}
