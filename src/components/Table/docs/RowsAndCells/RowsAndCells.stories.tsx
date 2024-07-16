import { useState } from 'react';
import Table from '../../Table';
import {
  SimpleData,
  contentAlignOptions,
  moreData,
  simpleColumns,
  simpleData,
} from '../../constants';
import { TableColumn } from '../../types';
import { ExpandedState } from '@tanstack/react-table';
import Button from '~/components/Button';
import DropdownButton from '~/components/DropdownButton';
import { concat } from 'lodash-es';

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
    const [rowSelection, setRowSelection] = useState<Record<number, boolean>>({
      1: true,
      5: true,
      7: true,
    });

    return (
      <Table
        data={concat(simpleData(), moreData())}
        columns={simpleColumns as TableColumn<SimpleData>[]}
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
