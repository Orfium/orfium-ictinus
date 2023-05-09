import React from 'react';

import { FilterOption, Props as FilterProps } from '../../types';
import Options from '../Options/Options';
import { optionsWrapper, textFieldWrapper } from './MultiFilter.style';
import { menuStyle } from 'components/Filter/Filter.style';
import MultiSelectBase from 'components/MultiSelectBase/MultiSelectBase';
import { SELECT_ALL_OPTION } from 'components/Select/constants';

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
  hasSelectAllOption = false
}) => {
  return (
    <div css={menuStyle()}>
      <div css={textFieldWrapper()}>
        <MultiSelectBase
          selectedOptions={selectedItems}
          onInput={onInput}
          onOptionDelete={onOptionDelete}
          onClearAllOptions={onClearAllOptions}
          isInteractive={false}
          value={searchValue}
          placeholder="Search"
          isResponsive
          isLoading={isLoading}
        />
      </div>
      <div css={optionsWrapper()}>
        <Options
          items={items}
          onSelect={onOptionClick}
          defaultValue={SELECT_ALL_OPTION}
          shouldDisplayDefaultOption={hasSelectAllOption}
        />
      </div>
    </div>
  );
};

export default MultiFilter;
