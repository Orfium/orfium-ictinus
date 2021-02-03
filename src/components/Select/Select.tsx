/** @jsx jsx */
import * as React from 'react';
import { useEffect, useMemo } from 'react';
import useTheme from '../../hooks/useTheme';
import TextField from '../TextField';
import Icon from '../Icon';
import { Props as TextFieldProps } from '../TextField/TextField';
import { css, jsx } from '@emotion/core';
import ClickAwayListener from '../utils/ClickAwayListener';
import SelectMenu from './components/SelectMenu/SelectMenu';

// Mocks onChange to avoid readonly warning for TextField Component
const ON_CHANGE_MOCK = () => {};

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
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  selectedOption?: SelectOption;
  /** if the select has tags */
  multi?: boolean;
  /** Options for the select dropdown */
  options: SelectOption[];
} & TextFieldProps;

const emptyValue = { label: '', value: '' };

const Select = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      handleSelectedOption = () => {},
      defaultValue = undefined,
      selectedOption = emptyValue,
      multi = false,
      options,
      status = 'normal',
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(defaultValue || selectedOption);
    const [searchValue, setSearchValue] = React.useState('');

    useEffect(() => {
      handleSelectedOption(inputValue);
    }, [inputValue, handleSelectedOption]);

    useEffect(() => {
      setInputValue(defaultValue || selectedOption);
    }, [defaultValue, selectedOption]);

    const handleOptionClick = (option: SelectOption) => {
      setInputValue(option);
      setOpen(false);
      setSearchValue('');
    };

    const filteredOptions = useMemo(() => {
      return options.filter(
        option => !searchValue || option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
    }, [searchValue, options]);

    const rightIconRender = useMemo(
      () => (
        <Icon
          size={20}
          name={open ? 'chevronLargeUp' : 'chevronLargeDown'}
          color={theme.utils.getColor('lightGray', 500)}
          onClick={() => {
            setOpen(!open);
          }}
        />
      ),
      [open, theme.utils, setOpen]
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
            onKeyDown={e => {
              // if backspace
              if (e.keyCode === 8) {
                setInputValue(emptyValue);
              }
            }}
            onInput={e => {
              setSearchValue(e.target.value);
            }}
            onChange={ON_CHANGE_MOCK}
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
            />
          )}
        </div>
      </ClickAwayListener>
    );
  }
);

export default Select;
