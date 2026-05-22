import {
  ActionsContent,
  ActionsRoot,
  Box,
  Button,
  ChevronRightIcon,
  DataTableCheckbox,
  LockIcon,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@orfium/ictinus/vanilla';
import { createColumnHelper } from '@tanstack/react-table';
import { FriendDetailsPopover, type FriendRecord } from './FriendComparePopover';

export const data: FriendRecord[] = [
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

const columnHelper = createColumnHelper<FriendRecord>();

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
    cell: ({ getValue, row }) => {
      const friend = row.original;
      const compare = data[(data.indexOf(friend) + 1) % data.length];

      return (
        <ActionsRoot asChild>
          <Box display="flex" flexDirection="column">
            <Text onClick={() => console.log('copy')}>{getValue()} this is a long name</Text>
            <ActionsContent>
              <Button>Test</Button>
            </ActionsContent>
            <Box display="flex" alignItems="center" flexWrap="wrap" gap="sm">
              <Text color="secondary">
                {friend.firstName} {friend.lastName}
              </Text>
              <FriendDetailsPopover friend={friend} compare={compare} />
            </Box>
          </Box>
        </ActionsRoot>
      );
    },
    header: 'First Name',
    enableHiding: false,
    meta: {
      verticalAlign: 'flex-start',
      tooltip: 'The quick brown fox',
    },
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
    meta: { verticalAlign: 'flex-start', label: 'Last Name' },
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
          <Text>{getValue()?.street ?? ''}</Text>
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
    header: ({ table }) => {
      if (table.getSelectedRowModel().rows.length > 0) {
        return null;
      }

      return 'Actions';
    },
    cell: ({ row, table }) => {
      if (row.original.locked) {
        return <LockIcon size="sm" color="secondary" />;
      }

      if (table.getSelectedRowModel().rows.length > 0) {
        return null;
      }

      return (
        <Button variant="tertiary" size="compact" iconOnly circle>
          <ChevronRightIcon />
        </Button>
      );
    },
    id: 'action',
    size: 48,
    enableResizing: false,
    meta: {
      align: 'center',
    },
  }),
];

export const simpleColumns = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
    meta: { label: 'First Name' },
    enableHiding: false,
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
    meta: { label: 'Last Name' },
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    meta: { label: 'Age' },
  }),
  columnHelper.accessor('job', {
    header: 'Job',
    meta: { label: 'Job' },
  }),
];
