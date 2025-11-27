import { vars } from '@orfium/tokens';
import type {
  FilterProps,
  MultiFilterProps,
  SingleFilterProps,
} from 'components/Filter/Filter.types';
import Icon from 'components/Icon';
import MultiTextFieldBase from 'components/MultiTextFieldBase';
import ProgressIndicator from 'components/ProgressIndicator';
import TextField from 'components/TextField';
import React, { useMemo } from 'react';
import { generateTestDataId } from 'utils/helpers';
import { textFieldWrapper } from './FilterSearchField.style';

export type SearchInputProps = {
  value: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
} & Pick<
  FilterProps,
  'isSearchable' | 'isLoading' | 'onClear' | 'onFilterDelete' | 'dataTestPrefixId'
> &
  (SingleFilterProps | MultiFilterProps);

const FilterSearchField = ({
  onInputChange,
  value,
  dataTestId,
  isLoading,
  isMulti,
  isSearchable,
  onClear,
  selectedFilter,
  onFilterDelete,
  dataTestPrefixId,
}: SearchInputProps) => {
  const suffix = useMemo(
    () =>
      isLoading ? (
        <ProgressIndicator type="circular" dataTestPrefixId="search" />
      ) : (
        <Icon
          /** @TODO replace tokens with search tokens once Search component is revisited */
          size={vars.sizing['5']}
          name="search"
          color={vars.color.text.default.secondary}
        />
      ),
    [isLoading]
  );

  return (
    <div css={textFieldWrapper()}>
      {!isMulti && isSearchable && (
        <TextField
          autoFocus
          dataTestPrefixId={`${dataTestPrefixId}_filter_search`}
          onChange={onInputChange}
          data-testid={generateTestDataId('filter-input', dataTestId)}
          status={{ type: 'normal' }}
          label="Search"
          placeholder="Search"
          value={value}
          suffix={suffix}
          sx={{
            wrapper: {
              '&, &:focus-within, &:hover': {
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'white',
              },
            },
          }}
        />
      )}
      {isMulti === true && (
        <MultiTextFieldBase
          autoFocus
          selectedOptions={selectedFilter || []}
          dataTestPrefixId={`${dataTestPrefixId}_filter_search`}
          onInput={onInputChange}
          onOptionDelete={onFilterDelete}
          onClearAllOptions={onClear}
          isInteractive={false}
          value={value}
          label="Search"
          placeholder="Search"
          isResponsive
          isLoading={isLoading}
          sx={{
            textField: { paddingTop: '12px', paddingBottom: '12px', width: '100%', minWidth: '' },
            wrapper: { boxShadow: 'none', borderRadius: 0, background: 'white', minWidth: '' },
          }}
        />
      )}
    </div>
  );
};

export default FilterSearchField;
