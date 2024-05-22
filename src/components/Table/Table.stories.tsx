import { useMemo, useState } from 'react';
import Table from './Table';
import { SimpleData, moreData, simpleColumns, simpleData } from './constants';
import { ExpandedState, SortingState } from '@tanstack/react-table';
import { chunk, concat } from 'lodash';
import Button from 'components/Button';
import DropdownButton from 'components/DropdownButton';
import { SelectOption } from 'components/Select';
import { TableColumn } from './types';

export default {
  title: 'Updated Components/Table/Table',
  component: Table,

  args: {
    rowSize: 'sm',
    isMultiSortable: false,
    maxHeight: 280,
    isNextPageDisabled: false,
    isPrevPageDisabled: false,
    isEnhancedPaginationVisible: true,
    hasItemsPerPageCount: true,
  },

  argTypes: {
    isAlwaysVisible: { control: 'multi-select', options: simpleColumns.map((col) => col.id) },
    firstNameWidth: { control: 'number', name: 'First Name Width' },
    lastNameWidth: { control: 'number', name: 'Last Name Width' },
    ageWidth: { control: 'number', name: 'Age Width' },
    jobWidth: { control: 'number', name: 'Job Width' },
    rowSize: { name: 'Row Size' },
    maxHeight: { name: 'Tbody Max height' },
    hasItemsPerPageCount: { name: 'Show items-per-page count' },
  },
};

export const ColumnAndRowSizing = {
  render: (args) => {
    const { rowSize, firstNameWidth, lastNameWidth, ageWidth, jobWidth } = args;

    const columns: TableColumn<SimpleData>[] = [
      { id: 'firstName', header: 'First Name', width: firstNameWidth },
      { id: 'lastName', header: 'Last Name', width: lastNameWidth },
      { id: 'age', header: 'Age', width: ageWidth },
      { id: 'job', header: 'Job', width: jobWidth },
    ];

    return <Table<SimpleData> data={simpleData()} columns={columns} rowSize={rowSize} />;
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
      <Table<SimpleData>
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
    const { rowSize, isAlwaysVisible = [], isMultiSortable } = args;

    const [sorting, setSorting] = useState<SortingState>();

    const columns: TableColumn<SimpleData>[] = [
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

    const sortDataByKey = (data, key, order = 'asc') => {
      const returnData = [...data];

      return returnData.sort((a, b) => {
        const valueA = a.cells[key];
        const valueB = b.cells[key];

        const comparison =
          key === 'age'
            ? parseInt(valueA, 10) - parseInt(valueB, 10)
            : valueA < valueB
            ? -1
            : valueA > valueB
            ? 1
            : 0;

        return order === 'desc' ? -comparison : comparison;
      });
    };

    const ddata = useMemo(() => {
      const { id = undefined, desc = undefined } = sorting?.length ? sorting[0] : {};

      if (id) {
        return sortDataByKey(simpleData(), id, desc ? 'desc' : 'asc');
      } else {
        return simpleData();
      }
    }, [sorting, simpleData]);

    return (
      <Table<SimpleData>
        data={ddata}
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
    );
  },

  name: 'Sorting',

  parameters: {
    controls: {
      include: ['Row Size', 'isAlwaysVisible', 'isMultiSortable'],
    },
  },
};

export const StickyHeader = {
  render: (args) => {
    const { rowSize, maxHeight } = args;

    return (
      <Table<SimpleData>
        data={concat(simpleData(), moreData)}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        rowSize={rowSize}
        hasStickyHeader
        sx={{ tbody: { maxHeight: `${maxHeight}px` } }}
      />
    );
  },

  name: 'Sticky Header',

  parameters: {
    controls: {
      include: ['Row Size', 'Tbody Max height'],
    },
  },
};

export const RowSelection = {
  render: (args) => {
    const { rowSize } = args;

    const [rowSelection, setRowSelection] = useState<Record<number, boolean>>({
      1: true,
      5: true,
      7: true,
    });

    return (
      <Table<SimpleData>
        data={concat(simpleData(), moreData)}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        rowSize={rowSize}
        type="interactive"
        rowsConfig={{
          rowSelection,
          setRowSelection,
          defaultAction: <Button size="compact">Default Action</Button>,
          bulkActions: (
            <div
              css={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Button size="compact">Bulk 1</Button>
              <Button size="compact">Bulk 2</Button>
              <DropdownButton
                size="compact"
                items={['Bulk 4', 'Bulk 5', 'Bulk 6']}
                onButtonClick={() => console.log('click')}
                onOptionSelect={() => console.log('option')}
              >
                Bulk 3
              </DropdownButton>
            </div>
          ),
        }}
      />
    );
  },

  name: 'Row Selection',

  parameters: {
    controls: {
      include: ['Row Size'],
    },
  },
};

export const RowDetails = {
  render: (args) => {
    const { rowSize } = args;

    const [expanded, setExpanded] = useState<ExpandedState>({});

    return (
      <Table<SimpleData>
        type="interactive"
        data={simpleData(true)}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        rowSize={rowSize}
        rowsConfig={{
          expanded,
          setExpanded,
        }}
      />
    );
  },

  name: 'Row Details',

  parameters: {
    controls: {
      include: ['Row Size'],
    },
  },
};

export const Pagination = {
  render: (args) => {
    const {
      rowSize,
      hasStickyHeader,
      isNextPageDisabled,
      isPrevPageDisabled,
      isEnhancedPaginationVisible,
      hasItemsPerPageCount,
      maxHeight,
    } = args;

    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState<SelectOption>({
      value: 10,
      label: '10 rows per page',
    });

    const data = chunk(concat(simpleData(), moreData), Number(itemsPerPage.value));

    return (
      <Table<SimpleData>
        data={data[currentPage - 1]}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        rowSize={rowSize}
        hasStickyHeader={hasStickyHeader}
        sx={hasStickyHeader ? { tbody: { maxHeight: `${maxHeight}px` } } : undefined}
        pagination={{
          isEnhancedPaginationVisible,
          page: currentPage,
          onChange: setCurrentPage,
          totalPages: data.length,
          ...(hasItemsPerPageCount && {
            itemsPerPage,
            itemsPerPageOptions: [
              { value: 5, label: '5 rows per page' },
              { value: 10, label: '10 rows per page' },
            ],
          }),
          onItemsPerPageChange: setItemsPerPage,
          isNextPageDisabled,
          isPrevPageDisabled,
        }}
      />
    );
  },

  name: 'Pagination',

  parameters: {
    controls: {
      include: [
        'Row Size',
        'hasStickyHeader',
        'isPrevPageDisabled',
        'isNextPageDisabled',
        'isEnhancedPaginationVisible',
        'Show items-per-page count',
        'Tbody Max height',
      ],
    },
  },
};
