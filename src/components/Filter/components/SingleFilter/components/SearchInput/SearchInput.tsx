import useTheme from 'hooks/useTheme';
import React from 'react';
import { useMemo } from 'react';
import { generateTestDataId } from 'utils/helpers';

import { textFieldWrapper, iconWrapper } from './SearchInput.style';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import TextField from 'components/TextField';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  isLoading?: boolean;
}

const SearchInput: React.FC<Props> = ({ onChange, value, dataTestId, isLoading }) => {
  const theme = useTheme();

  const rightIcon = useMemo(
    () => (
      <div css={iconWrapper()}>
        {isLoading && <Loader />}
        <Icon size={20} name="search" color={theme.utils.getColor('lightGrey', 650)} />
      </div>
    ),
    [open, theme.utils, isLoading]
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
