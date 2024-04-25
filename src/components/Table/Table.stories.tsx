import { useState } from 'react';
import Table from './Table';
import { SimpleData, simpleColumns, simpleData } from './constants';
import Typography from 'components/Typography';
import { SortingState } from '@tanstack/react-table';

export default {
  title: 'Updated Components/Table/Table',
  component: Table,

  args: {
    rowSize: 'sm',
    isMultiSortable: false,
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

/** Story for Group Headers */

// export const ColumnGroups = {
//   render: (args) => {
//     const { rowSize } = args;

//     return <Table<SimpleData> data={simpleData} columns={groupedColumns} rowSize={rowSize} />;
//   },

//   name: 'Column Groups',

//   parameters: {
//     controls: {
//       disable: true,
//     },
//   },
// };

export const ColumnChooser = {
  render: (args) => {
    const { rowSize, isAlwaysVisible = [] } = args;

    const columns = [
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

export const Sorting = {
  render: (args) => {
    const { rowSize, isAlwaysVisible = [], isMultiSortable } = args;

    const [sorting, setSorting] = useState<SortingState>();

    const columns = [
      {
        id: 'firstName',
        header: 'First Name',
        isAlwaysVisible: isAlwaysVisible.includes('firstName'),
        isSortable: true,
      },
      {
        id: 'lastName',
        header: 'Last Name',
        isAlwaysVisible: isAlwaysVisible.includes('lastName'),
      },
      {
        id: 'age',
        header: 'Age',
        isAlwaysVisible: isAlwaysVisible.includes('age'),
        isSortable: true,
      },
      { id: 'job', header: 'Job', isAlwaysVisible: isAlwaysVisible.includes('job') },
    ];

    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({
      firstName: true,
      lastName: true,
      age: true,
      job: true,
    });

    return (
      <div>
        <Table<SimpleData>
          data={simpleData}
          columns={columns}
          rowSize={rowSize}
          columnsConfig={{
            columnVisibility,
            setColumnVisibility,
          }}
          sorting={{
            sortingColumn: sorting,
            handleSorting: setSorting,
            isMultiSortable,
          }}
        />

        {sorting?.map((sort) => {
          return (
            <>
              <Typography>Sorting Column: {sort.id}</Typography>
              <Typography>Sorting Direction: {sort.desc ? 'Desc' : 'Asc'}</Typography>
            </>
          );
        })}
      </div>
    );
  },

  name: 'Sorting',

  parameters: {
    controls: {
      include: ['Row Size', 'isAlwaysVisible', 'isMultiSortable'],
    },
  },
};
