import React from 'react';

import { FilterOption, Props as FilterProps } from '../../types';
import Options from '../Options/Options';
import { optionsWrapper, textFieldWrapper } from './MultiFilter.style';
import { menuStyle } from 'components/Filter/Filter.style';
import MultiTextFieldBase from 'components/MultiTextFieldBase';
import { SELECT_ALL_OPTION } from 'components/Select/constants';
import { SelectOption } from 'components/Select/Select';

type Props = Pick<FilterProps, 'selectedItems' | 'items' | 'isLoading' | 'hasSelectAllOption'> & {
  onInput?: React.EventHandler<any>;
  onOptionDelete: (option?: FilterOption | undefined) => void;
  onClearAllOptions: () => void;
  onOptionClick: (option: FilterOption) => void;
  searchValue: string;
};

const MultiFilter: React.FC<Props> = ({
  selectedItems,
  items,
  onInput,
  onOptionDelete,
  onClearAllOptions,
  onOptionClick,
  searchValue,
  isLoading,
  hasSelectAllOption,
}) => {
  const filterInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    filterInputRef?.current?.focus();
  };

  return (
    <div css={menuStyle()}>
      <div css={textFieldWrapper()} onClick={handleClick}>
        <MultiTextFieldBase
          selectedOptions={selectedItems}
          onInput={onInput}
          onOptionDelete={onOptionDelete as (option?: string | SelectOption) => void}
          onClearAllOptions={onClearAllOptions}
          isInteractive={false}
          value={searchValue}
          placeholder="Search"
          isResponsive
          isLoading={isLoading}
          ref={filterInputRef}
        />
      </div>
      <div css={optionsWrapper()}>
        <Options
          items={items}
          onSelect={onOptionClick}
          defaultValue={SELECT_ALL_OPTION}
          shouldDisplayDefaultOption={hasSelectAllOption ?? false}
        />
      </div>
    </div>
  );
};

export default MultiFilter;
