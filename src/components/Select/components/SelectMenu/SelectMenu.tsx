/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { menuStyle, optionStyle } from './SelectMenu.style';
import { SelectOption } from '../../Select';
import { useEffect, useRef } from 'react';

const SelectMenu = ({
  size = 'sm',
  status = 'normal',
  filteredOptions,
  handleOptionClick,
  selectedOption,
}: {
  /** Sets the size of the menu */
  size?: 'md' | 'sm';
  /** The status of the button regarding the status which is in - default normal */
  status?: 'success' | 'normal' | 'hint' | 'error';
  filteredOptions: SelectOption[];
  handleOptionClick: (option: SelectOption) => void;
  selectedOption: string | number;
}) => {
  const myRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => myRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' });

  useEffect(() => {
    executeScroll();
  }, [selectedOption]);

  return (
    <div css={menuStyle({ status, size })}>
      {filteredOptions.length > 0 ? (
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
            {option.label}
          </div>
        ))
      ) : (
        <div css={optionStyle({ selected: false, noResultsExist: true })}>No options</div>
      )}
    </div>
  );
};

export default SelectMenu;
