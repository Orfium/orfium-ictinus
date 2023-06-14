import useTheme from 'hooks/useTheme';
import React from 'react';
import { useMemo } from 'react';
import { generateTestDataId } from 'utils/helpers';

import { textFieldWrapper, iconWrapper } from './SearchInput.style';
import Icon from '../../../Icon';
import Loader from '../../../Loader';
import TextField from '../../../TextField';

export type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  isLoading?: boolean;
};

const SearchInput = ({ onChange, value, dataTestId, isLoading }: SearchInputProps) => {
  const theme = useTheme();

  const suffix = useMemo(
    () => (
      <div css={iconWrapper()}>
        {isLoading && <Loader />}
        <Icon size={20} name="search" color={theme.utils.getColor('lightGrey', 650)} />
      </div>
    ),
    [theme.utils, isLoading]
  );

  return (
    <div css={textFieldWrapper()(theme)}>
      <TextField
        autoFocus
        onChange={onChange}
        data-testid={generateTestDataId('filter-input', dataTestId)}
        status={{ type: 'normal' }}
        placeholder="Search"
        value={value}
        suffix={suffix}
      />
    </div>
  );
};

export default SearchInput;
