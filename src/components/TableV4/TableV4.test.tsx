import userEvent from '@testing-library/user-event';
import React from 'react';
import { fireEvent, render, within, screen } from 'test';

import TableV4 from './TableV4';

const tooltip = {
  content: 'Tooltip Content',
};

describe('TableV4', () => {
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
      <TableV4
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        isPadded
        data={data}
      />
    );

    // check nested table data are rendered by checking row header
    expect(getAllByText('Title').length).toBe(data.length);

    const row = getAllByText('Title')[0].closest('tr') as HTMLElement;
    const rowUtils = within(row);
    const expandedButton = await rowUtils.findByTestId('icon-button-expanded-button');

    fireEvent.click(expandedButton);

    const content = await findByText('Hey i am an expandable content');

    expect(content).toBeTruthy();
  });

  test('that the onCheck returns the selected rows back when a row is selected', async () => {
    const onCheck = vi.fn();
    const { getAllByText } = render(
      <TableV4
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        onCheck={onCheck}
        data={data}
      />
    );

    const row = getAllByText('Title')[0].closest('tr') as HTMLElement;
    const rowUtils = within(row);
    const checkbox = await rowUtils.findAllByTestId('row-check_undefined_checkbox');

    await userEvent.click(checkbox[0]);

    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith([data[0].id]);
  });

  test('that the onCheck on top of the table returns the selected rows back when all are selected', async () => {
    const onCheck = vi.fn();
    const topLeftText = 'topLeftText';
    const { getByText } = render(
      <TableV4
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        onCheck={onCheck}
        data={data}
        topLeftText={topLeftText}
      />
    );

    const row = getByText(topLeftText).closest('tr') as HTMLElement;
    const rowUtils = within(row);
    const checkbox = await rowUtils.findAllByTestId('undefined_undefined_checkbox');

    await userEvent.click(checkbox[0]);

    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith(data.map(({ id }) => id));
  });

  test('that the header contains sorting and tooltip icons', () => {
    const onSort = vi.fn();

    render(
      <TableV4
        columns={[
          {
            content: {
              label: 'Title',
              sortingKey: 'title',
            },
            isSortable: true,
          },
          'Name',
          {
            content: {
              label: 'Surname',
              sortingKey: 'surname',
            },
            tooltip,
          },
          'Age',
        ]}
        initialSort={{ column: 'title', order: 'asc' }}
        onSort={onSort}
        data={data}
      />
    );

    const titleHeader = screen.getByTestId('header_title');
    const surnameHeader = screen.getByTestId('header_surname');

    expect(within(titleHeader).getByTestId('table_icon_sort_title_asc')).toBeInTheDocument();

    expect(within(surnameHeader).getByTestId('table_icon_tooltip_surname')).toBeInTheDocument();
  });

  test('that onSort is called with correct parameters', async () => {
    const onSort = vi.fn();

    render(
      <TableV4
        columns={[
          {
            content: {
              label: 'Title',
              sortingKey: 'title',
            },
            isSortable: true,
          },
          'Name',
          'Surname',
          'Age',
        ]}
        initialSort={{ column: 'title', order: 'asc' }}
        onSort={onSort}
        data={data}
      />
    );

    await userEvent.click(screen.getByTestId('header_title'));

    expect(onSort).toHaveBeenLastCalledWith('title', 'desc');
  });

  test('that the tooltip is showed when hovering over the icon', async () => {
    render(
      <TableV4
        columns={[
          {
            content: {
              label: 'Title',
              sortingKey: 'title',
            },
            tooltip,
          },
          'Name',
          'Surname',
          'Age',
        ]}
        data={data}
      />
    );

    const tooltipIcon = screen.getByTestId('table_icon_tooltip_title');

    await userEvent.hover(tooltipIcon);

    expect(screen.getByText(tooltip.content)).toBeVisible();
  });

  test('that the order of the icons is correct when column is numerical', async () => {
    const onSort = vi.fn();

    render(
      <TableV4
        columns={[
          {
            content: {
              label: 'Title',
              sortingKey: 'title',
            },
            isSortable: true,
            tooltip,
          },
          'Name',
          'Surname',
          {
            content: {
              label: 'Age',
              sortingKey: 'age',
            },
            isSortable: true,
            tooltip,
          },
        ]}
        initialSort={{ column: 'title', order: 'asc' }}
        onSort={onSort}
        data={data}
      />
    );

    const titleElements = within(screen.getByTestId('header_title')).queryAllByTestId(
      new RegExp('table_icon')
    );

    expect(titleElements[0]).toStrictEqual(screen.getByTestId('table_icon_tooltip_title'));
    expect(titleElements[1]).toStrictEqual(screen.getByTestId('table_icon_sort_title_asc'));

    const headerAge = screen.getByTestId('header_age');

    await userEvent.click(headerAge);

    const ageElements = within(headerAge).queryAllByTestId(new RegExp('table_icon'));

    expect(ageElements[0]).toStrictEqual(screen.getByTestId('table_icon_sort_age_asc'));
    expect(ageElements[1]).toStrictEqual(screen.getByTestId('table_icon_tooltip_age'));
  });
});
