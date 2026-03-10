import { IconButton } from '@orfium/ictinus';
import {
  DataTableCheckbox,
  Icon,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@orfium/ictinus/vanilla';
import { createColumnHelper } from '@tanstack/react-table';

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
          onClick={(evt) => evt.stopPropagation()}
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
