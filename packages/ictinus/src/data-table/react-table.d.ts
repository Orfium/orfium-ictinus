import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'flex-start' | 'center' | 'flex-end';
    label?: string;
    tooltip?: string;
    // backward compatibility with old v5 table
    contentAlign?: 'left' | 'center' | 'right';
  }
}
