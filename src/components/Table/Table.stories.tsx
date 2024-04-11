import { useState } from 'react';
import Table from './Table';
import { SimpleData, groupedColumns, simpleColumns, simpleData } from './constants';

export default {
  title: 'Updated Components/Table/Table',
  component: Table,

  args: {
    rowSize: 'sm',
  },

  argTypes: {
    isAlwaysVisible: { control: 'multi-select', options: simpleColumns.map((col) => col.id) },
  },
};

export const TableSizes = {
  render: (args) => {
    const { rowSize } = args;

    return <Table<SimpleData> data={simpleData} columns={simpleColumns} rowSize={rowSize} />;
  },

  name: 'Table Sizes',

  parameters: {
    controls: {
      include: ['rowSize'],
    },
  },
};

export const ColumnGroups = {
  render: (args) => {
    const { rowSize } = args;

    return <Table<SimpleData> data={simpleData} columns={groupedColumns} rowSize={rowSize} />;
  },

  name: 'Column Groups',

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const ColumnChooser = {
  render: (args) => {
    const { rowSize, isAlwaysVisible = [] } = args;

    const columns = [
      {
        id: 'personalDetails',
        header: 'Personal Details',
        columns: [
          {
            id: 'firstName',
            header: 'First Name',
            isAlwaysVisible: isAlwaysVisible.includes('firstName'),
          },
          {
            id: 'lastName',
            header: 'Last Name',
            isAlwaysVisible: isAlwaysVisible.includes('lastName'),
          },
        ],
      },
      { id: 'age', header: 'Age', isAlwaysVisible: isAlwaysVisible.includes('age') },
      { id: 'job', header: 'Job', isAlwaysVisible: isAlwaysVisible.includes('job') },
    ];

    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({
      firstName: true,
      lastName: true,
      age: true,
      job: true,
    });

    return (
      <Table<SimpleData>
        data={simpleData}
        columns={columns}
        rowSize={rowSize}
        columnsConfig={{ columnVisibility, setColumnVisibility }}
      />
    );
  },

  name: 'Column Chooser',

  parameters: {
    controls: {
      include: ['rowSize', 'isAlwaysVisible'],
    },
  },
};
