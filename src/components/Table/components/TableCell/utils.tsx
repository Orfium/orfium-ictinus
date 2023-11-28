import type { ReactNode } from 'react';

export const getTestId = (
  children: ReactNode,
  component: 'td' | 'th',
  dataTestIdPrefix?: string,
  rowIndex?: number,
  index?: string | number
) => {
  if (!children) {
    return undefined;
  }

  if (component === 'th' && typeof children === 'string') {
    return [dataTestIdPrefix, 'table_header', children?.replace(/ /g, '_').toLowerCase()]
      .filter(value => value)
      .join('_');
  } else {
    return [
      dataTestIdPrefix,
      rowIndex !== undefined ? `table_row_${rowIndex}` : '',
      index !== undefined ? `cell_${index}` : '',
    ]
      .filter(value => value)
      .join('_');
  }
};
