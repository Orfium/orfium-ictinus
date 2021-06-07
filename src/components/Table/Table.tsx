import head from 'lodash/head';
import pluralize from 'pluralize';
import rem from 'polished/lib/helpers/rem';
import * as React from 'react';

import useTheme from '../../hooks/useTheme';
import CheckBox from '../CheckBox';
import TableCell from './components/TableCell';
import TableRow from './components/TableRow';
import TableRowWrapper from './components/TableRowWrapper';
import { tableStyle } from './Table.style';

export type ContentComponent<T> = (data: Cell<T>) => React.Component | JSX.Element;
export type Cell<T> = {
  content: number | string | ContentComponent<T>;
  colSpan?: number;
  type?: 'financial' | 'normal';
  align?: 'left' | 'right';
  widthPercentage?: number;
};

export type Row<T> = {
  id: string | number;
  cells: Cell<T>[];
  expanded?: ({
    row,
    selected,
    expanded,
  }: {
    row: Row<T>;
    selected: boolean;
    expanded: boolean;
  }) => React.Component | JSX.Element;
  rowSpan?: number;
};

export type Selection = string | number;

export type TableType = 'normal' | 'nested-header';

type Props<T> = {
  /** The data for the table that needs to display. */
  data: Row<T>[];
  /** An array of titles to define columns. */
  columns: string[];
  /** Boolean defining if the header is fixed or not. */
  fixedHeader?: boolean;
  /** Type of the table which determine the headers display. */
  type?: TableType;
  /** Boolean defining the padding all over the table cells and rows. */
  padded?: boolean;
  /** Function that once provided on each check will return the selection. */
  onCheck?: (data: Selection[]) => void;
  /** Top left text on the table - showing a counter, text etc. */
  topLeftText?: string | JSX.Element;
  /** Top right area to define a custom component for buttons or other usage. */
  topRightArea?: (data: Row<T>[], selectionData?: Selection[]) => React.Component | JSX.Element;
  /** Data test id prefix for all th/td elements */
  dataTestIdPrefix?: string;
};

function Table<T>({
  data,
  columns,
  type = 'normal',
  fixedHeader = false,
  onCheck,
  padded = false,
  topLeftText,
  topRightArea,
  dataTestIdPrefix,
}: Props<T>) {
  const theme = useTheme();
  const [selectedIds, setSelectedIds] = React.useState<Selection[] | undefined>(undefined);
  const columnCount = onCheck ? columns.length + 1 : columns.length;

  /** when the selection of ids change then inform the user if onCheck callback provided **/
  React.useEffect(() => {
    if (onCheck && selectedIds) {
      onCheck(selectedIds as Selection[]);
    }
  }, [onCheck, selectedIds]);

  React.useEffect(() => {
    // when data are fresh initialize the selectedIds state
    setSelectedIds(undefined);
  }, [data]);

  // @ts-ignore
  const onSelectionAdd = React.useCallback((rowId: Selection) => {
    setSelectedIds((selectedIds: Selection[] = []) =>
      selectedIds.indexOf(rowId) === -1
        ? [...selectedIds, rowId]
        : selectedIds.filter((item) => item !== rowId)
    );
  }, []);

  const columnsHasNumberArr = React.useMemo(
    () =>
      head(data)?.cells.map(({ content }) => {
        return Boolean(Number.isInteger(Number(content)) || parseFloat(`${content}`));
      }) || [],
    [data]
  );

  const columnsWithWidth = React.useMemo(
    () =>
      head(data)?.cells.map(({ widthPercentage }) => {
        return widthPercentage;
      }) || [],
    [data]
  );

  return (
    <React.Fragment>
      {(onCheck || topRightArea || topLeftText) && (
        <table css={tableStyle()}>
          <thead>
            <TableRow>
              {onCheck && (
                <TableCell
                  component={'th'}
                  sticky={fixedHeader}
                  width={50}
                  padded={padded}
                  dataTestIdPrefix={dataTestIdPrefix}
                  rowIndex={0}
                  index={0}
                >
                  <CheckBox
                    checked={Boolean(selectedIds && selectedIds.length > 0)}
                    intermediate={
                      selectedIds && selectedIds.length > 0 && selectedIds?.length !== data.length
                    }
                    onClick={() => {
                      if (selectedIds?.length === data.length) {
                        setSelectedIds([]);
                      } else {
                        setSelectedIds(data.map(({ id }) => id));
                      }
                    }}
                  />
                </TableCell>
              )}
              <TableCell padded={padded} dataTestIdPrefix={dataTestIdPrefix} rowIndex={0} index={1}>
                {selectedIds && selectedIds?.length > 0 ? (
                  <span>
                    <b>{selectedIds.length}</b> {pluralize('item', selectedIds.length)} selected
                  </span>
                ) : (
                  topLeftText
                )}
              </TableCell>
              {topRightArea && (
                <TableCell
                  textAlign={'right'}
                  padded={padded}
                  colSpan={columnCount - (onCheck ? 2 : 1)}
                  dataTestIdPrefix={dataTestIdPrefix}
                  rowIndex={0}
                  index={2}
                >
                  {topRightArea(data, selectedIds)}
                </TableCell>
              )}
            </TableRow>
          </thead>
        </table>
      )}

      <table css={tableStyle()}>
        {(onCheck || topRightArea || type === 'normal') && (
          <thead>
            {type === 'normal' && (
              <TableRow
                css={[
                  {
                    paddingTop: theme.spacing.md,
                    paddingBottom: theme.spacing.md,
                    borderBottomWidth: rem(1),
                    borderBottomStyle: 'solid',
                    borderBottomColor: theme.utils.getColor('lightGray', 700),
                  },
                ]}
              >
                {onCheck && (
                  <TableCell
                    component={'th'}
                    sticky={fixedHeader}
                    width={50}
                    padded={padded}
                    dataTestIdPrefix={dataTestIdPrefix}
                  />
                )}
                {columns.map((item, index) => (
                  <TableCell
                    textAlign={columnsHasNumberArr && columnsHasNumberArr[index] ? 'right' : 'left'}
                    component={'th'}
                    key={`${item}`}
                    sticky={fixedHeader}
                    padded={padded}
                    width={columnsWithWidth[index] ? `${columnsWithWidth[index]}%` : 'initial'}
                    dataTestIdPrefix={dataTestIdPrefix}
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </thead>
        )}
        <tbody>
          {data.map((row, index) => (
            // @ts-ignore
            <TableRowWrapper<T>
              key={row.id}
              {...{
                row,
                isRowSelected: selectedIds ? selectedIds.indexOf(row.id) !== -1 : false,
                onSelectionAdd,
                padded,
                columns,
                fixedHeader,
                type,
                columnCount,
                columnsHasNumberArr,
                columnsWithWidth,
                onSelectionChangeExist: Boolean(onCheck),
                expanded: !!row.expanded,
              }}
              dataTestIdPrefix={dataTestIdPrefix}
              rowIndex={index + 1}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;
