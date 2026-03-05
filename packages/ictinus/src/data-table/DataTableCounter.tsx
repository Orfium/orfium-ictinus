import { Skeleton } from '../skeleton';
import { Box, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';
import { useDataTableContext } from './DataTableContext';

export type DataTableCounterProps = BoxProps<
  'div',
  {
    count?: number;
    loading?: boolean;
    singular?: string;
    plural?: string;
  }
>;

export function DataTableCounter({
  count: countProp,
  loading = false,
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
      {loading ? (
        <Skeleton w="20" />
      ) : (
        <>
          <Text typography="label02" color="active">
            {count.toLocaleString()}
          </Text>
          <Text typography="label02">{hasSelection ? `${label} selected` : label}</Text>
        </>
      )}
    </Box>
  );
}
