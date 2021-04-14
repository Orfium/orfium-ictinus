import React, { FC } from 'react';
import { customInputStyle, searchWrapper } from './Search.style';
import { iconWrapperStyle } from '../../../TextField/TextField.style';
import Icon from '../../../Icon';
import { useTheme } from '../../../../index';

export type SearchProps = {
  searchPlaceholder: string;
  searchDefaultValue: string;
  onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchDisabled?: boolean;
};

const Search: FC<SearchProps & { dark?: boolean }> = ({
  searchPlaceholder = 'Search',
  searchDefaultValue = '',
  onSearchHandler,
  isSearchDisabled = false,
  dark = false,
}) => {
  const theme = useTheme();

  return (
    <div aria-disabled={isSearchDisabled} css={searchWrapper(dark)}>
      <div css={iconWrapperStyle({ iconPosition: 'left' })}>
        <Icon name={'search'} color={dark ? theme.palette.white : theme.palette.black} size={16} />{' '}
      </div>
      <input
        readOnly={false}
        css={customInputStyle(searchPlaceholder, dark)}
        placeholder={searchPlaceholder}
        defaultValue={searchDefaultValue}
        id={'top-nav-search'}
        disabled={false}
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;
