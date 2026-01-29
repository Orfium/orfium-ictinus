import type { Row } from '@tanstack/table-core';
import {
  forwardRef,
  type MouseEvent,
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react';
import { useDOMRef } from '../components/utils/useDOMRef';
import type { BoxProps } from '../vanilla/Box';
import { TableRow } from '../vanilla/Table';
import { useDataTableContext } from './DataTableContext';
import { DataTableRowProvider } from './DataTableRowContext';

export type DataTableRowProps<TData> = BoxProps<
  typeof TableRow,
  {
    /**
     * The row index.
     */
    index: number;
    /**
     * The Row instance to render.
     */
    row: Row<TData>;
  }
>;

export const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps<unknown>>(
  ({ children, index, row, ...props }, ref: RefObject<HTMLTableRowElement>) => {
    const { highlightedIndex, setHighlightedIndex, table } = useDataTableContext();

    const [subHighlightedIndex, setSubHighlightedIndex] = useState(-1);
    const labelId = useId();

    // const innerRef = useRef<HTMLTableRowElement>(null);
    // const ref = useComposedRefs(innerRef, outerRef);
    const domRef = useDOMRef(ref);

    useEffect(() => {
      if (highlightedIndex !== index) {
        return;
      }

      if (!domRef.current?.contains(document.activeElement)) {
        domRef.current?.focus();
      }

      return () => setSubHighlightedIndex(-1);
    }, [domRef, highlightedIndex, index]);

    const [actions, setActions] = useState<
      Array<{
        primary: boolean | undefined;
        ref: RefObject<HTMLDivElement>;
      }>
    >([]);
    const primary = actions.find((action) => action.primary);
    const [selector, setSelector] = useState<RefObject<HTMLLabelElement>>();

    const focusManaged = Boolean(selector || primary);

    const onActionMount = useCallback(
      ({ primary, ref }: { primary: boolean | undefined; ref: RefObject<HTMLDivElement> }) => {
        setActions((actions) => [...actions, { primary, ref }]);

        return () => setActions((actions) => actions.filter((action) => action.ref !== ref));
      },
      []
    );

    const handleSetHighlightedIndex = useCallback(
      (nextIndex: number) => {
        setSubHighlightedIndex(nextIndex);
        if (nextIndex === -1) {
          domRef.current?.focus();
        }
      },
      [domRef]
    );

    return (
      <TableRow
        aria-labelledby={labelId}
        aria-selected={row.getCanSelect() ? row.getIsSelected() : undefined}
        data-focus-visible={focusManaged ? '' : undefined}
        data-selected={row.getIsSelected() ? '' : undefined}
        onClick={(event) => {
          if (selector && getAssociatedControl(event) !== selector.current) {
            // table.setRowSelection({ [row.id]: true });
            row.toggleSelected();
          }
        }}
        onDoubleClick={(event) => {
          if (
            !primary ||
            (event.target instanceof Element && primary.ref.current?.contains(event.target))
          ) {
            return;
          }

          event.preventDefault();
          document.getSelection()?.empty();
          primary.ref.current?.click();
        }}
        onFocus={(event) => {
          if (focusManaged) {
            setHighlightedIndex(index);
            if (event.target === event.currentTarget) {
              setSubHighlightedIndex(-1);
            }
          }
        }}
        onKeyDown={(event) => {
          if (event.defaultPrevented) {
            return;
          }

          if (
            event.target instanceof HTMLElement &&
            event.target !== selector?.current &&
            (event.target.isContentEditable ||
              ['input', 'select', 'textarea'].includes(event.target.localName))
          ) {
            return;
          }

          const { rows } = table.getRowModel();
          if (focusManaged && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            const nextIndex =
              event.key === 'ArrowDown' ? highlightedIndex + 1 : highlightedIndex - 1;
            if (nextIndex >= 0 && nextIndex <= rows.length - 1) {
              event.preventDefault();
              setHighlightedIndex(nextIndex);

              if (selector) {
                const nextRow = rows[nextIndex];
                if (event.shiftKey && row.getCanMultiSelect()) {
                  table.setRowSelection((selection) =>
                    selection[nextRow.id]
                      ? {
                          ...selection,
                          [row.id]: false,
                        }
                      : {
                          ...selection,
                          [nextRow.id]: true,
                        }
                  );
                } else {
                  table.setRowSelection({
                    [nextRow.id]: true,
                  });
                }
              }
            }
          } else if (
            focusManaged &&
            document.activeElement === event.currentTarget &&
            event.key === 'ArrowRight'
          ) {
            const nextIndex = subHighlightedIndex + 1;
            if (nextIndex <= actions.length - 1) {
              event.preventDefault();
              setSubHighlightedIndex(nextIndex);
            }
          } else if (event.currentTarget === document.activeElement) {
            if (event.key === ' ' && selector) {
              event.preventDefault();
              row.toggleSelected();
            } else if (event.key === 'Enter' && primary) {
              event.preventDefault();
              primary.ref.current?.click();
            }
          }
        }}
        ref={domRef}
        tabIndex={
          focusManaged
            ? (highlightedIndex === -1 || highlightedIndex === index) && subHighlightedIndex === -1
              ? 0
              : -1
            : undefined
        }
        {...props}
      >
        <DataTableRowProvider
          value={{
            actions: actions.map(({ ref }) => ref),
            focusManaged,
            highlightedIndex: subHighlightedIndex,
            labelId,
            onActionMount,
            row,
            setHighlightedIndex: handleSetHighlightedIndex,
            setSelector,
          }}
        >
          {children}
        </DataTableRowProvider>
      </TableRow>
    );
  }
);

DataTableRow.displayName = 'DataTableRow';

const getAssociatedControl = (event: MouseEvent) => {
  if (event.target instanceof Element) {
    const label = event.target.closest('label');
    if (label && event.currentTarget.contains(label) && label.control) {
      return label.control;
    }
  }

  return;
};
