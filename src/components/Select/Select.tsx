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
import SelectMenu from './components/SelectMenu/SelectMenu';
import { rightIconContainer, selectWrapper } from './Select.style';
import Loader from 'components/Loader';

export type SelectOptionValues = {
  value: string | number;
  label: string;
  iconProps?: IconProps;
};

export type SelectOption = {
  isDisabled?: boolean;
  tooltipInfo?: string;
  options?: SelectOption[];
} & SelectOptionValues;

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;

export type Props = {
  /** The function that is used to return the selected options */
  handleSelectedOption?: (selectedOption: SelectOption) => void;
  /** the default value of the select if needed */
  /** TODO: defaultValue is duplication of selectedOption*/
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  selectedOption?: SelectOption;
  /** if the select has tags */
  isMulti?: boolean;
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
  /** A callback that's called when the user clicks the 'clear' icon */
  onClear?: () => void;
  ref: React.ForwardedRef<HTMLInputElement>;
} & TextFieldProps &
  InputProps &
  TestProps;

const emptyValue = { label: '', value: '' };
// Mocks onChange to avoid readonly warning for TextField Component

const ON_CHANGE_MOCK = () => {};

const Select: React.FC<Props> = (props) => {
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
    ref,
    ...restInputProps
  } = props;

  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);
  const [inputValue, setInputValue] = React.useState(defaultValue || selectedOption);
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    setInputValue(defaultValue || selectedOption);
  }, [defaultValue, selectedOption]);

  const handleOptionClick = (option: SelectOption) => {
    setInputValue(option);
    setIsOpen(false);

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
      return options;
    }

    return options
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
  }, [searchValue, options, isAsync]);

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
        <TextField
          styleType={styleType}
          rightIcon={rightIconRender}
          onKeyDown={handleOnKeyDown}
          onInput={handleOnInput}
          onChange={ON_CHANGE_MOCK}
          isReadOnly={!isSearchable}
          isDisabled={isDisabled}
          isLocked={isLocked}
          dataTestId={generateTestDataId('select-input', dataTestId)}
          {...restInputProps}
          status={status}
          value={searchValue || inputValue.label}
          ref={combinedRefs}
        />
        {isOpen && (
          <SelectMenu
            filteredOptions={filteredOptions}
            handleOptionClick={handleOptionClick}
            selectedOption={inputValue.value}
            size={restInputProps.size}
            status={status}
            isLoading={isLoading}
            isVirtualized={isVirtualized}
            searchTerm={hasHighlightSearch ? searchValue : undefined}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};

Select.displayName = 'Select';

export default React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Select {...props} ref={ref} />
));
