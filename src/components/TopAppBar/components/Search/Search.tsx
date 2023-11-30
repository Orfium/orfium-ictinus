import type { FCC } from 'react';
import React from 'react';

import { customInputStyle, searchWrapper } from './Search.style';
import { useTheme } from '../../../../index';
import { iconWrapperStyle } from '../../../TextField/TextField.style';
import Icon from 'components/Icon';

export type SearchProps = {
  searchPlaceholder: string;
  searchDefaultValue: string;
  onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isSearchDisabled?: boolean;
} & { isDark?: boolean };

const Search: FCC<SearchProps> = ({
  searchPlaceholder = 'Search',
  searchDefaultValue = '',
  onSearchHandler,
  onKeyPressHandler,
  isSearchDisabled = false,
  isDark = false,
}) => {
  const theme = useTheme();

  return (
    <div aria-disabled={isSearchDisabled} css={searchWrapper(isDark)}>
      <div css={iconWrapperStyle({ iconPosition: 'left' })}>
        <Icon
          name="search"
          color={isDark ? theme.globals.oldColors.white : theme.utils.getColor('lightGrey', 650)}
          size={20}
        />
      </div>
      <input
        readOnly={false}
        css={customInputStyle(searchPlaceholder, isDark)}
        placeholder={searchPlaceholder}
        defaultValue={searchDefaultValue}
        id="top-nav-search"
        data-testid="top-nav-search"
        disabled={false}
        onChange={onSearchHandler}
        onKeyPress={onKeyPressHandler}
      />
    </div>
  );
};

export default Search;
