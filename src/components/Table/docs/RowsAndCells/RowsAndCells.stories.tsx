import { useState } from 'react';
import Table, { tableFunctionalUpdate, ExpandedState } from '~/components/Table';
import {
  SimpleData,
  contentAlignOptions,
  moreData,
  simpleColumns,
  simpleData,
} from '../../constants';
import { TableColumn } from '../../types';
import Button from '~/components/Button';
import DropdownButton from '~/components/DropdownButton';
import { chunk, concat } from 'lodash';
import { SelectOptionValues } from '~/components/Select';

export default {
  title: 'Updated Components/Table/Table/Rows and Cells',
  component: Table,

  args: {
    rowSize: 'sm',
    firstNameAlign: 'left',
    lastNameAlign: 'left',
    ageAlign: 'left',
    jobAlign: 'left',
  },

  argTypes: {
    rowSize: { name: 'Row Size' },
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
  },
};

export const RowSizes = {
  render: (args) => {
    const { rowSize } = args;

    return <Table data={simpleData()} columns={simpleColumns} rowSize={rowSize} />;
  },

  name: 'Row Sizes',

  parameters: {
    controls: {
      include: ['Row Size'],
    },
  },
};

export const CellContentAlignment = {
  render: (args) => {
    const { firstNameAlign, lastNameAlign, ageAlign, jobAlign } = args;

    const columns: TableColumn<SimpleData>[] = [
      { id: 'firstName', header: 'First Name', contentAlign: firstNameAlign },
      { id: 'lastName', header: 'Last Name', contentAlign: lastNameAlign },
      { id: 'age', header: 'Age', contentAlign: ageAlign },
      { id: 'job', header: 'Job', contentAlign: jobAlign },
    ];

    return <Table data={simpleData()} columns={columns} />;
  },

  name: 'Cell Content Alignment',

  parameters: {
    controls: {
      include: ['First Name Align', 'Last Name Align', 'Age Align', 'Job Align'],
    },
  },
};

export const RowSelection = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [showItems, setShowItems] = useState<Omit<SelectOptionValues, 'iconProps'>>({
      value: 10,
      label: '10 rows per page',
    });

    const data = chunk(concat(simpleData(), moreData()), Number(showItems.value));

    /** The state consists of an array (length = number of pages) and each array item is an object indicating which rows are selected */
    const [rowSelection, setRowSelection] = useState<Array<Record<string, boolean>>>(
      Array.from({ length: data.length }, () => ({}))
    );

    return (
      <Table
        data={data[currentPage - 1]}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        type="interactive"
        pagination={{
          page: currentPage,
          onChange: setCurrentPage,
          totalPages: data.length,
          onShowItemsChange: setShowItems,
        }}
        rowsConfig={{
          rowSelection: rowSelection[currentPage - 1],
          setRowSelection: (state) => {
            /** In order to get the new value of the state, use this callback */
            const newValue = tableFunctionalUpdate(state, rowSelection[currentPage - 1]);

            const newState = [
              ...rowSelection.slice(0, currentPage - 1),
              newValue,
              ...rowSelection.slice(currentPage),
            ];

            setRowSelection(newState);
          },
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
      disable: true,
    },
  },
};

export const RowDetails = {
  render: () => {
    const [expanded, setExpanded] = useState<ExpandedState>({ 1: true, 4: true });

    return (
      <Table
        type="interactive"
        data={simpleData(true)}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        rowsConfig={{
          expanded,
          setExpanded,
        }}
      />
    );
  },

  name: 'Row Details (Expandable Rows)',

  parameters: {
    controls: {
      disable: true,
    },
  },
};
