import Table from './Table';
import { SimpleData, simpleColumns, simpleData } from './constants';

export default {
  title: 'Updated Components/Table/Table',
  component: Table,

  args: {
    rowSize: 'sm',
  },

  argTypes: {
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
