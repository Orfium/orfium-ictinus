import React, { FC } from 'react';

import { useTheme } from '../../../../index';
import Icon from '../../../Icon';
import { iconWrapperStyle } from '../../../TextField/TextField.style';
import { customInputStyle, searchWrapper } from './Search.style';

export type SearchProps = {
  searchPlaceholder: string;
  searchDefaultValue: string;
  onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isSearchDisabled?: boolean;
};

const Search: FC<SearchProps & { dark?: boolean }> = ({
  searchPlaceholder = 'Search',
  searchDefaultValue = '',
  onSearchHandler,
  onKeyPressHandler,
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
        data-testid={'top-nav-search'}
        disabled={false}
        onChange={onSearchHandler}
        onKeyPress={onKeyPressHandler}
      />
    </div>
  );
};

export default Search;
