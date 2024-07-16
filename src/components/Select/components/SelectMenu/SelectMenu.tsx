import type { CSSObject } from '@emotion/react';
import useCombinedRefs from 'hooks/useCombinedRefs';
import { flatMap, head, uniqueId } from 'lodash-es';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import type { ComponentSizes } from 'utils/types';

import { menuStyle, optionStyle } from './SelectMenu.style';
import type { SelectOption } from '../../types';
import type { ListSelection } from 'components/List';
import List, { ListItem, ListItemText, ListSection } from 'components/List';
import { LIST_ITEM_HEIGHT, MAX_NON_VIRTUALIZED_ITEMS_SELECT } from 'components/List/utils';
import { SELECT_ALL_OPTION } from 'components/Select/constants';
import type { TextInputBaseProps } from 'components/TextInputBase';

export type SelectMenuProps = {
  filteredOptions: SelectOption[];
  handleOptionClick: (option: SelectOption) => void;
  selectedOption: SelectOption;
  isLoading?: boolean;
  isVirtualized?: boolean;
  hasSelectAllOption?: boolean;
  size?: ComponentSizes;
  sx?: CSSObject;
} & Pick<TextInputBaseProps, 'status'>;

const SelectMenu = forwardRef<HTMLUListElement, SelectMenuProps>((props, ref) => {
  const {
    filteredOptions,
    handleOptionClick,
    selectedOption,
    isLoading,
    isVirtualized,
    size = 'normal',
    hasSelectAllOption = false,
  } = props;
  const myRef = useRef<HTMLUListElement>(null);
  const combinedRefs = useCombinedRefs(myRef, ref);
  const listHeight = MAX_NON_VIRTUALIZED_ITEMS_SELECT * LIST_ITEM_HEIGHT[size]; // 40 is the height of compact list item and we want to show 5 on render

  const executeScroll = () =>
    myRef.current?.scrollIntoView &&
    myRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' });

  const onSelectionChange = useCallback(
    (keys: ListSelection) => {
      const keyFound = String(head(Array.from(keys)));
      if (keyFound === SELECT_ALL_OPTION.value) {
        handleOptionClick(SELECT_ALL_OPTION);
      } else {
        const optionFound = flatMap(filteredOptions, (o) => o.options || o).find(
          (o) => String(o.value) === keyFound
        );
        optionFound && handleOptionClick(optionFound);
      }
    },
    [filteredOptions, handleOptionClick]
  );

  useEffect(() => {
    executeScroll();
  }, [selectedOption]);

  const renderOptions = () =>
    filteredOptions.length > 0 ? (
      <List
        label={uniqueId('menu_list')}
        ref={combinedRefs}
        height={listHeight}
        isVirtualized={isVirtualized && filteredOptions.length > MAX_NON_VIRTUALIZED_ITEMS_SELECT}
        onSelectionChange={onSelectionChange}
        selectedKeys={[selectedOption.value]}
        disabledKeys={filteredOptions.filter((o) => o.isDisabled).map((o) => o.value)}
      >
        {hasSelectAllOption ? (
          <ListItem
            rowSize={size}
            key={SELECT_ALL_OPTION.value}
            textValue={SELECT_ALL_OPTION.label}
          >
            <ListItemText>{SELECT_ALL_OPTION.label}</ListItemText>
          </ListItem>
        ) : null}
        {filteredOptions.map((option) => {
          if (option.options && option.options?.length > 0) {
            return (
              <ListSection key={option.value} title={option.value}>
                {option.options.map((o) => (
                  <ListItem rowSize={size} key={o.value} textValue={o.label}>
                    <ListItemText description={o.helperText}>{o.label}</ListItemText>
                  </ListItem>
                ))}
              </ListSection>
            );
          }

          return (
            <ListItem rowSize={size} key={option.value} textValue={option.label}>
              <ListItemText description={option.helperText}>{option.label}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    ) : (
      <div css={optionStyle({ isSelected: false, hasNoResultsExist: true })}>No options</div>
    );

  return (
    <div css={menuStyle({ ...props, height: listHeight })} tabIndex={-1}>
      {isLoading ? (
        <div css={optionStyle({ isSelected: false, hasNoResultsExist: true })}>Loading...</div>
      ) : (
        renderOptions()
      )}
    </div>
  );
});

SelectMenu.displayName = 'SelectMenu';

export default SelectMenu;
