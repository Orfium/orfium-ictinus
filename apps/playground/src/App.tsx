import { Button, IconButton, Link } from '@orfium/ictinus';
import {
  Box,
  DataTable,
  DataTableBody,
  DataTableBulkActions,
  DataTableCheckbox,
  DataTableCounter,
  DataTableEditColumns,
  DataTableHeader,
  Icon,
  Skeleton,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@orfium/ictinus/vanilla';
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnPinningState,
  type RowSelectionState,
  type VisibilityState,
} from '@tanstack/react-table';

import { useState } from 'react';
import * as styles from './App.css';

function App() {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['select', 'firstName'],
  });
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableMultiSort: true,
    enableRowSelection: (row) => !row.original.locked,
    state: {
      columnPinning,
      columnVisibility,
      rowSelection,
    },
    onColumnPinningChange: setColumnPinning,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    meta: {
      getCellProps: (row) =>
        row.original.locked
          ? {
              bg: 'alt',
              pointerEvents: 'none',
              'data-locked': '',
            }
          : {},
    },
  });

  return (
    <>
      <Box display="flex">
        <Skeleton w="22" h="8" />
        <Text typography="headline02" fontFamily="outfit" fontWeight="semibold" color="active">
          Earnings & Reports
        </Text>
      </Box>
      <Box display="flex">
        <Box display="flex" flexShrink="0" bg="alt" style={{ width: '308px' }}></Box>
        <Box p="3xl" w="full" style={{ containerType: 'inline-size' }}>
          <Box p="2xl" boxShadow="2" display="flex" gap="lg" w="full" className={styles.container}>
            <Box display="grid" gap="lg" flex="1" w="full" className={styles.grid}>
              <Box p="lg" border="1" rounded="2">
                <Text typography="title01">Include other works</Text>
              </Box>
              <Box p="lg" border="1" rounded="2">
                <Text typography="title01">-</Text>
              </Box>
              <Box p="lg" border="1" rounded="2">
                <Text typography="title01">25.08.2022 15:40 PM</Text>
              </Box>
              <Box p="lg" border="1" rounded="2">
                <Text typography="title01">Include other works</Text>
              </Box>
              <Box p="lg" border="1" rounded="2">
                <Text typography="title01">Include other works</Text>
              </Box>
              <Box p="lg" border="1" rounded="2">
                <Text typography="title01">25.08.2022 15:40 PM</Text>
              </Box>
            </Box>
            <Box
              borderColor="decorative.default"
              display="flex"
              flexDirection="column"
              maxW="full"
              className={styles.sidebar}
            >
              <Text typography="headline05" mb="md">
                Resources
              </Text>
              <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                <Box display="inline-flex" alignItems="center" gap="sm">
                  <Icon name="file" color="indicator.brand" />
                  <Link>
                    <Text wordBreak="break-all" lineClamp="1">
                      tmp4ftmtjcn_modified_relinquish_automation_tests.V22
                    </Text>
                  </Link>
                </Box>
                <IconButton type="tertiary" iconName="download" iconColor="secondary" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <DataTable table={table}>
        <DataTableHeader>
          <Box display="flex" alignItems="center" gap="lg">
            <DataTableCounter singular="Friend" plural="Friends" />
            <DataTableBulkActions>
              <Button
                size="compact"
                onClick={() => {
                  const selectedData = table.getSelectedRowModel().rows.map((row) => row.original);
                  alert(JSON.stringify(selectedData, null, 2));
                }}
              >
                Bulk
              </Button>
              <Button size="compact">Bulk 2</Button>
            </DataTableBulkActions>
          </Box>
          <DataTableEditColumns />
        </DataTableHeader>
        <DataTableBody roundedT="0" />
      </DataTable>
    </>
  );
}

export default App;

export const data = [
  {
    firstName: 'Rachel',
    lastName: 'Green',
    age: 30,
    job: 'Fashion Executive',
  },
  {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 32,
    job: 'Paleontologist',
    locked: true,
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
    age: 31,
    job: 'Chef',
    address: {
      street: 'Park Ave., New York, NY',
    },
  },
  {
    firstName: 'Chandler',
    lastName: 'Bing',
    age: 30,
    job: 'Advertising Copywriter',
  },
  {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    age: 29,
    job: 'Actor',
    address: {
      street: 'West Village, New York, NY',
    },
  },
  {
    firstName: 'Phoebe',
    lastName: 'Buffay',
    age: 30,
    job: 'Masseuse & Musician',
  },
  {
    firstName: 'Janice',
    lastName: 'Litman',
    age: 32,
    job: 'Real Estate',
  },
  {
    firstName: 'Mike',
    lastName: 'Hannigan',
    age: 31,
    job: 'Pianist',
    locked: true,
  },
  {
    firstName: 'Carol',
    lastName: 'Willick',
    age: 33,
    job: 'Marketing',
    address: {
      street: 'Long Island, NY',
    },
  },
  {
    firstName: 'Gunther',
    lastName: 'Central Perk',
    age: 35,
    job: 'Coffee House Manager',
  },
];

const columnHelper = createColumnHelper<{
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  locked?: boolean;
  address?: {
    street?: string;
  };
}>();

export const columns = [
  columnHelper.display({
    cell: ({ row }) => <DataTableCheckbox isDisabled={row.original.locked} />,
    header: () => <DataTableCheckbox />,
    id: 'select',
    size: 48,
    enableResizing: false,
    meta: {
      align: 'center',
    },
  }),
  columnHelper.accessor('firstName', {
    cell: ({ getValue }) => <Text lineClamp="1">{getValue()}</Text>,
    header: 'First Name',
    enableHiding: false,
    meta: {
      label: 'First Name',
      tooltip: 'The quick brown fox',
    },
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
    meta: { label: 'Last Name' },
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    meta: { label: 'Age', align: 'flex-end', tooltip: 'The quick brown fox' },
    enableHiding: false,
  }),
  columnHelper.accessor('job', {
    header: 'Job',
    meta: { label: 'Job' },
  }),
  columnHelper.accessor('address', {
    cell: ({ getValue }) => (
      <Tooltip auto>
        <TooltipTrigger>
          <Text lineClamp="1">{getValue()?.street ?? ''}</Text>
        </TooltipTrigger>
        <TooltipContent>{getValue()?.street ?? ''}</TooltipContent>
      </Tooltip>
    ),
    header: 'Address',
    enableSorting: false,
    enablePinning: false,
    enableResizing: false,
    meta: { tooltip: 'The quick brown fox' },
  }),
  columnHelper.display({
    cell: ({ row }) =>
      row.original.locked ? (
        <Icon name="lock" size="sm" color="secondary" />
      ) : (
        <IconButton
          onClick={(evt) => evt?.stopPropagation()}
          iconName="chevronRight"
          size="compact"
          type="tertiary"
        />
      ),
    id: 'action',
    size: 48,
    enableResizing: false,
    meta: {
      align: 'center',
    },
  }),
];
