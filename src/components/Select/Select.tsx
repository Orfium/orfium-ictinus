import debounce from 'lodash/debounce';
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
import useMultiselectUtils from './hooks/useMultiselectUtils';
import { rightIconContainer, selectWrapper } from './Select.style';
import Loader from 'components/Loader';
import MultiSelectBase from 'components/MultiSelectBase/MultiSelectBase';
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
  /** @TODO merge selectedOption with selectedOptions in v5 */
  selectedOptions?: SelectOption[];
  /**
   * If true, then in the case of a searched option that is not found in the Options list of MultiSelect,
   * the user can create this option.
   * */
  creatable?: boolean;
  /** Whether the MultiSelect should have a Select All option */
  hasSelectAllOption?: boolean;
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
      creatable = false,
      hasSelectAllOption = false,
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
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
      setOpen,
      setSearchValue,
      isSearchable,
      onClear,
      onOptionDelete,
      multi,
    });

    useEffect(() => {
      setInputValue(initialValue);
    }, [initialValue]);

    const handleOptionClick = (option: SelectOption) => {
      if (multi) {
        handleMultiSelectOptionClick(option);
      } else {
        if (option.isCreated) {
          setInputValue({ ...option, label: option.value.toString() });
        } else {
          setInputValue(option);
        }

        setOpen(false);
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
          setOpen(true);
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
      const optionsToBeFiltered = multi ? availableMultiSelectOptions : options;
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

      if (creatable) {
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
    }, [multi, availableMultiSelectOptions, options, isAsync, creatable, searchValue]);

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

    /**
     * Boolean flag for the case where we have no options but create functionality - so
     * we can hide the Select All option in that case
     */
    const hasNoOptionsAndIsCreatable =
      creatable && filteredOptions.length === 1 && filteredOptions[0].isCreated;

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
                <MultiSelectBase
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
                  disabled={disabled}
                  locked={locked}
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
              searchTerm={highlightSearch ? searchValue : undefined}
              hasSelectAllOption={multi && hasSelectAllOption && !hasNoOptionsAndIsCreatable}
            />
          </PositionInScreen>
        </div>
      </ClickAwayListener>
    );
  }
);

Select.displayName = 'Select';

export default Select;
