import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { debounce } from 'lodash';
import React, { useMemo } from 'react';
import { ChangeEvent } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';

import { BASE_SHADE, pickTextColorFromSwatches } from '../../theme/palette';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
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
import { FilterOption, FilterType, Props, StyleType } from './types';
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

  const iconColor = getTextColor({
    open,
    theme,
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

  /**
   * for 'added' type design team decided that is not needed therefore in order not having to maintain
   * one more special case we dont render it
   **/
  if (filterType === 'added' && styleType === 'transparent') {
    throw new Error('This filterType and styleType is not supported');
  }

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <FilterBase
        ref={ref}
        dataTestId={generateTestDataId('filter', dataTestId)}
        handleOpen={handleOpen}
        disabled={disabled}
        onClear={onClear}
        selectedItemLabel={selectedItem?.label ?? defaultValue.label}
        open={open}
        hasSelectedValue={hasSelectedValue}
        label={label}
        iconName={iconName}
        iconColor={iconColor}
        filterType={filterType}
        buttonType={buttonType}
        styleType={styleType}
      >
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
              isSearchable={isSearchable}
              selectedItem={selectedItem}
              onSelect={handleSelect}
              shouldDisplayDefaultOption={shouldDisplayDefaultOption}
            />
          </div>
        )}
      </FilterBase>
    </ClickAwayListener>
  );
});

// eslint-disable-next-line react/display-name
export const FilterBase = React.forwardRef<
  HTMLButtonElement,
  {
    dataTestId: string;
    disabled: boolean;
    handleOpen: () => void;
    onClear: () => void;
    selectedItemLabel?: string;
    open: boolean;
    hasSelectedValue: boolean;
    label?: string | undefined;
    iconName: AcceptedIconNames;
    iconColor: string;
    iconSize?: number;
    /** Defines the style type of the button */
    styleType: StyleType;
    /** Defines the filter type */
    filterType?: FilterType;
    buttonType?: 'primary' | 'secondary';
  }
>((props, ref) => {
  const {
    dataTestId,
    handleOpen,
    disabled,
    onClear,
    selectedItemLabel,
    open,
    hasSelectedValue,
    label,
    iconName,
    iconColor,
    iconSize = 6,
    buttonType = 'primary',
    filterType = 'preset',
    styleType,
    children,
  } = props;
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', buttonType);
  const theme = useTheme();

  const buttonStyleProps = {
    calculatedColor,
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

  return (
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
                {label && <div>{label} :</div>}
                <span css={valueSpanStyle()}>{selectedItemLabel}</span>
              </span>
            </span>

            <Icon name={iconName} color={iconColor} size={iconSize} />
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
      {children}
    </div>
  );
});

export default Filter;
