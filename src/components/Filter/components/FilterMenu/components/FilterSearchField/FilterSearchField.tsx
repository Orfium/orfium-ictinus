import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';
import { generateTestDataId } from 'utils/helpers';

import { textFieldWrapper } from './FilterSearchField.style';
import type { FilterProps } from 'components/Filter/Filter.types';
import Icon from 'components/Icon';
import MultiTextFieldBase from 'components/MultiTextFieldBase';
import ProgressIndicator from 'components/ProgressIndicator';
import TextField from 'components/TextField';

export type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
} & Pick<
  FilterProps,
  | 'selectedFilter'
  | 'isMulti'
  | 'isSearchable'
  | 'isLoading'
  | 'onClear'
  | 'onFilterDelete'
  | 'dataTestPrefixId'
>;

const FilterSearchField = ({
  onChange,
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
  const theme = useTheme();

  const suffix = useMemo(
    () =>
      isLoading ? (
        <ProgressIndicator type="circular" dataTestPrefixId="search" />
      ) : (
        <Icon
          /** @TODO replace tokens with search tokens once Search component is revisited */
          size={theme.tokens.icon.get('size.3')}
          name="search"
          color={theme.tokens.colors.get('textColor.default.secondary')}
        />
      ),
    [isLoading, theme.tokens.colors, theme.tokens.icon]
  );

  return (
    <div css={textFieldWrapper()}>
      {!isMulti && isSearchable && (
        <TextField
          autoFocus
          dataTestPrefixId={`${dataTestPrefixId}_filter_search`}
          onChange={onChange}
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
      {isMulti && (
        <MultiTextFieldBase
          //@ts-ignore
          selectedOptions={selectedFilter || []}
          dataTestPrefixId={`${dataTestPrefixId}_filter_search`}
          onInput={onChange}
          onOptionDelete={onFilterDelete}
          onClearAllOptions={onClear}
          isInteractive={false}
          value={value}
          label="Search"
          placeholder="Search"
          isResponsive
          isLoading={isLoading}
          sx={{
            textField: { paddingTop: '12px', paddingBottom: '12px', width: '100%' },
            wrapper: { boxShadow: 'none', borderRadius: 0 },
          }}
          // ref={filterInputRef}
        />
      )}
    </div>
  );
};

export default FilterSearchField;
