import React from 'react';
import { fireEvent, render, within } from 'test';
import Table from './Table';

describe('Table', () => {
  const data = new Array(50).fill(null).map((item, index) => ({
    id: index + 1,
    cells: [
      { content: 'title', widthPercentage: 40 },
      { content: 'firstname' },
      { content: 'lastname' },
      { content: 4.221 },
    ],
    // eslint-disable-next-line react/display-name
    expanded: () => <div>Hey i am an expandable content</div>,
  }));

  test('the expandable table that shows the content when clicking', async () => {
    const { getAllByText, findByText } = render(
      <Table
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        padded
        data={data}
      />
    );

    // check nested table data are rendered by checking row header
    expect(getAllByText('Title').length).toBe(data.length);

    const row = getAllByText('Title')[0].closest('tr') as HTMLElement;
    const rowUtils = within(row);
    const expandedButton = await rowUtils.findByTestId('expanded-button');

    fireEvent.click(expandedButton);

    const content = await findByText('Hey i am an expandable content');

    expect(content).toBeTruthy();
  });

  test('that the onCheck returns the selected rows back when a row is selected', async () => {
    const onCheck = jest.fn();
    const { getAllByText } = render(
      <Table
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        onCheck={onCheck}
        data={data}
      />
    );

    const row = getAllByText('Title')[0].closest('tr') as HTMLElement;
    const rowUtils = within(row);
    const checkbox = await rowUtils.findByTestId('checkbox-row-check');

    fireEvent.click(checkbox);

    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith([data[0].id]);
  });

  test('that the onCheck on top of the table returns the selected rows back when all are selected', async () => {
    const onCheck = jest.fn();
    const topLeftText = 'topLeftText';
    const { getByText } = render(
      <Table
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        onCheck={onCheck}
        data={data}
        topLeftText={topLeftText}
      />
    );

    const row = getByText(topLeftText).closest('tr') as HTMLElement;
    const rowUtils = within(row);
    const checkbox = await rowUtils.findByTestId('checkbox');

    fireEvent.click(checkbox);

    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith(data.map(({ id }) => id));
  });
});
