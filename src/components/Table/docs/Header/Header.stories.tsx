import Table from '../../Table';
import { SimpleData, moreData, simpleColumns, simpleData } from '../../constants';
import { TableColumn } from '../../types';
import { concat } from 'lodash-es';

export default {
  title: 'Updated Components/Table/Table/Header',
  component: Table,

  args: {
    maxHeight: 280,
  },

  argTypes: {
    maxHeight: { name: 'Tbody Max height' },
  },
};

export const StickyHeader = {
  render: (args) => {
    const { rowSize, maxHeight } = args;

    return (
      <Table
        data={concat(simpleData(), moreData())}
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
      include: ['Tbody Max height'],
    },
  },
};
