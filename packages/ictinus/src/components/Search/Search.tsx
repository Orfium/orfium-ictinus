import useEscape from 'hooks/useEscape';
import useTheme from 'hooks/useTheme';
import React from 'react';
import isEqual from 'react-fast-compare';

import { vars } from '@orfium/tokens';
import Filter from 'components/Filter';
import Icon from 'components/Icon';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';
import { filterStyles, getSX, searchContainer, searchInputStyles } from './Search.style';
import type { SearchProps } from './Search.types';

const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const {
    placeholder = 'Search',
    isDisabled,
    onClear,
    value,
    dataTestPrefixId = 'search',
    filterConfig,
    sx,
    children,
    ...rest
  } = props;

  const theme = useTheme();

  const isClearVisible = value && (value as string).length > 0;

  const hasFilter = Boolean(filterConfig?.defaultValue && filterConfig?.label);

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
        <Icon name="search" size={vars.sizing['5']} color={vars.color.text.default.secondary} />
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
            size={vars.sizing['5']}
            color={vars.color.text.default.secondary}
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
          >
            {children}
          </Filter>
        </div>
      )}
    </div>
  );
});

Search.displayName = 'Search';

export default React.memo(Search, isEqual);
