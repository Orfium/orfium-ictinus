export const flattenColumns = (columns) => {
  let flattenedColumns = [];

  columns.forEach((column) => {
    if (column.columns) {
      flattenedColumns = flattenedColumns.concat(flattenColumns(column.columns));
    } else {
      flattenedColumns.push(column);
    }
  });

  return flattenedColumns;
};
