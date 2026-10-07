import { Link } from '@orfium/ictinus';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ChevronRightIcon,
  DataTable,
  DataTableBody,
  DataTableBulkActions,
  DataTableCheckbox,
  DataTableCounter,
  DataTableEditColumns,
  DataTableHeader,
  DownloadIcon,
  FavoriteIcon,
  FileIcon,
  LockIcon,
  Nav,
  NavCount,
  NavItem,
  NavLink,
  SubNavItem,
  SubNavLink,
  SubNavList,
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

import { useState, type MouseEvent } from 'react';
import * as styles from './App.css';

function App() {
  const [activeId, setActiveId] = useState('bing-sub-1');

  const select = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveId(id);
  };

  const bingActive = activeId === 'bing' || activeId.startsWith('bing-sub-');

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
      <Box
        position="relative"
        px="lg"
        py="sm"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="default"
        boxShadow="1"
      >
        <Box display="flex" alignItems="center" gap="md">
          <Text typography="headline02" fontFamily="outfit" fontWeight="semibold" color="active">
            App
          </Text>
          <Badge colorScheme="purple">Badge</Badge>
        </Box>
        <Avatar colorScheme="orange" size="3" initials="G" />
      </Box>
      <Box display="flex">
        <Box py="lg" display="flex" flexShrink="0" bg="alt" style={{ width: '308px' }}>
          <Nav>
            <NavItem isActive={bingActive}>
              <NavLink href="#bing" onClick={select('bing-sub-1')}>
                <FavoriteIcon />
                Bing
                <NavCount>000</NavCount>
              </NavLink>
              <SubNavList>
                <SubNavItem isActive={activeId === 'bing-sub-1'}>
                  <SubNavLink onClick={select('bing-sub-1')}>
                    Sub-tab 1
                    <FavoriteIcon />
                  </SubNavLink>
                </SubNavItem>
                <SubNavItem isActive={activeId === 'bing-sub-2'}>
                  <SubNavLink href="#bing-sub-2" onClick={select('bing-sub-2')}>
                    Sub-tab 2
                  </SubNavLink>
                </SubNavItem>
                <SubNavItem isDisabled isActive={activeId === 'bing-sub-3'}>
                  <SubNavLink href="#bing-sub-3" onClick={select('bing-sub-3')}>
                    Sub-tab 3
                  </SubNavLink>
                </SubNavItem>
              </SubNavList>
            </NavItem>
            <NavItem isActive={activeId === 'geller'}>
              <NavLink href="#geller" onClick={select('geller')}>
                Geller
              </NavLink>
            </NavItem>
            <NavItem isDisabled isActive={activeId === 'green'}>
              <NavLink href="#green" onClick={select('green')}>
                Green
              </NavLink>
              <SubNavList>
                <Tooltip>
                  <TooltipTrigger>
                    <SubNavItem isActive={activeId === 'green-sub-1'}>
                      <SubNavLink href="#green-sub-1" onClick={select('green-sub-1')}>
                        Sub-tab 1
                        <FavoriteIcon />
                      </SubNavLink>
                    </SubNavItem>
                  </TooltipTrigger>
                  <TooltipContent placement="right">
                    To enable Green, Bing must be completed first
                  </TooltipContent>
                </Tooltip>
                <SubNavItem isActive={activeId === 'green-sub-2'}>
                  <SubNavLink href="#green-sub-2" onClick={select('green-sub-2')}>
                    Sub-tab 2
                  </SubNavLink>
                </SubNavItem>
                <SubNavItem isDisabled isActive={activeId === 'green-sub-3'}>
                  <SubNavLink href="#green-sub-3" onClick={select('green-sub-3')}>
                    Sub-tab 3
                  </SubNavLink>
                </SubNavItem>
              </SubNavList>
            </NavItem>
          </Nav>
        </Box>
        <Box
          p="3xl"
          w="full"
          display="flex"
          flexDirection="column"
          gap="2xl"
          style={{ containerType: 'inline-size' }}
        >
          <DataTable table={table}>
            <DataTableHeader>
              <Box display="flex" alignItems="center" gap="lg">
                <DataTableCounter singular="Friend" plural="Friends" />
                <DataTableBulkActions>
                  <Button
                    size="compact"
                    onPress={() => {
                      const selectedData = table
                        .getSelectedRowModel()
                        .rows.map((row) => row.original);
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
          <Box
            p="2xl"
            borderRadius="3"
            boxShadow="2"
            display="flex"
            gap="lg"
            w="full"
            className={styles.container}
          >
            <Box display="grid" gap="lg" flex="1" w="full" className={styles.grid}>
              <Box p="lg" border="1" borderColor="decorative.default" rounded="2">
                <Text typography="title01">Item</Text>
              </Box>
              <Box p="lg" border="1" borderColor="decorative.default" rounded="2">
                <Text typography="title01">-</Text>
              </Box>
              <Box p="lg" border="1" borderColor="decorative.default" rounded="2">
                <Text typography="title01">Item</Text>
              </Box>
              <Box p="lg" border="1" borderColor="decorative.default" rounded="2">
                <Text typography="title01">Item</Text>
              </Box>
              <Box p="lg" border="1" borderColor="decorative.default" rounded="2">
                <Text typography="title01">Item</Text>
              </Box>
              <Box p="lg" border="1" borderColor="decorative.default" rounded="2">
                <Text typography="title01">Item</Text>
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
                  <FileIcon color="indicator.brand" />
                  <Link>
                    <Text wordBreak="break-all" lineClamp="1">
                      file
                    </Text>
                  </Link>
                </Box>
                <Button variant="tertiary" iconOnly circle>
                  <DownloadIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
        <LockIcon size="sm" color="secondary" />
      ) : (
        <Button variant="tertiary" size="compact" iconOnly onPress={() => {}}>
          <ChevronRightIcon />
        </Button>
      ),
    id: 'action',
    size: 48,
    enableResizing: false,
    meta: {
      align: 'center',
    },
  }),
];
