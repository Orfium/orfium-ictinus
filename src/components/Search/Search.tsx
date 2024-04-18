import useEscape from 'hooks/useEscape';
import useTheme from 'hooks/useTheme';
import React from 'react';
import isEqual from 'react-fast-compare';

import { filterStyles, getSX, searchContainer, searchInputStyles } from './Search.style';
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

  const isClearVisible = value && (value as string).length > 0;

  const hasFilter = Boolean(
    filterConfig?.defaultValue && filterConfig?.label && filterConfig?.items
  );

  useEscape(() => {
    if (onClear) {
      onClear();
    }
  });

  return (
    <div css={searchContainer()} data-testid="search_container">
      <TextInputBase
        dataTestPrefixId={dataTestPrefixId}
        isDisabled={isDisabled}
        sx={getSX({ hasFilter, isDisabled, sx })(theme)}
      >
        <Icon
          name="search"
          size={theme.dimension.sizing.get('icon.md')}
          color={theme.tokens.colors.get('textColor.default.secondary')}
        />
        <div css={searchInputStyles()}>
          <input
            type="search"
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
            size={theme.dimension.sizing.get('icon.md')}
            color={theme.tokens.colors.get('textColor.default.secondary')}
            onClick={() => {
              onClear();
            }}
            dataTestId="search-clear"
          />
        )}
      </TextInputBase>
      {hasFilter && (
        <div css={filterStyles()}>
          <Filter
            {...filterConfig}
            isDisabled={isDisabled}
            dataTestPrefixId={`${dataTestPrefixId}_search_filter`}
          />
        </div>
      )}
    </div>
  );
});

Search.displayName = 'Search';

export default React.memo(Search, isEqual);
