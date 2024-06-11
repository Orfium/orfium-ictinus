import type { SimpleData } from '../../constants';
import { contentAlignOptions, moreData, simpleData, sortedData } from '../../constants';
import Table from '~/components/Table';
import type { ExpandedState, SortingState, TableColumn } from '../../types';
import { useState } from 'react';
import Button from '~/components/Button';
import DropdownButton from '~/components/DropdownButton';
import { SelectOptionValues } from '~/components/Select';
import { chunk, concat } from 'lodash-es';

export default {
  title: 'Updated Components/Table/Table/Showcase',
  component: Table,

  args: {
    firstNameAlign: 'left',
    lastNameAlign: 'left',
    ageAlign: 'left',
    jobAlign: 'left',
    rowSize: 'sm',
    maxHeight: 280,
  },

  argTypes: {
    firstNameAlign: {
      name: 'First Name Align',
      control: 'select',
      options: contentAlignOptions,
    },
    lastNameAlign: {
      name: 'Last Name Align',
      control: 'select',
      options: contentAlignOptions,
    },
    ageAlign: {
      name: 'Age Align',
      control: 'select',
      options: contentAlignOptions,
    },
    jobAlign: {
      name: 'Job Align',
      control: 'select',
      options: contentAlignOptions,
    },
    rowSize: { name: 'Row Size' },
    hasRowSelection: { name: 'Toggle Row Selection', type: 'boolean' },
    hasPagination: { name: 'Toggle Pagination', type: 'boolean' },
    hasExpandableRows: { name: 'Toggle Row Details', type: 'boolean' },
    hasColumnChooser: { name: 'Toggle Column Chooser', type: 'boolean' },
    hasSorting: { name: 'Toggle Sorting', type: 'boolean' },
    maxHeight: { name: 'Tbody Max height' },
    firstNameWidth: { name: 'First Name Width', type: 'number' },
    lastNameWidth: { name: 'Last Name Width', type: 'number' },
    ageWidth: { name: 'Age Width', type: 'number' },
    jobWidth: { name: 'Job Width', type: 'number' },
  },
};

export const Playground = {
  render: (args) => {
    const {
      firstNameAlign,
      lastNameAlign,
      ageAlign,
      jobAlign,
      rowSize,
      hasRowSelection,
      hasExpandableRows,
      hasStickyHeader,
      maxHeight,
      hasPagination,
      hasColumnChooser,
      hasSorting,
      firstNameWidth,
      lastNameWidth,
      ageWidth,
      jobWidth,
    } = args;

    const columns: TableColumn<SimpleData>[] = [
      {
        id: 'firstName',
        header: 'First Name',
        contentAlign: firstNameAlign,
        isSortable: hasSorting,
        width: firstNameWidth,
      },
      { id: 'lastName', header: 'Last Name', contentAlign: lastNameAlign, width: lastNameWidth },
      { id: 'age', header: 'Age', contentAlign: ageAlign, isSortable: hasSorting, width: ageWidth },
      { id: 'job', header: 'Job', contentAlign: jobAlign, width: jobWidth },
    ];

    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({
      firstName: true,
      lastName: true,
      age: true,
      job: true,
    });

    const [sortingColumn, setSortingColumn] = useState<SortingState>([]);

    const [rowSelection, setRowSelection] = useState<Record<number, boolean>>({});

    const [expanded, setExpanded] = useState<ExpandedState>({});

    const [currentPage, setCurrentPage] = useState(1);

    const [showItems, setShowItems] = useState<Omit<SelectOptionValues, 'iconProps'>>({
      value: 10,
      label: '10 rows per page',
    });

    const data = !hasPagination
      ? sortedData(simpleData(true), sortingColumn)
      : sortedData(
          chunk(concat(simpleData(true), moreData(true)), Number(showItems.value))[currentPage - 1],
          sortingColumn
        );

    return (
      <Table
        data={data}
        columns={columns}
        rowSize={rowSize}
        type={hasRowSelection ? 'interactive' : 'read-only'}
        hasStickyHeader={hasStickyHeader}
        sx={hasStickyHeader ? { tbody: { maxHeight: `${maxHeight}px` } } : undefined}
        rowsConfig={{
          ...(hasRowSelection && {
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
          }),
          ...(hasExpandableRows && { expanded, setExpanded }),
        }}
        columnsConfig={hasColumnChooser ? { columnVisibility, setColumnVisibility } : undefined}
        sorting={
          hasSorting
            ? {
                sortingColumn,
                handleSorting: setSortingColumn,
              }
            : undefined
        }
        pagination={
          hasPagination
            ? {
                isEnhancedPaginationVisible: true,
                page: currentPage,
                onChange: setCurrentPage,
                totalPages: chunk(concat(simpleData(true), moreData(true)), Number(showItems.value))
                  .length,
                showItems,
                showItemsOptions: [
                  { value: 5, label: '5 rows per page' },
                  { value: 10, label: '10 rows per page' },
                ],
                onShowItemsChange: setShowItems,
              }
            : undefined
        }
      />
    );
  },

  name: 'Playground',

  parameters: {
    controls: {
      include: [
        'First Name Align',
        'Last Name Align',
        'Age Align',
        'Job Align',
        'Row Size',
        'Toggle Row Selection',
        'Toggle Row Details',
        'hasStickyHeader',
        'Tbody Max height',
        'Toggle Pagination',
        'Toggle Column Chooser',
        'Toggle Sorting',
        'First Name Width',
        'Last Name Width',
        'Age Width',
        'Job Width',
      ],
    },
  },
};
