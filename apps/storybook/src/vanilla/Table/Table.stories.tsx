import { Button, IconButton, Select } from '@orfium/ictinus';
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
    <Box display="flex" flexDirection="column" style={{ maxHeight: '280px' }}>
      <Box
        bg="default"
        px="lg"
        py="sm"
        h="11"
        borderT="1"
        borderL="1"
        borderR="1"
        borderColor="decorative.default"
        roundedT="2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="sm">
          <Text asChild typography="label02" color="active">
            <span>250</span>
          </Text>
          <Text asChild typography="label02">
            <span>Territories</span>
          </Text>
        </Box>
        <Button type="secondary" size="compact">
          Edit columns
        </Button>
      </Box>
      <Table layout="auto" rounded="0">
        <TableHeader pinned>
          <TableRow>
            <TableHeaderCell bordered>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text>head</Text>
                <IconButton iconName="sort" type="tertiary" size="compact" />
              </Box>
            </TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered justifyContent="flex-end">
              head
            </TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
            <TableHeaderCell bordered>head</TableHeaderCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell justifyContent="flex-end">head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              <Box display="flex" alignItems="center" style={{ minWidth: '140px' }}>
                <Text typography="body01" color="primary">
                  The quick brown fox jumps over the lazy dog.
                </Text>
              </Box>
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
            <TableCell bordered bg="alt" alignItems="flex-start">
              cell
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bordered size="sm">
              head
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              <Box style={{ maxWidth: '180px' }}>
                <Text truncate>The quick brown fox jumps over the lazy dog.</Text>
              </Box>
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
              cell
            </TableCell>
            <TableCell bordered size="sm">
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
        <TableFooter pinned>
          <TableRow>
            <TableCell
              bordered
              colSpan={3}
              justifyContent="flex-end"
              bg="palette.primary-alt.muted"
            >
              <Text typography="title02">Total</Text>
            </TableCell>
            <TableCell colSpan={9} bg="palette.primary-alt.muted">
              <Text typography="title02">10</Text>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="default"
        roundedB="2"
        borderB="1"
        borderL="1"
        borderR="1"
        borderColor="decorative.default"
        pl="md"
        pr="lg"
        py="sm"
      >
        <Select
          options={[{ label: '10 rows per page', value: '10' }]}
          selectedOption={{ label: '10 rows per page', value: '10' }}
          label=""
          isSearchable={false}
          size="compact"
        />
        <Box display="flex" alignItems="center">
          <Text typography="body03" color="secondary">
            page{' '}
            <Text asChild typography="label03" color="primary">
              <span>1</span>
            </Text>{' '}
            of{' '}
            <Text asChild typography="label03" color="primary">
              <span>1</span>
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const Simple: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" maxWidth="full" maxHeight="full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
            <TableHeaderCell>head</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
            <TableCell>cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  ),
};
