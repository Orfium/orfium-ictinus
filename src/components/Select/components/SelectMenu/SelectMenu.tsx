import useCombinedRefs from 'hooks/useCombinedRefs';
import React, { forwardRef, useEffect, useRef } from 'react';

import { menuStyle, optionStyle } from './SelectMenu.style';
import { SelectOption } from '../../types';
import List from 'components/List';
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

  const executeScroll = () => myRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' });

  useEffect(() => {
    executeScroll();
  }, [selectedOption]);

  const renderOptions = () =>
    filteredOptions.length > 0 ? (
      <List
        ref={combinedRefs}
        data={filteredOptions}
        rowSize={'small'}
        isVirtualized={isVirtualized && filteredOptions.length > MAX_NON_VIRTUALIZED_ITEMS_SELECT}
        handleOptionClick={handleOptionClick}
        searchTerm={searchTerm}
        selectedItem={selectedOption}
        defaultOption={hasSelectAllOption ? SELECT_ALL_OPTION : undefined}
      />
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
