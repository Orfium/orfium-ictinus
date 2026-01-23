import { DataTable, DataTableBody } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

const meta: Meta<typeof DataTable> = {
  title: 'Vanilla/DataTable',
  component: DataTable,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => {
    const table = useReactTable({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        columnPinning: {
          left: ['firstName'],
        },
        pagination: { pageIndex: 0, pageSize: data.length },
      },
    });

    return (
      <DataTable table={table}>
        <DataTableBody />
      </DataTable>
    );
  },
};

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
  columnHelper.accessor('firstName', {
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
  }),
  columnHelper.accessor('age', {
    // cell: ({ getValue }) => <div>{getValue()}</div>,
    header: 'Age',
  }),
  columnHelper.accessor('job', {
    // cell: ({ renderValue }) => `$${renderValue()}`,
    header: 'Job',
  }),
];
