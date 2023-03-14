import { debounce } from 'lodash';
import React, { InputHTMLAttributes, useEffect, useMemo, KeyboardEvent } from 'react';
import { generateTestDataId } from 'utils/helpers';

import useCombinedRefs from '../../hooks/useCombinedRefs';
import useTheme from '../../hooks/useTheme';
import { ChangeEvent } from '../../utils/common';
import { TestProps } from '../../utils/types';
import Icon, { OwnProps as IconProps } from '../Icon';
import TextField from '../TextField';
import { Props as TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import handleSearch from '../utils/handleSearch';
import MultiselectTextField from './components/MultiselectTextField';
import SelectMenu from './components/SelectMenu/SelectMenu';
import useMultiselectUtils from './hooks/useMultiselectUtils';
import { rightIconContainer, selectWrapper } from './Select.style';
import Loader from 'components/Loader';
import PositionInScreen from 'components/utils/PositionInScreen';

export type SelectOptionValues = {
  value: string | number;
  label: string;
  iconProps?: IconProps;
};

export type SelectOption = {
  isDisabled?: boolean;
  helperText?: string;
  tooltipInfo?: string;
  options?: SelectOption[];
} & SelectOptionValues;

export type Props = {
  /** The function that is used to return the selected options */
  handleSelectedOption?: (selectedOption: SelectOption) => void;
  /** the default value of the select if needed */
  /** TODO: defaultValue is duplication of selectedOption*/
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  selectedOption?: SelectOption;
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
  /** A callback that's called when the user clicks the 'clear' icon of the (Single) Select, or the 'clear all' button of the MultiSelect */
  onClear?: () => void;
  /** A callback that's called when the user clicks the 'clear' icon of a specific Chip in MultiSelect */
  onOptionDelete?: (option: SelectOption) => void;
  /** If true the user can select multiple options */
  multi?: boolean;
  /** The selected options in case of multiSelect */
  selectedOptions?: SelectOption[];
} & TextFieldProps;

const emptyValue = { label: '', value: '' };

// Mocks onChange to avoid readonly warning for TextField Component
const ON_CHANGE_MOCK = () => {};

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

const Select = React.forwardRef<HTMLInputElement, Props & InputProps & TestProps>(
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
      onClear,
      onOptionDelete,
      selectedOptions = [],
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

    const {
      multiSelectedOptions,
      setMultiSelectedOpts,
      availableMultiSelectOptions,
      setAvailableMultiSelectOptions,
      handleOptionDelete,
      handleClearAllOptions,
    } = useMultiselectUtils({
      selectedOptions,
      options,
      setOpen,
      setSearchValue,
      isSearchable,
      onClear,
      onOptionDelete,
      multi,
    });

    useEffect(() => {
      setInputValue(defaultValue || selectedOption);
    }, [defaultValue, selectedOption]);

    const handleOptionClick = (option: SelectOption) => {
      if (multi) {
        setMultiSelectedOpts([...multiSelectedOptions, option]);
        setAvailableMultiSelectOptions(
          availableMultiSelectOptions.filter((opt) => opt.value !== option.value)
        );
      } else {
        setInputValue(option);
      }

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
      debounce((term) => {
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
        return multi ? availableMultiSelectOptions : options;
      }

      return (multi ? availableMultiSelectOptions : options)
        .filter(
          (option) =>
            !searchValue ||
            option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
            !!option.options?.find((option) =>
              option.label.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
        .map((option) => {
          return option.label.toLowerCase().includes(searchValue.toLowerCase())
            ? option
            : {
                ...option,
                options: option.options?.filter((option) =>
                  option.label.toLowerCase().includes(searchValue.toLowerCase())
                ),
              };
        });
    }, [isAsync, multi, availableMultiSelectOptions, options, searchValue]);

    const rightIconNameSelector = useMemo(() => {
      if (isSearchable) {
        return searchValue || inputValue.value ? 'close' : 'search';
      }

      return 'triangleDown';
    }, [inputValue.value, isSearchable, searchValue]);

    const handleIconClick = React.useCallback(() => {
      if (isSearchable && open) {
        setOpen(!open);
      }
      if (isSearchable && (searchValue || inputValue.value)) {
        setSearchValue('');
        setInputValue(emptyValue);
        asyncSearch('');

        if (onClear) {
          onClear();
        }
      }
    }, [asyncSearch, inputValue.value, isSearchable, onClear, open, searchValue]);

    const rightIconRender = useMemo(
      () => (
        <div css={rightIconContainer(open, isSearchable)}>
          {isLoading && <Loader />}
          <Icon
            size={isSearchable ? 20 : 12}
            name={rightIconNameSelector}
            color={theme.utils.getColor('lightGrey', 650)}
            onClick={handleIconClick}
            dataTestId="select-right-icon"
          />
        </div>
      ),
      [open, isLoading, isSearchable, rightIconNameSelector, theme.utils, handleIconClick]
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
          css={selectWrapper({ isSearchable })}
        >
          <PositionInScreen
            visible={open}
            hasWrapperWidth
            offsetY={8}
            parent={
              multi ? (
                <MultiselectTextField
                  selectedOptions={multiSelectedOptions}
                  onInput={handleOnInput}
                  onOptionDelete={handleOptionDelete}
                  onClearAllOptions={handleClearAllOptions}
                  isLoading={isLoading}
                  disabled={disabled}
                  locked={locked}
                  readOnly={!isSearchable}
                  dataTestId={generateTestDataId('select-input', dataTestId)}
                  {...restInputProps}
                  status={status}
                  value={searchValue || inputValue.label}
                  autoComplete="off"
                />
              ) : (
                <TextField
                  styleType={styleType}
                  rightIcon={rightIconRender}
                  onKeyDown={handleOnKeyDown}
                  onInput={handleOnInput}
                  onChange={ON_CHANGE_MOCK}
                  readOnly={!isSearchable}
                  disabled={disabled}
                  locked={locked}
                  dataTestId={generateTestDataId('select-input', dataTestId)}
                  {...restInputProps}
                  status={status}
                  value={searchValue || inputValue.label}
                  ref={combinedRefs}
                  autoComplete="off"
                />
              )
            }
          >
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
          </PositionInScreen>
        </div>
      </ClickAwayListener>
    );
  }
);

Select.displayName = 'Select';

export default Select;
