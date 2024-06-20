import type { SimpleData } from '../../constants';
import { contentAlignOptions, simpleData } from '../../constants';
import Table from '~/components/Table';
import type { TableColumn } from '../../types';

export default {
  title: 'Updated Components/Table/Table/Basics',
  component: Table,
};

export const BasicExample = {
  render: () => {
    const columns: TableColumn<SimpleData>[] = [
      { id: 'firstName', header: 'First Name' },
      { id: 'lastName', header: 'Last Name' },
      { id: 'age', header: 'Age' },
      { id: 'job', header: 'Job' },
    ];

    return <Table data={simpleData()} columns={columns} />;
  },

  name: 'Basic Example',

  parameters: {
    controls: { disable: true },
  },
};
