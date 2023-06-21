import debounce from 'lodash/debounce';
import React, { InputHTMLAttributes, useEffect, useMemo, KeyboardEvent } from 'react';
import isEqual from 'react-fast-compare';
import { generateTestDataId } from 'utils/helpers';

import SelectMenu from './components/SelectMenu/SelectMenu';
import useMultiselectUtils from './hooks/useMultiselectUtils';
import { suffixContainer, selectWrapper } from './Select.style';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import useTheme from '../../hooks/useTheme';
import { ChangeEvent } from '../../utils/common';
import { TestProps } from '../../utils/types';
import Icon, { OwnProps as IconProps } from '../Icon';
import TextField from '../TextField';
import { TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import handleSearch from '../utils/handleSearch';
import Loader from 'components/Loader';
import MultiTextFieldBase from 'components/MultiTextFieldBase/MultiTextFieldBase';
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
  isCreated?: boolean;
} & SelectOptionValues;

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

export type SelectProps = {
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
  hasHighlightSearch?: boolean;
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
  isMulti?: boolean;
  /** The selected options in case of multiSelect */
  /** @TODO merge selectedOption with selectedOptions in v5 */
  selectedOptions?: SelectOption[];
  /**
   * If true, then in the case of a searched option that is not found in the Options list of MultiSelect,
   * the user can create this option.
   * */
  isCreatable?: boolean;
  /** Whether the MultiSelect should have a Select All option */
  hasSelectAllOption?: boolean;
} & TextFieldProps &
  InputProps &
  TestProps;

const emptyValue = { label: '', value: '' };
// Mocks onChange to avoid readonly warning for TextField Component

const ON_CHANGE_MOCK = () => {};

const Select = React.forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    handleSelectedOption = () => {},
    defaultValue = undefined,
    selectedOption = emptyValue,
    isMulti = false,
    options,
    isAsync = false,
    isLoading = false,
    asyncSearch = () => {},
    status = { type: 'normal' },
    minCharactersToSearch = 0,
    hasHighlightSearch = false,
    isSearchable = true,
    isVirtualized = false,
    isDisabled,
    dataTestId,
    onClear,
    onOptionDelete,
    selectedOptions = [],
    isCreatable = false,
    hasSelectAllOption = false,
    ...restInputProps
  } = props;
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const initialValue = defaultValue ?? selectedOption;

  const [inputValue, setInputValue] = React.useState(defaultValue || selectedOption);
  const [searchValue, setSearchValue] = React.useState('');

  const textFieldValue = searchValue || inputValue.label;

  const {
    multiSelectedOptions,
    availableMultiSelectOptions,
    handleOptionDelete,
    handleClearAllOptions,
    handleMultiSelectOptionClick,
  } = useMultiselectUtils({
    selectedOptions,
    options,
    setOpen: setIsOpen,
    setSearchValue,
    isSearchable,
    onClear,
    onOptionDelete,
    isMulti,
  });

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleOptionClick = (option: SelectOption) => {
    if (isMulti) {
      handleMultiSelectOptionClick(option);
    } else {
      if (option.isCreated) {
        setInputValue({ ...option, label: option.value.toString() });
      } else {
        setInputValue(option);
      }

      setIsOpen(false);
    }

    if (isSearchable) {
      setSearchValue('');
    }
    handleSelectedOption(option);
  };

  const debouncedOnChange = React.useCallback(
    debounce((term) => {
      asyncSearch(term);
    }, 400),
    []
  );

  const handleOnInput = React.useCallback(
    (event: ChangeEvent) => {
      /**
       * For Multiselect: [for now] when we select an option the SelectMenu closes but the user
       * can still type on the input field (so they must be able to see the SelectMenu)
       */
      if (!open) {
        setIsOpen(true);
      }

      handleSearch({
        event,
        isSearchable,
        isAsync,
        setSearchValue,
        onChange: debouncedOnChange,
        minCharactersToSearch,
      });
    },
    [debouncedOnChange, isAsync, isSearchable, minCharactersToSearch, open]
  );

  const filteredOptions = useMemo(() => {
    const optionsToBeFiltered = isMulti ? availableMultiSelectOptions : options;
    const finalOptions: SelectOption[] = [];

    if (isAsync) {
      finalOptions.push(...optionsToBeFiltered);
    } else {
      finalOptions.push(
        ...optionsToBeFiltered
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
          })
      );
    }

    if (isCreatable) {
      /** Check if the searchValue has an exact result (so no need for "Create..." option) */
      const hasDistinctResult = finalOptions
        .map((item) => item.label.toLowerCase())
        .includes(searchValue.toLowerCase());

      if (!hasDistinctResult && searchValue.length > 0) {
        finalOptions.push({
          value: searchValue,
          label: `Create "${searchValue}"`,
          isCreated: true,
        });
      }
    }

    return finalOptions;
  }, [isAsync, isMulti, availableMultiSelectOptions, options, isCreatable, searchValue]);

  const suffixNameSelector = useMemo(() => {
    if (isSearchable) {
      return searchValue || inputValue.value ? 'close' : 'search';
    }

    return 'triangleDown';
  }, [inputValue.value, isSearchable, searchValue]);

  const handleIconClick = React.useCallback(() => {
    if (isSearchable && isOpen) {
      setIsOpen(!isOpen);
    }
    if (isSearchable && (searchValue || inputValue.value)) {
      setSearchValue('');
      setInputValue(emptyValue);
      asyncSearch('');

      if (onClear) {
        onClear();
      }
    }
  }, [asyncSearch, inputValue.value, isSearchable, onClear, isOpen, searchValue]);

  const suffixRender = useMemo(
    () => (
      <div css={suffixContainer(isOpen, isSearchable)}>
        {isLoading && <Loader />}
        <Icon
          size={isSearchable ? 20 : 12}
          name={suffixNameSelector}
          color={theme.utils.getColor('lightGrey', 650)}
          onClick={handleIconClick}
          dataTestId="select-right-icon"
        />
      </div>
    ),
    [isOpen, isLoading, isSearchable, suffixNameSelector, theme.utils, handleIconClick]
  );

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      combinedRefs?.current?.focus();
    } else if (!isSearchable) {
      setIsOpen(false);
      combinedRefs?.current?.blur();
    }
  };

  /**
   * Boolean flag for the case where we have no options but create functionality - so
   * we can hide the Select All option in that case
   */
  const hasNoOptionsAndIsCreatable =
    isCreatable && filteredOptions.length === 1 && filteredOptions[0].isCreated;

  const handleSingleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const isBackspace = event.key === 'Backspace';

    if (isBackspace) {
      setInputValue(emptyValue);
      debouncedOnChange('');
    }
  };

  const handleMultiKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const isEnter = event.key === 'Enter';

    if (hasNoOptionsAndIsCreatable && isEnter) {
      handleMultiSelectOptionClick(filteredOptions[0]);
      setSearchValue('');
    }
  };

  return (
    <ClickAwayListener
      onClick={() => {
        setIsOpen(false);
        setSearchValue('');
      }}
    >
      <div
        {...(!(isDisabled || status.type === 'read-only') && { onClick: handleClick })}
        css={selectWrapper({ isSearchable })}
      >
        <PositionInScreen
          isVisible={isOpen}
          hasWrapperWidth
          offsetY={8}
          parent={
            isMulti ? (
              <MultiTextFieldBase
                selectedOptions={multiSelectedOptions}
                onInput={handleOnInput}
                onOptionDelete={handleOptionDelete as (option?: string | SelectOption) => void}
                onClearAllOptions={handleClearAllOptions}
                isLoading={isLoading}
                isDisabled={isDisabled}
                readOnly={!isSearchable}
                dataTestId={generateTestDataId('select-input', dataTestId)}
                {...restInputProps}
                status={status}
                value={textFieldValue}
                ref={combinedRefs}
                autoComplete="off"
                onKeyDown={handleMultiKeyDown}
              />
            ) : (
              <TextField
                suffix={suffixRender}
                onKeyDown={handleSingleKeyDown}
                onInput={handleOnInput}
                onChange={ON_CHANGE_MOCK}
                readOnly={!isSearchable}
                isDisabled={isDisabled}
                dataTestId={generateTestDataId('select-input', dataTestId)}
                {...restInputProps}
                status={status}
                value={textFieldValue}
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
            status={status}
            isLoading={isLoading}
            isVirtualized={isVirtualized}
            searchTerm={hasHighlightSearch ? searchValue : undefined}
            hasSelectAllOption={isMulti && hasSelectAllOption && !hasNoOptionsAndIsCreatable}
          />
        </PositionInScreen>
      </div>
    </ClickAwayListener>
  );
});

Select.displayName = 'Select';

export default React.memo(Select, isEqual);
