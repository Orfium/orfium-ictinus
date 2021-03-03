/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef } from 'react';
import { jsx } from '@emotion/core';
import Highlighter from 'react-highlight-words';

import { menuStyle, optionStyle } from './SelectMenu.style';
import { SelectOption } from '../../Select';

const SelectMenu = ({
  size = 'sm',
  status = 'normal',
  filteredOptions,
  handleOptionClick,
  selectedOption,
  isLoading,
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
  searchTerm?: string;
}) => {
  const myRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => myRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' });

  useEffect(() => {
    executeScroll();
  }, [selectedOption]);

  const renderOptions = () =>
    filteredOptions.length > 0 ? (
      filteredOptions.map(option => (
        <div
          ref={selectedOption === option.value ? myRef : null}
          key={option.value}
          css={optionStyle({
            selected: selectedOption === option.value,
            size,
          })}
          onClick={() => handleOptionClick(option)}
        >
          {searchTerm ? (
            <Highlighter
              highlightClassName="search-text"
              highlightTag={'strong'}
              searchWords={[searchTerm]}
              autoEscape={true}
              textToHighlight={option.label}
            />
          ) : (
            option.label
          )}
        </div>
      ))
    ) : (
      <div css={optionStyle({ selected: false, noResultsExist: true })}>No options</div>
    );

  return (
    <div css={menuStyle({ status, size })}>
      {isLoading ? (
        <div css={optionStyle({ selected: false, noResultsExist: true })}>Loading...</div>
      ) : (
        renderOptions()
      )}
    </div>
  );
};

export default SelectMenu;
