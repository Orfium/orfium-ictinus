import clsx from 'clsx';
import type { RefObject } from 'react';
import { type ComponentPropsWithoutRef, forwardRef, useEffect, useId } from 'react';

import { useDOMRef } from '~/components/utils/useDOMRef';
import Checkbox from '../components/Controls/CheckBox';
import { useDataTableContext } from './DataTableContext';
import { useDataTableRowContext } from './DataTableRowContext';

export type DataTableCheckboxProps = ComponentPropsWithoutRef<typeof Checkbox>;

/**
 * @group DataTable
 */
export const DataTableCheckbox = forwardRef<HTMLLabelElement, DataTableCheckboxProps>(
  (
    { children, isDisabled, ...props }: DataTableCheckboxProps,
    ref: RefObject<HTMLLabelElement>
  ) => {
    const { table } = useDataTableContext();
    const { labelId, row, setSelector } = useDataTableRowContext();

    const labelPrefixId = useId();

    const domRef = useDOMRef(ref);

    useEffect(() => {
      if (!setSelector) {
        return;
      }

      if (!isDisabled) {
        setSelector(domRef);
      }

      return () => setSelector(undefined);
    }, [isDisabled, domRef, setSelector]);

    return (
      <>
        <Checkbox
          aria-label={!row ? 'Select all' : undefined}
          aria-labelledby={row && clsx(labelPrefixId, labelId)}
          isSelected={
            row
              ? row.getIsSelected()
              : table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
          }
          isDisabled={isDisabled}
          isIndeterminate={!row && table.getIsSomePageRowsSelected()}
          onChange={(isSelected: boolean) => {
            if (row) {
              row.toggleSelected(isSelected);
            } else {
              table.toggleAllPageRowsSelected(isSelected);
            }
          }}
          ref={domRef}
          {...props}
        >
          {children}
        </Checkbox>
      </>
    );
  }
);

DataTableCheckbox.displayName = 'DataTableCheckbox';
