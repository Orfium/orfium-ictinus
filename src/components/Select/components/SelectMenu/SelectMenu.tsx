import useCombinedRefs from 'hooks/useCombinedRefs';
import { flatMap, head } from 'lodash';
import uniqueId from 'lodash/uniqueId';
import React, { forwardRef, useEffect, useRef } from 'react';

import { menuStyle, optionStyle } from './SelectMenu.style';
import { SelectOption } from '../../types';
import List, { ListItem, ListItemText, ListSection } from 'components/List';
import { MAX_NON_VIRTUALIZED_ITEMS_SELECT } from 'components/List/utils';
import { SELECT_ALL_OPTION } from 'components/Select/constants';
import { TextInputBaseProps } from 'components/TextInputBase';

export type SelectMenuProps = {
  filteredOptions: SelectOption[];
  handleOptionClick: (option: SelectOption) => void;
  selectedOption: SelectOption;
  isLoading?: boolean;
  isVirtualized?: boolean;
  searchTerm?: string;
  hasSelectAllOption?: boolean;
} & Pick<TextInputBaseProps, 'status'>;

const SelectMenu = forwardRef<HTMLUListElement, SelectMenuProps>((props, ref) => {
  const {
    filteredOptions,
    handleOptionClick,
    selectedOption,
    isLoading,
    isVirtualized,
    searchTerm,
    hasSelectAllOption = false,
  } = props;
  const myRef = useRef<HTMLUListElement>(null);
  const combinedRefs = useCombinedRefs(myRef, ref);

  const executeScroll = () =>
    myRef.current?.scrollIntoView &&
    myRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' });

  useEffect(() => {
    executeScroll();
  }, [selectedOption]);

  const renderOptions = () =>
    filteredOptions.length > 0 ? (
      <List
        label={uniqueId('menu_list')}
        ref={combinedRefs}
        height={5 * 40}
        isVirtualized={isVirtualized && filteredOptions.length > MAX_NON_VIRTUALIZED_ITEMS_SELECT}
        onSelectionChange={(keys) => {
          const keyFound = String(head(Array.from(keys)));
          if (keyFound === SELECT_ALL_OPTION.value) {
            handleOptionClick(SELECT_ALL_OPTION);
          } else {
            const optionFound = flatMap(filteredOptions, (o) => o.options || o).find(
              (o) => String(o.value) === keyFound
            );
            optionFound && handleOptionClick(optionFound);
          }
        }}
        // searchTerm={searchTerm}
        selectedKeys={[selectedOption.value]}
        disabledKeys={filteredOptions.filter((o) => o.isDisabled).map((o) => o.value)}
      >
        {hasSelectAllOption ? (
          <ListItem
            key={SELECT_ALL_OPTION.value}
            textValue={SELECT_ALL_OPTION.label}
            rowSize={'compact'}
          >
            <ListItemText>{SELECT_ALL_OPTION.label}</ListItemText>
          </ListItem>
        ) : null}
        {filteredOptions.map((option) => {
          if (option.options && option.options?.length > 0) {
            return (
              <ListSection key={option.value} title={option.value} rowSize={'compact'}>
                {option.options.map((o) => (
                  <ListItem key={o.value} textValue={o.label}>
                    <ListItemText description={o.helperText}>{o.label}</ListItemText>
                  </ListItem>
                ))}
              </ListSection>
            );
          }

          return (
            <ListItem key={option.value} textValue={option.label} rowSize={'compact'}>
              <ListItemText description={option.helperText}>{option.label}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    ) : (
      <div css={optionStyle({ isSelected: false, hasNoResultsExist: true })}>No options</div>
    );

  return (
    <div css={menuStyle(props)} tabIndex={-1}>
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
