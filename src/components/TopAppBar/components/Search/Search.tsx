/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { customInputStyle, searchWrapper } from './Search.style';
import { iconWrapperStyle } from '../../../TextField/TextField.style';
import Icon from '../../../Icon';
import { useTheme } from '../../../../index';

export type SearchProps = {
  searchPlaceholder: string;
  onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<SearchProps & { dark?: boolean }> = ({
  searchPlaceholder = 'Search',
  onSearchHandler,
  dark = false,
}) => {
  const theme = useTheme();

  return (
    <div css={searchWrapper(dark)}>
      <div css={iconWrapperStyle({ iconPosition: 'left' })}>
        <Icon name={'search'} color={dark ? theme.palette.white : theme.palette.black} size={16} />{' '}
      </div>
      <input
        readOnly={false}
        css={customInputStyle(searchPlaceholder, dark)}
        placeholder={searchPlaceholder}
        id={'top-nav-search'}
        disabled={false}
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;
