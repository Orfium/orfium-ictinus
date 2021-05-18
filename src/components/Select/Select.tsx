import { css } from '@emotion/react';

import Loader from 'components/Loader';
import { debounce } from 'lodash';
import { rem } from 'polished';
import React, { InputHTMLAttributes, useEffect, useMemo, KeyboardEvent } from 'react';
import useTheme from '../../hooks/useTheme';
import { generateTestDataId } from '../../utils/helpers';
import Icon from '../Icon';
import TextField from '../TextField';
import { Props as TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import SelectMenu from './components/SelectMenu/SelectMenu';

export type SelectOption = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
  tooltipInfo?: string;
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
      dataTestId,
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
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
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isSearchable) {
          setSearchValue(e.target.value);
        }

        if (isAsync) {
          e.persist();

          if (minCharactersToSearch && e.target.value.length < minCharactersToSearch) {
            return;
          }

          debouncedOnChange(e.target.value.trim());
        }
      },
      [debouncedOnChange, isAsync, isSearchable, minCharactersToSearch]
    );

    const filteredOptions = useMemo(() => {
      if (isAsync) {
        return options;
      }

      return options.filter(
        option => !searchValue || option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
    }, [searchValue, options, isAsync]);

    const rightIconRender = useMemo(
      () => (
        <div
          css={css`
            display: flex;
            gap: 25px;
          `}
        >
          {isLoading && <Loader />}
          <Icon
            size={20}
            name={open ? 'chevronLargeUp' : 'chevronLargeDown'}
            color={theme.utils.getColor('lightGray', 500)}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      ),
      [open, theme.utils, setOpen, isLoading]
    );

    return (
      <ClickAwayListener
        onClick={() => {
          setOpen(false);
          setSearchValue('');
        }}
      >
        <div
          css={css`
            position: relative;
            min-width: ${rem(150)};
            max-width: ${rem(620)};
          `}
        >
          <TextField
            onFocus={() => setOpen(true)}
            rightIcon={rightIconRender}
            onKeyDown={handleOnKeyDown}
            onInput={handleOnInput}
            onChange={ON_CHANGE_MOCK}
            readOnly={!isSearchable}
            data-testid={generateTestDataId('select-input', dataTestId)}
            {...restInputProps}
            status={status}
            value={searchValue || inputValue.label}
            ref={ref}
          />
          {open && (
            <SelectMenu
              filteredOptions={filteredOptions}
              handleOptionClick={handleOptionClick}
              selectedOption={inputValue.value}
              size={restInputProps.size}
              status={status}
              isLoading={isLoading}
              searchTerm={highlightSearch ? searchValue : undefined}
            />
          )}
        </div>
      </ClickAwayListener>
    );
  }
);

export default Select;
