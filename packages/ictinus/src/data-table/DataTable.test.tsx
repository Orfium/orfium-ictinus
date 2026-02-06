import {
  type ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  type RowSelectionState,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import userEvent from '@testing-library/user-event';
import { type ReactNode, useState } from 'react';
import { render, screen } from '../test';
import { DataTable } from './DataTable';
import { DataTableBody } from './DataTableBody';
import { DataTableBulkActions } from './DataTableBulkActions';
import { DataTableCounter } from './DataTableCounter';
import { DataTableEditColumns } from './DataTableEditColumns';
import { DataTableHeader } from './DataTableHeader';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const testData: Person[] = [
  { firstName: 'Alice', lastName: 'Smith', age: 25 },
  { firstName: 'Bob', lastName: 'Jones', age: 30 },
  { firstName: 'Charlie', lastName: 'Brown', age: 35 },
];

const columnHelper = createColumnHelper<Person>();

const simpleColumns: ColumnDef<Person, any>[] = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
    meta: { label: 'First Name' },
    enableHiding: false,
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
    meta: { label: 'Last Name' },
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    meta: { label: 'Age' },
  }),
];

/**
 * A wrapper component that creates a `useReactTable` instance and renders
 * DataTable with the provided children. Props allow controlling initial state.
 */
function DataTableFixture({
  children,
  data = testData,
  columns = simpleColumns,
  enableRowSelection = true,
  enableSorting = true,
  initialRowSelection = {},
  initialVisibility = {},
}: {
  children: ReactNode;
  data?: Person[];
  columns?: ColumnDef<Person, any>[];
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  initialRowSelection?: RowSelectionState;
  initialVisibility?: VisibilityState;
}) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>(initialRowSelection);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialVisibility);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection,
    enableSorting,
    state: {
      rowSelection,
      columnVisibility,
    },
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return <DataTable table={table}>{children}</DataTable>;
}

describe('DataTable', () => {
  it('renders children inside a flex container', () => {
    render(
      <DataTableFixture>
        <div data-testid="child">Hello</div>
      </DataTableFixture>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByTestId('child').textContent).toBe('Hello');
  });

  it('renders with the DataTable displayName', () => {
    expect(DataTable.displayName).toBe('DataTable');
  });
});

describe('DataTableCounter', () => {
  it('shows total row count with default plural label', () => {
    render(
      <DataTableFixture>
        <DataTableCounter />
      </DataTableFixture>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('items')).toBeInTheDocument();
  });

  it('shows singular label when there is exactly 1 row', () => {
    render(
      <DataTableFixture data={[testData[0]]}>
        <DataTableCounter />
      </DataTableFixture>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('item')).toBeInTheDocument();
  });

  it('uses custom singular/plural labels', () => {
    render(
      <DataTableFixture>
        <DataTableCounter singular="Friend" plural="Friends" />
      </DataTableFixture>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Friends')).toBeInTheDocument();
  });

  it('shows selected count with "selected" suffix when rows are selected', () => {
    render(
      <DataTableFixture initialRowSelection={{ '0': true, '1': true }}>
        <DataTableCounter singular="Friend" plural="Friends" />
      </DataTableFixture>
    );

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Friends selected')).toBeInTheDocument();
  });

  it('uses singular label when exactly 1 row is selected', () => {
    render(
      <DataTableFixture initialRowSelection={{ '0': true }}>
        <DataTableCounter singular="Friend" plural="Friends" />
      </DataTableFixture>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Friend selected')).toBeInTheDocument();
  });

  it('accepts a custom count prop that overrides the table row count', () => {
    render(
      <DataTableFixture>
        <DataTableCounter count={999} />
      </DataTableFixture>
    );

    expect(screen.getByText('999')).toBeInTheDocument();
    expect(screen.getByText('items')).toBeInTheDocument();
  });
});

describe('DataTableBulkActions', () => {
  it('does not render children when no rows are selected', () => {
    render(
      <DataTableFixture>
        <DataTableBulkActions>
          <button>Bulk Action</button>
        </DataTableBulkActions>
      </DataTableFixture>
    );

    expect(screen.queryByText('Bulk Action')).not.toBeInTheDocument();
  });

  it('renders children when rows are selected', () => {
    render(
      <DataTableFixture initialRowSelection={{ '0': true }}>
        <DataTableBulkActions>
          <button>Bulk Action</button>
        </DataTableBulkActions>
      </DataTableFixture>
    );

    expect(screen.getByText('Bulk Action')).toBeInTheDocument();
  });
});

describe('DataTableBody', () => {
  it('renders column headers', () => {
    render(
      <DataTableFixture>
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders all data rows', () => {
    render(
      <DataTableFixture>
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('renders cell values for each row', () => {
    render(
      <DataTableFixture>
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('Smith')).toBeInTheDocument();
    expect(screen.getByText('Jones')).toBeInTheDocument();
    expect(screen.getByText('Brown')).toBeInTheDocument();

    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();
  });

  it('respects initial column visibility', () => {
    render(
      <DataTableFixture initialVisibility={{ age: false }}>
        <DataTableBody />
      </DataTableFixture>
    );

    // Age column should be hidden
    expect(screen.queryByText('Age')).not.toBeInTheDocument();
    expect(screen.queryByText('25')).not.toBeInTheDocument();

    // Other columns should still be visible
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('renders an empty body when data is empty', () => {
    render(
      <DataTableFixture data={[]}>
        <DataTableBody />
      </DataTableFixture>
    );

    // Headers should still render
    expect(screen.getByText('First Name')).toBeInTheDocument();

    // No data rows
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });
});

describe('DataTableEditColumns', () => {
  it('renders the "Edit columns" button', () => {
    render(
      <DataTableFixture>
        <DataTableEditColumns />
      </DataTableFixture>
    );

    expect(screen.getByText('Edit columns')).toBeInTheDocument();
  });

  it('shows hidable columns in the menu when clicked', async () => {
    const user = userEvent.setup();

    render(
      <DataTableFixture>
        <DataTableEditColumns />
      </DataTableFixture>
    );

    await user.click(screen.getByText('Edit columns'));

    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('toggles column visibility when a hidable column is clicked', async () => {
    const user = userEvent.setup();

    render(
      <DataTableFixture>
        <DataTableEditColumns />
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('35')).toBeInTheDocument();

    await user.click(screen.getByText('Edit columns'));

    const ageOption = screen.getAllByText('Age');
    // There may be multiple "Age" texts (header cell + menu item)
    // The menu item is the last one
    await user.click(ageOption[ageOption.length - 1]);

    expect(screen.queryByText('35')).not.toBeInTheDocument();
  });
});

describe('DataTableHeader', () => {
  it('renders children', () => {
    render(
      <DataTableFixture>
        <DataTableHeader>
          <span data-testid="header-child">Header Content</span>
        </DataTableHeader>
      </DataTableFixture>
    );

    expect(screen.getByTestId('header-child')).toBeInTheDocument();
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });
});

describe('DataTable integration', () => {
  it('counter updates when row selection changes via bulk actions', () => {
    render(
      <DataTableFixture initialRowSelection={{ '0': true }}>
        <DataTableHeader>
          <DataTableCounter singular="Friend" plural="Friends" />
          <DataTableBulkActions>
            <button>Delete</button>
          </DataTableBulkActions>
        </DataTableHeader>
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Friend selected')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('bulk actions disappear and counter shows total when no rows are selected', () => {
    render(
      <DataTableFixture>
        <DataTableHeader>
          <DataTableCounter singular="Friend" plural="Friends" />
          <DataTableBulkActions>
            <button>Delete</button>
          </DataTableBulkActions>
        </DataTableHeader>
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Friends')).toBeInTheDocument();

    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  it('renders the full composition (header + body) with data', () => {
    render(
      <DataTableFixture>
        <DataTableHeader>
          <DataTableCounter />
          <DataTableEditColumns />
        </DataTableHeader>
        <DataTableBody />
      </DataTableFixture>
    );

    // Header
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('items')).toBeInTheDocument();
    expect(screen.getByText('Edit columns')).toBeInTheDocument();

    // Body
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('hides column via EditColumns and verifies body updates', async () => {
    const user = userEvent.setup();

    render(
      <DataTableFixture>
        <DataTableHeader>
          <DataTableEditColumns />
        </DataTableHeader>
        <DataTableBody />
      </DataTableFixture>
    );

    expect(screen.getByText('Smith')).toBeInTheDocument();

    await user.click(screen.getByText('Edit columns'));

    const lastNameOptions = screen.getAllByText('Last Name');
    await user.click(lastNameOptions[lastNameOptions.length - 1]);

    expect(screen.queryByText('Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Jones')).not.toBeInTheDocument();
    expect(screen.queryByText('Brown')).not.toBeInTheDocument();

    expect(screen.getByText('Alice')).toBeInTheDocument();
  });
});
