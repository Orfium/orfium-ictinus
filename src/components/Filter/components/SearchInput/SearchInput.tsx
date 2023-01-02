import useTheme from 'hooks/useTheme';
import React from 'react';
import { useMemo } from 'react';
import { rem } from 'theme/utils';
import { generateTestDataId } from 'utils/helpers';

import Icon from '../../../Icon';
import Loader from '../../../Loader';
import TextField from '../../../TextField';
import { textFieldWrapper, iconWrapper } from './SearchInput.style';

export type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  isLoading?: boolean;
};

const SearchInput = ({ onChange, value, dataTestId, isLoading }: SearchInputProps) => {
  const theme = useTheme();

  const rightIcon = useMemo(
    () => (
      <div css={iconWrapper()}>
        {isLoading && <Loader />}
        <Icon size={rem(20)} name="search" color={theme.utils.getColor('lightGrey', 650)} />
      </div>
    ),
    [theme.utils, isLoading]
  );

  return (
    <div css={textFieldWrapper()(theme)}>
      <TextField
        autoFocus
        styleType={'filled'}
        onChange={onChange}
        data-testid={generateTestDataId('filter-input', dataTestId)}
        status="normal"
        placeholder="Search"
        value={value}
        rightIcon={rightIcon}
      />
    </div>
  );
};

export default SearchInput;
