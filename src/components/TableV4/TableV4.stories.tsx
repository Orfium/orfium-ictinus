import TableV4 from './TableV4';
import TableFilterShowcase from '../storyUtils/TableFilterShowcase';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/TableV4',
  component: TableV4,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Table Cell',
        url: `${FIGMA_URL}?node-id=10283%3A104367`,
      },
      {
        type: 'figma',
        name: 'Table Header',
        url: `${FIGMA_URL}?node-id=10283%3A104369`,
      },
      {
        type: 'figma',
        name: 'Table Title',
        url: `${FIGMA_URL}?node-id=10283%3A104366`,
      },
      {
        type: 'figma',
        name: 'Documentation: Examples',
        url: `${FIGMA_URL}?node-id=921%3A155`,
      },
      {
        type: 'figma',
        name: 'Documentation: Sorting',
        url: `${FIGMA_URL}?node-id=7428%3A117692`,
      },
      {
        type: 'figma',
        name: 'Documentation: Spacing Row Rules',
        url: `${FIGMA_URL}?node-id=7848%3A131938`,
      },
    ],
    controls: { disable: true },
  },
};

export const RegularTableWithSimpleRows = {
  render: () => (
    <TableV4
      columns={['Title', 'Name', 'Surname', 'Age', 'Sauron Age']}
      dataTestIdPrefix="ictinus"
      isPadded
      topLeftText={'topLeftText'}
      topRightArea={() => (
        <div>
          <div>top right section</div>
        </div>
      )}
      data={[
        {
          id: 1,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 2,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 3,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 4,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 5,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 6,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 7,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
        {
          id: 8,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 42,
            },
            {
              content: '4.2M',
              align: 'right',
            },
          ],
        },
      ]}
    />
  ),

  name: 'Regular Table with simple rows',
};

export const RegularTableWithSortingAndTooltips = {
  render: () => (
    <TableV4
      columns={[
        {
          content: {
            label: 'Title',
            sortingKey: 'title',
          },

          isSortable: true,

          tooltip: {
            content: 'Tooltip Content',
            placement: 'bottom',
          },
        },
        'Name',
        {
          content: {
            label: 'Surname',
            sortingKey: 'surname',
          },

          tooltip: {
            content: 'Tooltip Content',
          },
        },
        {
          content: {
            label: 'Age',
            sortingKey: 'age',
          },

          isSortable: true,

          tooltip: {
            content: 'Tooltip Content',
            placement: 'right',
          },
        },
      ]}
      dataTestIdPrefix="ictinus"
      onSort={(column, order) => console.log(column, order)}
      initialSort={{
        column: 'title',
        order: 'asc',
      }}
      isPadded
      data={[
        {
          id: 1,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 2,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 3,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 4,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 5,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 6,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 7,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 8,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
      ]}
    />
  ),

  name: 'Regular Table with sorting and tooltips',
};

export const TableWithExpandableRows = {
  render: () => (
    <TableV4
      columns={['Title', 'Name', 'Surname', 'Age']}
      type={'normal'}
      isPadded
      hasFixedHeader
      hasFixedCTA
      onCheck={(g) => console.log('on table change: ', g)}
      topLeftText={'topLeftText'}
      topRightArea={() => (
        <div>
          <div>top right section</div>
        </div>
      )}
      // @ts-ignore
      data={new Array(50).fill(null).map((item, index) => ({
        id: index + 1,

        cells: [
          {
            content: (
              <a href="www.youtube.com" onClick={(e) => e.stopPropagation()}>
                'title'
              </a>
            ),
          },
          {
            content: 'firstname',
          },
          {
            content: 'lastname',
          },
          {
            content: 4.221,
          },
        ],

        expanded: () => <div>Hey i am an expandable content</div>,
      }))}
      actionWidth={3}
    />
  ),

  name: 'Table with expandable rows',
};

export const TableWithExpandableRowsExpandedOnPageLoad = {
  render: () => (
    <TableV4
      columns={['Title', 'Name', 'Surname', 'Age']}
      padded
      fixedHeader
      fixedCTA
      onCheck={(g) => console.log('on table change: ', g)}
      topLeftText={'topLeftText'}
      topRightArea={() => (
        <div>
          <div>top right section</div>
        </div>
      )}
      // @ts-ignore
      data={new Array(50).fill(null).map((item, index) => ({
        id: index + 1,

        cells: [
          {
            content: (
              <a href="www.youtube.com" onClick={(e) => e.stopPropagation()}>
                'title'
              </a>
            ),
          },
          {
            content: 'firstname',
          },
          {
            content: 'lastname',
          },
          {
            content: 4.221,
          },
        ],

        expanded: () => <div>Hey i am an expandable content</div>,
      }))}
      actionWidth={3}
      isInitiallyExpanded
    />
  ),

  name: 'Table with Expandable Rows - Expanded on Page Load',
};

export const FinancialTable = {
  render: () => (
    <TableV4
      columns={['Title', 'Name', 'Surname', 'Age']}
      onCheck={console.log}
      isPadded
      topLeftText={'topLeftText'}
      topRightArea={() => (
        <div>
          <div>top right section</div>
        </div>
      )}
      data={[
        {
          id: 1,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              type: 'financial',
              content: 'lastname',
            },
            {
              type: 'financial',
              content: 4.221,
            },
          ],
        },
        {
          id: 2,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              type: 'financial',
              content: 'lastname',
            },
            {
              type: 'financial',
              content: 4.221,
            },
          ],
        },
        {
          id: 3,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              type: 'financial',
              content: 'lastname',
            },
            {
              type: 'financial',
              content: 4.221,
            },
          ],
        },
        {
          id: 4,

          cells: [
            {
              content: 'title',
            },
            {
              colSpan: 2,
              content: 'Sum',
            },
            {
              type: 'financial',
              content: 4.221,
            },
          ],
        },
      ]}
    />
  ),

  name: 'Financial Table',
};

export const FixedHeaderTable = {
  render: () => (
    <TableV4
      columns={['Title', 'Name', 'Surname', 'Age']}
      onCheck={console.log}
      isPadded
      hasFixedHeader
      topLeftText={'topLeftText'}
      topRightArea={() => (
        <div>
          <div>top right section</div>
        </div>
      )}
      data={[
        {
          id: 1,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 2,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 3,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 12,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 13,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 22,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 23,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 32,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
        {
          id: 33,

          cells: [
            {
              content: 'title',
            },
            {
              content: 'firstname',
            },
            {
              content: 'lastname',
            },
            {
              content: 4.221,
            },
          ],
        },
      ]}
    />
  ),

  name: 'Fixed Header Table',
};

export const TableWithExpandableRowsAndSortDir = {
  render: () => (
    <TableV4
      columns={[
        {
          content: {
            label: 'Title',
            sortingKey: 'title',
          },

          isSortable: true,

          tooltip: {
            content: 'Tooltip Content',
            placement: 'bottom',
          },
        },
        'Name',
        {
          content: {
            label: 'Surname',
            sortingKey: 'surname',
          },

          tooltip: {
            content: 'Tooltip Content',
          },
        },
        {
          content: {
            label: 'Age',
            sortingKey: 'age',
          },

          isSortable: true,

          tooltip: {
            content: 'Tooltip Content',
            placement: 'right',
          },
        },
      ]}
      type={'normal'}
      isPadded
      hasFixedHeader
      onSort={console.log}
      hasFixedCTA
      sortDir={'desc'}
      onCheck={(g) => console.log('on table change: ', g)}
      topLeftText={'topLeftText'}
      topRightArea={() => (
        <div>
          <div>top right section</div>
        </div>
      )}
      // @ts-ignore
      data={new Array(50).fill(null).map((item, index) => ({
        id: index + 1,

        cells: [
          {
            content: (
              <a href="www.youtube.com" onClick={(e) => e.stopPropagation()}>
                'title'
              </a>
            ),
          },
          {
            content: 'firstname',
          },
          {
            content: 'lastname',
          },
          {
            content: 4.221,
          },
        ],

        expanded: () => <div>Hey i am an expandable content</div>,
      }))}
      actionWidth={3}
    />
  ),

  name: 'Table with expandable rows and sortDir',
};

export const TableWithFilteredDataForPerformance = {
  render: () => <TableFilterShowcase />,
  name: 'Table with filtered data for performance',
};
