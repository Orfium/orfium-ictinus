import Table from './Table';
import { SimpleData, simpleColumns, simpleData } from './constants';

export default {
  title: 'Updated Components/Table/Table',
  component: Table,

  args: {
    rowSize: 'sm',
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
