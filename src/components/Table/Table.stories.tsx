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
    firstNameWidth: { control: 'number', name: 'First Name Width' },
    lastNameWidth: { control: 'number', name: 'Last Name Width' },
    ageWidth: { control: 'number', name: 'Age Width' },
    jobWidth: { control: 'number', name: 'Job Width' },
    rowSize: { name: 'Row Size' },
  },
};

export const ColumnAndRowSizing = {
  render: (args) => {
    const { rowSize, firstNameWidth, lastNameWidth, ageWidth, jobWidth } = args;

    const columns = [
      { id: 'firstName', header: 'First Name', width: firstNameWidth },
      { id: 'lastName', header: 'Last Name', width: lastNameWidth },
      { id: 'age', header: 'Age', width: ageWidth },
      { id: 'job', header: 'Job', width: jobWidth },
    ];

    return <Table<SimpleData> data={simpleData} columns={columns} rowSize={rowSize} />;
  },

  name: 'Column And Row Sizing',

  parameters: {
    controls: {
      include: ['Row Size', 'First Name Width', 'Last Name Width', 'Age Width', 'Job Width'],
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
      include: ['Row Size', 'isAlwaysVisible'],
    },
  },
};
