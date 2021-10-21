import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { debounce } from 'lodash';
import React, { useMemo } from 'react';
import { ChangeEvent } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';

import { BASE_SHADE, pickTextColorFromSwatches } from '../../theme/palette';
import Icon from '../Icon';
import ClickAwayListener from '../utils/ClickAwayListener';
import Options from './components/Options/Options';
import SearchInput from './components/SearchInput/SearchInput';
import {
  buttonSpanStyle,
  buttonStyle,
  buttonWrapperStyle,
  childrenWrapperStyle,
  dividedButtonStyle,
  divider,
  labelSpanStyle,
  menuStyle,
  valueSpanStyle,
  wrapperStyle,
} from './Filter.style';
import { FilterOption, Props } from './types';
import { getTextColor } from './utils';
import handleSearch from 'components/utils/handleSearch';

const Filter = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    items,
    onSelect,
    selectedItem,
    defaultValue,
    styleType,
    label = '',
    buttonType = 'primary',
    filterType = 'preset',
    disabled = false,
    dataTestId,
    isSearchable = false,
    minCharactersToSearch = 0,
    onAsyncSearch,
    isLoading = false,
    isVirtualized = false,
    onClear = () => {},
  } = props;
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const hasSelectedValue =
    Boolean(selectedItem?.value) && selectedItem?.value !== defaultValue.value;
  const calculatedColor = calculateColorBetweenColorAndType('', buttonType);

  // The active calculated color is the base of the defined color. So till today the base is defined as '500'.
  const activeCalculatedColor = calculateColorBetweenColorAndType(
    `${calculatedColor.color}-${BASE_SHADE}`,
    buttonType
  );
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
    }, 400),
    []
  );

  const buttonStyleProps = {
    calculatedColor,
    activeCalculatedColor,
    buttonType,
    disabled,
    open,
    styleType,
    hasSelectedValue,
    filterType,
  };

  const pickIconColor = () => {
    if (open) {
      return theme.utils.getColor('neutralWhite', 100);
    }
    if (hasSelectedValue) {
      return theme.utils.getColor(calculatedColor.color, 550);
    }

    return theme.utils.getColor('darkGrey', 400);
  };

  /**
   * for 'added' type design team decided that is not needed therefore in order not having to maintain
   * one more special case we dont render it
   **/
  if (filterType === 'added' && styleType === 'transparent') {
    throw new Error('This filterType and styleType is not supported');
  }

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={wrapperStyle()} data-testid={dataTestId}>
        <button
          ref={ref}
          data-testid={generateTestDataId('filter', dataTestId)}
          onClick={handleOpen}
          disabled={disabled}
          css={buttonWrapperStyle(buttonStyleProps)}
        >
          <div css={buttonStyle(buttonStyleProps)}>
            <span css={buttonSpanStyle()}>
              <span css={childrenWrapperStyle()}>
                <span css={labelSpanStyle(open, hasSelectedValue)}>
                  <div>{label && `${label} :`}</div>
                  <span css={valueSpanStyle()}>{selectedItem?.label ?? defaultValue.label}</span>
                </span>
              </span>

              <Icon name={iconName} color={iconColor} size={6} />
            </span>
          </div>

          {filterType === 'added' && (
            <>
              <span css={divider(buttonStyleProps)} />
              <div css={dividedButtonStyle(buttonStyleProps)}>
                <Icon
                  size={19}
                  name={'closeTag'}
                  color={pickIconColor()}
                  onClick={e => {
                    e.stopPropagation();
                    onClear();
                  }}
                />
              </div>
            </>
          )}
        </button>
        {open && (
          <div css={menuStyle()} data-testid={generateTestDataId('filter-menu', dataTestId)}>
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
});

export default Filter;
