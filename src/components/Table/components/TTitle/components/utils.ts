export const flattenColumns = (columns) => {
  return columns.reduce((flattenedColumns, column) => {
    if (column.columns) {
      return flattenedColumns.concat(flattenColumns(column.columns));
    } else {
      return flattenedColumns.concat(column);
    }
  }, []);
};
