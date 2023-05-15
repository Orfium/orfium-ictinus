import React, { useEffect, useRef } from 'react';

import { menuStyle, optionStyle } from './SelectMenu.style';
import { SelectOption } from '../../Select';
import List from 'components/List';
import { MAX_NON_VIRTUALIZED_ITEMS_SELECT } from 'components/List/utils';
import { SELECT_ALL_OPTION } from 'components/Select/constants';

export type SelectMenuProps = {
  /** Sets the size of the menu */
  size?: 'md' | 'sm';
  /** The status of the button regarding the status which is in - default normal */
  status?: 'success' | 'normal' | 'hint' | 'error';
  filteredOptions: SelectOption[];
  handleOptionClick: (option: SelectOption) => void;
  selectedOption: string | number;
  isLoading?: boolean;
  isVirtualized?: boolean;
  searchTerm?: string;
  hasSelectAllOption?: boolean;
};

const SelectMenu: React.FC<SelectMenuProps> = (props) => {
  const {
    filteredOptions,
    handleOptionClick,
    selectedOption,
    isLoading,
    isVirtualized,
    searchTerm,
    hasSelectAllOption = false,
  } = props;
  const myRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => myRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' });

  useEffect(() => {
    executeScroll();
  }, [selectedOption]);

  const renderOptions = () =>
    filteredOptions.length > 0 ? (
      <List
        data={filteredOptions}
        rowSize={'small'}
        isVirtualized={isVirtualized && filteredOptions.length > MAX_NON_VIRTUALIZED_ITEMS_SELECT}
        ref={myRef}
        handleOptionClick={handleOptionClick}
        searchTerm={searchTerm}
        selectedItem={selectedOption}
        defaultOption={hasSelectAllOption ? SELECT_ALL_OPTION : undefined}
      />
    ) : (
      <div css={optionStyle({ isSelected: false, hasNoResultsExist: true })}>No options</div>
    );

  return (
    <div css={menuStyle(props)}>
      {isLoading ? (
        <div css={optionStyle({ isSelected: false, hasNoResultsExist: true })}>Loading...</div>
      ) : (
        renderOptions()
      )}
    </div>
  );
};

export default SelectMenu;
