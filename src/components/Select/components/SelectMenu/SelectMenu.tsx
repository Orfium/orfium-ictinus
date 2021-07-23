import React, { useEffect, useRef } from 'react';

import List from '../../../List';
import { SelectOption } from '../../Select';
import { menuStyle, optionStyle } from './SelectMenu.style';

const SelectMenu = ({
  size = 'sm',
  status = 'normal',
  filteredOptions,
  handleOptionClick,
  selectedOption,
  isLoading,
  isVirtualized,
  searchTerm,
}: {
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
}) => {
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
        isVirtualized={isVirtualized}
        ref={myRef}
        handleOptionClick={handleOptionClick}
        searchTerm={searchTerm}
        selectedItem={selectedOption}
      />
    ) : (
      <div css={optionStyle({ selected: false, noResultsExist: true })}>No options</div>
    );

  return (
    <div css={menuStyle({ status, size, itemsCount: filteredOptions.length })}>
      {isLoading ? (
        <div css={optionStyle({ selected: false, noResultsExist: true })}>Loading...</div>
      ) : (
        renderOptions()
      )}
    </div>
  );
};

export default SelectMenu;
