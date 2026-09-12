import { forwardRef, useContext, type KeyboardEvent } from 'react';
import {
  Button,
  Input,
  SearchField as SearchFieldPrimitive,
  SelectableCollectionContext,
  SelectStateContext,
  type Key,
  type SearchFieldProps as SearchFieldPrimitiveProps,
} from 'react-aria-components';

import { CloseIcon, SearchIcon } from '../icons';
import { Tag, TagGroup, TagList } from '../tag-group';
import { cn } from '../utils/cn';
import * as styles from './Filter.css';
import { useFilterSelectedItems } from './Filter.utils';

export type FilterSearchFieldProps = SearchFieldPrimitiveProps & {
  placeholder?: string;
};

export const FilterSearchField = forwardRef<HTMLDivElement, FilterSearchFieldProps>(
  ({ placeholder = 'Search', className, ...props }, ref) => {
    const selectState = useContext(SelectStateContext);
    const selectedItems = useFilterSelectedItems();
    const hasSelectedItems = selectedItems.length > 0;

    const removeKeys = (keys: Iterable<Key>) => {
      if (!selectState || !Array.isArray(selectState.value)) {
        return;
      }

      const keySet = keys instanceof Set ? keys : new Set(keys);
      selectState.setValue(selectState.value.filter((key) => !keySet.has(key)));
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (
        event.key !== 'Backspace' ||
        event.currentTarget.value !== '' ||
        selectedItems.length === 0
      ) {
        return;
      }

      const lastItem = selectedItems[selectedItems.length - 1];
      removeKeys([lastItem.id]);
    };

    const handleClearAll = () => {
      if (Array.isArray(selectState?.value)) {
        selectState.setValue([]);
      }
    };

    return (
      <SearchFieldPrimitive
        ref={ref}
        {...props}
        className={cn(styles.searchField({}), typeof className === 'string' ? className : undefined)}
      >
        {({ isEmpty, state: searchState }) => (
          <>
            {hasSelectedItems && (
              <div className={styles.tagsRow({})}>
                {/* Opt out of Autocomplete filtering so selected tags stay visible while searching. */}
                <SelectableCollectionContext.Provider value={null}>
                  <TagGroup
                    aria-label="Selected items"
                    onRemove={removeKeys}
                    className={styles.searchTags({})}
                  >
                    <TagList items={selectedItems}>
                      {(item) => <Tag size="small">{item.name}</Tag>}
                    </TagList>
                  </TagGroup>
                </SelectableCollectionContext.Provider>
                <Button
                  className={styles.searchClearButton({})}
                  aria-label="Clear all"
                  onPress={() => {
                    searchState.setValue('');
                    handleClearAll();
                  }}
                >
                  <CloseIcon size="sm" />
                </Button>
              </div>
            )}
            <div className={styles.searchInputRow({})}>
              {!hasSelectedItems && (
                <SearchIcon size="sm" className={styles.searchIcon({})} aria-hidden />
              )}
              <Input
                placeholder={placeholder}
                className={styles.searchInput({})}
                onKeyDown={handleKeyDown}
              />
              {!hasSelectedItems && !isEmpty && (
                <Button
                  slot="clear"
                  className={styles.searchClearButton({})}
                  aria-label="Clear search"
                >
                  <CloseIcon size="sm" />
                </Button>
              )}
            </div>
          </>
        )}
      </SearchFieldPrimitive>
    );
  }
);

FilterSearchField.displayName = 'FilterSearchField';
