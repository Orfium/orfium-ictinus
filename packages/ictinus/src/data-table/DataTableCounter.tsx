import { Box, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';
import { useDataTableContext } from './DataTableContext';

export type DataTableCounterProps = BoxProps<
  'div',
  {
    count?: number;
    singular?: string;
    plural?: string;
  }
>;

export function DataTableCounter({
  count: countProp,
  singular = 'item',
  plural = 'items',
  ...props
}: DataTableCounterProps) {
  const { table } = useDataTableContext();

  const selectedCount = table.getSelectedRowModel().rows.length;
  const totalCount = countProp ?? table.getRowCount();
  const hasSelection = selectedCount > 0;

  const count = hasSelection ? selectedCount : totalCount;
  const label = count === 1 ? singular : plural;

  return (
    <Box display="flex" alignItems="center" gap="sm" {...props}>
      <Text typography="label02" color="active">
        {count.toLocaleString()}
      </Text>
      <Text typography="label02">{hasSelection ? `${label} selected` : label}</Text>
    </Box>
  );
}
