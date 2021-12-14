import { css } from '@emotion/react';
import { debounce } from 'lodash';
import React, { InputHTMLAttributes, useEffect, useMemo, KeyboardEvent } from 'react';
import { rem } from 'theme/utils';
import { generateTestDataId } from 'utils/helpers';

import useCombinedRefs from '../../hooks/useCombinedRefs';
import useTheme from '../../hooks/useTheme';
import { ChangeEvent } from '../../utils/common';
import Icon from '../Icon';
import TextField from '../TextField';
import { Props as TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import handleSearch from '../utils/handleSearch';
import SelectMenu from './components/SelectMenu/SelectMenu';
import { selectWrapper } from './Select.style';
import Loader from 'components/Loader';

export type SelectOption = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
  tooltipInfo?: string;
  options?: SelectOption[];
};

export type Props = {
  /** The function that is used to return the selected options */
  handleSelectedOption?: (selectedOption: SelectOption) => void;
  /** the default value of the select if needed */
  /** TODO: defaultValue is duplication of selectedOption*/
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  selectedOption?: SelectOption;
  /** if the select has tags */
  multi?: boolean;
  /** Options for the select dropdown */
  options: SelectOption[];
  /** if the component is used asynchronously */
  isAsync?: boolean;
  /** the function to fetch new options */
  asyncSearch?: (term: string) => void;
  /** after how many characters to start searching (default = 0) */
  minCharactersToSearch?: number;
  /** if searched text should be highlighted in available options */
  highlightSearch?: boolean;
  /** if the options are searchable */
  isSearchable?: boolean;
  /** data-testid suffix */
  dataTestId?: string;
  /** if component is loading */
  isLoading?: boolean;
  /** if options list is virtualized */
  isVirtualized?: boolean;
} & TextFieldProps;

const emptyValue = { label: '', value: '' };

// Mocks onChange to avoid readonly warning for TextField Component
const ON_CHANGE_MOCK = () => {};

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const Select = React.forwardRef<HTMLInputElement, Props & InputProps>(
  (
    {
      handleSelectedOption = () => {},
      defaultValue = undefined,
      selectedOption = emptyValue,
      multi = false,
      options,
      isAsync = false,
      isLoading = false,
      asyncSearch = () => {},
      status = 'normal',
      minCharactersToSearch = 0,
      highlightSearch = false,
      isSearchable = true,
      isVirtualized = false,
      styleType,
      disabled,
      locked,
      dataTestId,
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRefs = useCombinedRefs(inputRef, ref);
    const [inputValue, setInputValue] = React.useState(defaultValue || selectedOption);
    const [searchValue, setSearchValue] = React.useState('');

    useEffect(() => {
      setInputValue(defaultValue || selectedOption);
    }, [defaultValue, selectedOption]);

    const handleOptionClick = (option: SelectOption) => {
      setInputValue(option);
      setOpen(false);

      if (isSearchable) {
        setSearchValue('');
      }
      handleSelectedOption(option);
    };

    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const isBackspaceKey = e.keyCode === 8;

      if (isBackspaceKey) {
        setInputValue(emptyValue);
        debouncedOnChange('');
      }
    };

    const debouncedOnChange = React.useCallback(
      debounce(term => {
        asyncSearch(term);
      }, 400),
      []
    );

    const handleOnInput = React.useCallback(
      (event: ChangeEvent) => {
        handleSearch({
          event,
          isSearchable,
          isAsync,
          setSearchValue,
          onChange: debouncedOnChange,
          minCharactersToSearch,
        });
      },
      [debouncedOnChange, isAsync, isSearchable, minCharactersToSearch]
    );

    const filteredOptions = useMemo(() => {
      if (isAsync) {
        return options;
      }

      return options
        .filter(
          option =>
            !searchValue ||
            option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
            !!option.options?.find(option =>
              option.label.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
        .map(option => {
          return option.label.toLowerCase().includes(searchValue.toLowerCase())
            ? option
            : {
                ...option,
                options: option.options?.filter(option =>
                  option.label.toLowerCase().includes(searchValue.toLowerCase())
                ),
              };
        });
    }, [searchValue, options, isAsync]);

    const rightIconNameSelector = useMemo(() => {
      if (isSearchable) {
        return searchValue || inputValue.value ? 'close' : 'search';
      }

      return open ? 'chevronLargeUp' : 'chevronLargeDown';
    }, [inputValue.value, isSearchable, open, searchValue]);

    const handleIconClick = React.useCallback(() => {
      if (isSearchable && open) {
        setOpen(!open);
      }
      if (isSearchable && (searchValue || inputValue.value)) {
        setSearchValue('');
        setInputValue(emptyValue);
        asyncSearch('');
      }
    }, [asyncSearch, inputValue.value, isSearchable, open, searchValue]);

    const rightIconRender = useMemo(
      () => (
        <div
          css={css`
            display: flex;
            gap: ${rem(25)};
          `}
        >
          {isLoading && <Loader />}
          <Icon
            size={20}
            name={rightIconNameSelector}
            color={theme.utils.getColor('lightGrey', 650)}
            onClick={handleIconClick}
            dataTestId="select-right-icon"
          />
        </div>
      ),
      [isLoading, rightIconNameSelector, theme.utils, handleIconClick]
    );

    const handleClick = () => {
      if (!open) {
        setOpen(true);
        combinedRefs?.current?.focus();
      } else if (!isSearchable) {
        setOpen(false);
        combinedRefs?.current?.blur();
      }
    };

    return (
      <ClickAwayListener
        onClick={() => {
          setOpen(false);
          setSearchValue('');
        }}
      >
        <div
          {...(!(disabled || locked) && { onClick: handleClick })}
          css={selectWrapper({ open, status, styleType, isSearchable })}
        >
          <TextField
            styleType={styleType}
            rightIcon={rightIconRender}
            onKeyDown={handleOnKeyDown}
            onInput={handleOnInput}
            onChange={ON_CHANGE_MOCK}
            readOnly={!isSearchable}
            disabled={disabled}
            locked={locked}
            data-testid={generateTestDataId('select-input', dataTestId)}
            {...restInputProps}
            status={status}
            value={searchValue || inputValue.label}
            ref={combinedRefs}
          />
          {open && (
            <SelectMenu
              filteredOptions={filteredOptions}
              handleOptionClick={handleOptionClick}
              selectedOption={inputValue.value}
              size={restInputProps.size}
              status={status}
              isLoading={isLoading}
              isVirtualized={isVirtualized}
              searchTerm={highlightSearch ? searchValue : undefined}
            />
          )}
        </div>
      </ClickAwayListener>
    );
  }
);

Select.displayName = 'Select';

export default Select;
