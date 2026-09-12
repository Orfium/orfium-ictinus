import { useContext, useMemo, useState, type ReactNode } from 'react';
import {
  Autocomplete,
  Button,
  FieldError,
  ListBox,
  Popover,
  Select as AriaSelect,
  SelectValue,
  useFilter,
  type Key,
  type ListBoxItemProps,
  type ListBoxProps,
  type SelectProps as AriaSelectProps,
  type ValidationResult,
} from 'react-aria-components';

import { ChevronDownIcon } from '../icons';
import { cn } from '../utils/cn';
import { DropdownItem } from '../vanilla/Dropdown';
import { Text } from '../vanilla/Text';
import * as styles from './Filter.css';
import { FilterSearchField } from './FilterSearchField';
import {
  FilterItemsContext,
  FilterSelectedKeysContext,
  useFilterSelectedItems,
  type FilterItemData,
} from './Filter.utils';

export type FilterProps<T extends FilterItemData> = Omit<
  AriaSelectProps<T, 'multiple'>,
  'children' | 'selectionMode'
> & {
  /** Filter label shown in the trigger, e.g. "Hobbits" → "Hobbits: all" */
  label: string;
  /** Text shown when nothing is selected. @default 'all' */
  emptyLabel?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  /** Optional custom item renderer. Defaults to showing `item.name`. */
  children?: (item: T) => ReactNode;
  searchPlaceholder?: string;
};

export function Filter<T extends FilterItemData>({
  label,
  emptyLabel = 'all',
  description,
  errorMessage,
  children,
  items,
  searchPlaceholder = 'Search',
  className,
  value,
  defaultValue,
  onChange,
  ...props
}: FilterProps<T>) {
  const { contains } = useFilter({ sensitivity: 'base' });

  const [uncontrolledValue, setUncontrolledValue] = useState<Key[]>(() =>
    Array.isArray(defaultValue) ? [...defaultValue] : []
  );

  const selectedKeys = value !== undefined ? value : uncontrolledValue;
  const selectedKeysList = Array.isArray(selectedKeys) ? selectedKeys : [];

  const handleChange = (keys: Key[]) => {
    if (value === undefined) {
      setUncontrolledValue(keys);
    }
    onChange?.(keys);
  };

  const itemsById = useMemo(() => {
    const map = new Map<Key, FilterItemData>();
    for (const item of items ?? []) {
      map.set(item.id, item);
    }
    return map;
  }, [items]);

  const renderItem =
    children ?? ((item: T) => <FilterItem id={item.id}>{item.name}</FilterItem>);

  return (
    <FilterItemsContext.Provider value={itemsById}>
      <FilterSelectedKeysContext.Provider value={selectedKeysList}>
        <AriaSelect
          selectionMode="multiple"
          allowsEmptyCollection
          aria-label={label}
          value={selectedKeysList}
          onChange={handleChange}
          {...props}
          className={cn(styles.filter({}), typeof className === 'string' ? className : undefined)}
        >
          {({ isOpen }) => (
            <>
              <Button className={styles.trigger({ isOpen })}>
                <SelectValue className={styles.selectValue({})}>
                  {() => (
                    <FilterTriggerValue label={label} emptyLabel={emptyLabel} isOpen={isOpen} />
                  )}
                </SelectValue>
                <ChevronDownIcon size="sm" className={styles.chevron({ isOpen })} aria-hidden />
              </Button>
              {description && <Text slot="description">{description}</Text>}
              <FieldError>{errorMessage}</FieldError>
              <Popover className={styles.popover({})}>
                <Autocomplete filter={contains}>
                  <FilterSearchField
                    aria-label={`Search ${label}`}
                    placeholder={searchPlaceholder}
                    autoFocus
                  />
                  <FilterAvailableListBox items={items}>{renderItem}</FilterAvailableListBox>
                </Autocomplete>
              </Popover>
            </>
          )}
        </AriaSelect>
      </FilterSelectedKeysContext.Provider>
    </FilterItemsContext.Provider>
  );
}

function FilterTriggerValue({
  label,
  emptyLabel,
  isOpen,
}: {
  label: string;
  emptyLabel: string;
  isOpen: boolean;
}) {
  const selectedItems = useFilterSelectedItems();
  const first = selectedItems[0];
  const moreCount = selectedItems.length - 1;

  return (
    <>
      <span className={styles.triggerLabel({})}>
        {label}: {first?.name ?? emptyLabel}
      </span>
      {moreCount > 0 && !isOpen && <span className={styles.moreBadge({})}>+{moreCount}</span>}
    </>
  );
}

function FilterAvailableListBox<T extends FilterItemData>({
  items,
  children,
}: {
  items?: Iterable<T>;
  children: (item: T) => ReactNode;
}) {
  // Must read selected keys from context above Select — CollectionBuilder runs before SelectState exists.
  const selectedKeys = useContext(FilterSelectedKeysContext);

  const availableItems = useMemo(() => {
    const selectedKeySet = new Set(selectedKeys);
    return [...(items ?? [])].filter((item) => !selectedKeySet.has(item.id));
  }, [items, selectedKeys]);

  return (
    <FilterListBox
      items={availableItems}
      renderEmptyState={() => <div className={styles.emptyState({})}>No results found</div>}
    >
      {(item) => children(item)}
    </FilterListBox>
  );
}

export function FilterListBox<T extends object>(props: ListBoxProps<T>) {
  return <ListBox {...props} className={cn(styles.listBox({}), props.className as string)} />;
}

export function FilterItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} className={cn(styles.item({}), props.className as string)} />;
}

export { FilterSearchField } from './FilterSearchField';
export type { FilterSearchFieldProps } from './FilterSearchField';
