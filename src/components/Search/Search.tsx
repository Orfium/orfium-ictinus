import useTheme from 'hooks/useTheme';
import React from 'react';
import isEqual from 'react-fast-compare';

import { filterStyles, getSX, searchContainer, searchInputStyles } from './Search.style';
import { getSearchTokens } from './Search.tokens';
import type { SearchProps } from './Search.types';
import Filter from 'components/Filter';
import Icon from 'components/Icon';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const {
    placeholder = 'Search',
    isDisabled,
    onClear,
    value,
    dataTestPrefixId = 'search',
    filterConfig,
    sx,
    ...rest
  } = props;

  const theme = useTheme();

  const tokens = getSearchTokens(theme);

  const isClearVisible = value && (value as string).length > 0;

  const hasFilter = Boolean(
    filterConfig?.defaultValue && filterConfig?.label && filterConfig?.items
  );

  return (
    <div css={searchContainer()} data-testid="search_container">
      <TextInputBase
        dataTestPrefixId={dataTestPrefixId}
        isDisabled={isDisabled}
        sx={getSX({ hasFilter, isDisabled, sx })(theme)}
      >
        <Icon name="search" size={tokens('iconSize')} color={tokens('textColor.default')} />
        <div css={searchInputStyles()}>
          <input
            css={inputStyle({ placeholder })}
            placeholder={placeholder}
            disabled={isDisabled}
            value={value}
            ref={ref}
            data-testid={`${dataTestPrefixId}_search_input`}
            {...rest}
          />
        </div>

        {isClearVisible && !isDisabled && (
          <Icon
            name="close"
            size={tokens('iconSize')}
            color={tokens('textColor.default')}
            onClick={() => {
              onClear();
            }}
            dataTestId="search-clear"
          />
        )}
      </TextInputBase>
      {hasFilter && (
        <div css={filterStyles()}>
          <Filter {...filterConfig} dataTestPrefixId={`${dataTestPrefixId}_search_filter`} />
        </div>
      )}
    </div>
  );
});

Search.displayName = 'Search';

export default React.memo(Search, isEqual);
