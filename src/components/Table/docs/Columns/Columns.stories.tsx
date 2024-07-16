import { useState } from 'react';
import Table, { SortingState } from '~/components/Table';
import {
  SimpleData,
  multiSortDataByKey,
  simpleColumns,
  simpleData,
  sortedData,
} from '../../constants';
import { TableColumn } from '../../types';

export default {
  title: 'Updated Components/Table/Table/Columns',
  component: Table,

  args: {
    isMultiSortable: false,
    firstNameWidth: 30,
    lastNameWidth: 30,
    ageWidth: 20,
    jobWidth: 20,
  },

  argTypes: {
    isAlwaysVisible: { control: 'multi-select', options: simpleColumns.map((col) => col.id) },
    firstNameWidth: { name: 'First Name Width', type: 'number' },
    lastNameWidth: { name: 'Last Name Width', type: 'number' },
    ageWidth: { name: 'Age Width', type: 'number' },
    jobWidth: { name: 'Job Width', type: 'number' },
  },
};

export const ColumnWidth = {
  render: (args) => {
    const { firstNameWidth, lastNameWidth, ageWidth, jobWidth } = args;

    const columns: TableColumn<SimpleData>[] = [
      { id: 'firstName', header: 'First Name', width: firstNameWidth },
      { id: 'lastName', header: 'Last Name', width: lastNameWidth },
      { id: 'age', header: 'Age', width: ageWidth },
      { id: 'job', header: 'Job', width: jobWidth },
    ];

    return <Table data={simpleData()} columns={columns} />;
  },

  name: 'Column Width',

  parameters: {
    controls: {
      include: ['First Name Width', 'Last Name Width', 'Age Width', 'Job Width'],
    },
  },
};

export const ColumnChooser = {
  render: (args) => {
    const { rowSize, isAlwaysVisible = [] } = args;

    const columns: TableColumn<SimpleData>[] = [
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
      <Table
        data={simpleData()}
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
    const { isMultiSortable } = args;

    const [sortingColumn, setSortingColumn] = useState<SortingState>([{ id: 'age', desc: false }]);

    const columns: TableColumn<SimpleData>[] = [
      {
        id: 'firstName',
        header: 'First Name',
        isSortable: true,
      },
      {
        id: 'lastName',
        header: 'Last Name',
      },
      {
        id: 'age',
        header: 'Age',
        isSortable: true,
      },
      { id: 'job', header: 'Job' },
    ];

    const data = isMultiSortable
      ? multiSortDataByKey(simpleData(), sortingColumn)
      : sortedData(simpleData(), sortingColumn);

    return (
      <Table
        data={data}
        columns={columns}
        sorting={{
          sortingColumn,
          handleSorting: setSortingColumn,
          isMultiSortable,
        }}
      />
    );
  },

  name: 'Sorting',

  parameters: {
    controls: {
      include: ['isMultiSortable'],
    },
  },
};
