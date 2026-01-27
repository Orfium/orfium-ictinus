import { DataTableCheckbox, Text } from '@orfium/ictinus/vanilla';
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
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
    age: 31,
    job: 'Chef',
  },
];

const columnHelper = createColumnHelper<{
  firstName: string;
  lastName: string;
  age: number;
  job: string;
}>();

export const columns = [
  columnHelper.display({
    cell: () => <DataTableCheckbox />,
    header: () => <DataTableCheckbox />,
    id: 'select',
    size: 48,
    enableResizing: false,
  }),
  columnHelper.accessor('firstName', {
    cell: ({ getValue }) => <Text lineClamp="1">{getValue()}</Text>,
    header: () => <Text lineClamp="1">First Name</Text>,
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
  }),
  columnHelper.accessor('age', {
    header: 'Age',
  }),
  columnHelper.accessor('job', {
    header: 'Job',
  }),
];

export const simpleColumns = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
    meta: { label: 'First Name' },
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
