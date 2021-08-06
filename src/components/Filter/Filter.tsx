import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { debounce } from 'lodash';
import { useMemo } from 'react';
import React from 'react';
import { ChangeEvent } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';

import Icon from '../Icon';
import ClickAwayListener from '../utils/ClickAwayListener';
import Options from './components/Options/Options';
import SearchInput from './components/SearchInput/SearchInput';
import {
  buttonStyle,
  childrenWrapperStyle,
  buttonSpanStyle,
  labelSpanStyle,
  wrapperStyle,
  menuStyle,
} from './Filter.style';
import { FilterOption, Props } from './types';
import { getTextColor } from './utils';
import handleSearch from 'components/utils/handleSearch';

const Filter: React.FC<Props> = props => {
  const {
    items,
    onSelect,
    selectedItem,
    defaultValue,
    styleType,
    label = '',
    color,
    buttonType = 'primary',
    disabled = false,
    dataTestId,
    isSearchable = false,
    minCharactersToSearch = 0,
    onAsyncSearch,
    isLoading = false,
    isVirtualized = false,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const hasSelectedValue =
    Boolean(selectedItem?.value) && selectedItem?.value !== defaultValue.value;
  const activeCalculatedColor = calculateColorBetweenColorAndType('', 'primary');
  const calculatedColor = calculateColorBetweenColorAndType(color, buttonType);
  const iconColor = getTextColor({
    open,
    theme,
    activeCalculatedColor,
    calculatedColor,
    hasSelectedValue,
  });
  const iconName = open ? 'triangleUp' : 'triangleDown';

  const handleSelect = (option: FilterOption) => {
    setOpen(false);
    onSelect(option);
  };

  const handleChange = (event: ChangeEvent) => {
    const isAsync = typeof onAsyncSearch === 'function';

    handleSearch({
      event,
      isSearchable,
      isAsync,
      setSearchValue,
      onChange: debouncedOnChange,
      minCharactersToSearch,
    });
  };

  const filteredOptions = useMemo(() => {
    if (onAsyncSearch) {
      return items;
    }

    return items.filter(
      item => !searchValue || item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, items, onAsyncSearch]);

  const shouldDisplayDefaultOption = searchValue === '' && !!items.length;

  const handleOpen = () => {
    setSearchValue('');
    setOpen(!open);
  };

  const debouncedOnChange = React.useCallback(
    debounce((value: string) => {
      onAsyncSearch?.(value);
    }, 650),
    []
  );

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={wrapperStyle()} data-testid={dataTestId}>
        <button
          data-testid={generateTestDataId('filter', dataTestId)}
          css={buttonStyle({
            calculatedColor,
            activeCalculatedColor,
            buttonType,
            disabled,
            open,
            styleType,
            hasSelectedValue,
          })}
          onClick={handleOpen}
          disabled={disabled}
        >
          <span css={buttonSpanStyle()}>
            <span css={childrenWrapperStyle()}>
              <span css={labelSpanStyle(open, hasSelectedValue)}>
                {label}:<span>{selectedItem?.label ?? defaultValue.label}</span>
              </span>
            </span>

            <Icon name={iconName} color={iconColor} size={6} />
          </span>
        </button>
        {open && (
          <div css={menuStyle()(theme)} data-testid={generateTestDataId('filter-menu', dataTestId)}>
            {isSearchable && (
              <SearchInput
                value={searchValue}
                onChange={handleChange}
                dataTestId={dataTestId}
                isLoading={isLoading}
              />
            )}
            <Options
              dataTestId={dataTestId}
              items={filteredOptions}
              isVirtualized={isVirtualized}
              defaultValue={defaultValue}
              selectedItem={selectedItem}
              onSelect={handleSelect}
              shouldDisplayDefaultOption={shouldDisplayDefaultOption}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Filter;
