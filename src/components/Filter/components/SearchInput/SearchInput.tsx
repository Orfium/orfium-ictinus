/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import * as React from 'react';
import { useMemo } from 'react';
import { generateTestDataId } from 'utils/helpers';

import Icon from '../../../Icon';
import Loader from '../../../Loader';
import TextField from '../../../TextField';
import { textFieldWrapper, iconWrapper } from './SearchInput.style';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  isLoading?: boolean;
}

const SearchInput = ({ onChange, value, dataTestId, isLoading }: Props) => {
  const theme = useTheme();

  const rightIcon = useMemo(
    () => (
      <div css={iconWrapper()}>
        {isLoading && <Loader />}
        <Icon size={20} name="search" color={theme.utils.getColor('lightGray', 500)} />
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
