import TruncatedContent from './TruncatedContent';
import Table from '../Table';

export default {
  title: 'Utilities/Truncated Text with Tooltip',
  component: TruncatedContent,
};

export const RegularTextWithTruncationAndTooltip = {
  render: () => (
    <div
      style={{
        width: 150,
      }}
    >
      <TruncatedContent tooltipContent="This is a long text that will overflow">
        This is a long text that will overflow
      </TruncatedContent>
    </div>
  ),

  name: 'Regular Text with truncation and tooltip',

  parameters: {
    controls: { disable: true },
  },
};

export const RegularTableWithCellTooltips = {
  render: () => (
    <Table
      columns={['Column 1', 'Column 2', 'Column 3', 'Column 4']}
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
              content: `Generated tooltip from the element's text content`,
            },
            {
              content: 'No tooltip',
              hasTruncatedTooltip: false,
            },
            {
              content: () => <span>JSX Content without tooltip</span>,
            },
            {
              content: () => <span>JSX Content with forced tooltip</span>,
              tooltipContent: 'This is a kinda long (that could be longer) tooltip from a prop',
            },
          ],
        },
      ]}
    />
  ),

  name: 'Regular Table with cell tooltips',
};
