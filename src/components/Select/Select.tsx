/** @jsxRuntime classic */
/** @jsx jsx */
import React, { InputHTMLAttributes, useEffect, useMemo, KeyboardEvent } from 'react';
import { css, jsx } from '@emotion/core';

import useTheme from '../../hooks/useTheme';
import TextField from '../TextField';
import Icon from '../Icon';
import { Props as TextFieldProps } from '../TextField/TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import SelectMenu from './components/SelectMenu/SelectMenu';
import { debounce } from 'lodash';

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
  isAsync?: boolean;
  asyncSearch?: (term: string) => void;
} & TextFieldProps;

const emptyValue = { label: '', value: '' };

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
      asyncSearch = () => {},
      status = 'normal',
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(defaultValue || selectedOption);
    const [searchValue, setSearchValue] = React.useState('');

    useEffect(() => {
      setInputValue(defaultValue || selectedOption);
    }, [defaultValue, selectedOption]);

    useEffect(() => {
      if (isAsync) {
        setIsLoading(false);
      }
    }, [options]);

    const handleOptionClick = (option: SelectOption) => {
      setInputValue(option);
      setOpen(false);
      setSearchValue('');
      handleSelectedOption(option);
    };

    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      // if backspace
      if (e.keyCode === 8) {
        setInputValue(emptyValue);
      }
    };

    const debouncedOnChange = debounce(term => {
      asyncSearch(term);
    }, 500);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist();
      if (isAsync) {
        setIsLoading(true);
        debouncedOnChange(e.target.value);
      }
    };

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
          `}
        >
          {isLoading && (
            <Icon size={20} name={'dotsVertical'} color={theme.utils.getColor('lightGray', 500)} />
          )}
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
          `}
        >
          <TextField
            onFocus={() => setOpen(true)}
            rightIcon={rightIconRender}
            onKeyDown={handleOnKeyDown}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(e.target.value);
            }}
            onChange={handleOnChange}
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
            />
          )}
        </div>
      </ClickAwayListener>
    );
  }
);

export default Select;
