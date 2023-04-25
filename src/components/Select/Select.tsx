import debounce from 'lodash/debounce';
import React, { InputHTMLAttributes, useEffect, useMemo, KeyboardEvent } from 'react';
import { generateTestDataId } from 'utils/helpers';

import MultiselectTextField from './components/MultiselectTextField';
import SelectMenu from './components/SelectMenu/SelectMenu';
import useMultiselectUtils from './hooks/useMultiselectUtils';
import { rightIconContainer, selectWrapper } from './Select.style';
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
    status = 'normal',
    minCharactersToSearch = 0,
    hasHighlightSearch = false,
    isSearchable = true,
    isVirtualized = false,
    styleType,
    isDisabled,
    isLocked,
    dataTestId,
    onClear,
    onOptionDelete,
    selectedOptions = [],
    ...restInputProps
  } = props;

  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const initialValue = defaultValue ?? selectedOption;

  const [inputValue, setInputValue] = React.useState(initialValue);
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
      setInputValue(option);
      setIsOpen(false);
    }

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

    if (isAsync) {
      return optionsToBeFiltered;
    }

    return optionsToBeFiltered
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
  }, [isAsync, isMulti, availableMultiSelectOptions, options, searchValue]);

  const rightIconNameSelector = useMemo(() => {
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

  const rightIconRender = useMemo(
    () => (
      <div css={rightIconContainer(isOpen, isSearchable)}>
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
    [isOpen, isLoading, isSearchable, rightIconNameSelector, theme.utils, handleIconClick]
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

  return (
    <ClickAwayListener
      onClick={() => {
        setIsOpen(false);
        setSearchValue('');
      }}
    >
      <div
        {...(!(isDisabled || isLocked) && { onClick: handleClick })}
        css={selectWrapper({ isSearchable })}
      >
        <PositionInScreen
          isVisible={isOpen}
          hasWrapperWidth
          offsetY={8}
          parent={
            isMulti ? (
              <MultiselectTextField
                selectedOptions={multiSelectedOptions}
                onInput={handleOnInput}
                onOptionDelete={handleOptionDelete}
                onClearAllOptions={handleClearAllOptions}
                isLoading={isLoading}
                isDisabled={isDisabled}
                isLocked={isLocked}
                readOnly={!isSearchable}
                dataTestId={generateTestDataId('select-input', dataTestId)}
                {...restInputProps}
                status={status}
                value={textFieldValue}
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
                disabled={isDisabled}
                isLocked={isLocked}
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
            size={restInputProps.size}
            status={status}
            isLoading={isLoading}
            isVirtualized={isVirtualized}
            searchTerm={hasHighlightSearch ? searchValue : undefined}
            hasSelectAllOption={isMulti}
          />
        </PositionInScreen>
      </div>
    </ClickAwayListener>
  );
});

Select.displayName = 'Select';

export default Select;
