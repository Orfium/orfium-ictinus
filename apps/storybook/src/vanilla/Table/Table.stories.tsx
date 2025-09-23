import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Box> = {
  title: 'Vanilla/Table',
  component: Table,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <>
      <Table layout="auto" mb="sm">
        <TableHeader pinned>
          <TableRow>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
            <TableHeaderCell columnBorder>head</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              <Box style={{ minWidth: '180px' }}>
                <Text typography="body01" color="primary" lineClamp="1">
                  The quick brown fox jumps over the lazy dog.
                </Text>
              </Box>
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
            <TableCell columnBorder bg="palette.primary-alt.muted">
              cell
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHeaderCell borderTopWidth="1" borderRightWidth="1">
              <Text typography="body01" color="primary">
                head
              </Text>
            </TableHeaderCell>
            <TableCell colSpan={3} textAlign="end" columnBorder>
              Total
            </TableCell>
            <TableCell colSpan={9} bg="palette.primary-alt">
              10
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableHeaderCell borderTopWidth="1" borderRightWidth="1">
              head
            </TableHeaderCell>
            <TableCell colSpan={3} textAlign="end" columnBorder>
              Total
            </TableCell>
            <TableCell colSpan={9} bg="palette.primary-alt" typography="headline01">
              10
            </TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>
    </>
  ),
};
