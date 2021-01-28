/** @jsx jsx */
import * as React from 'react';
import { InputHTMLAttributes, useEffect, useMemo } from 'react';
import useTheme from '../../hooks/useTheme';
import TextField from '../TextField';
import Icon from '../Icon';
import { Props as TextFieldProps } from '../TextField/TextField';
import { jsx } from '@emotion/core';
import ClickAwayListener from '../utils/ClickAwayListener';
import { menuStyle, optionStyle } from './Select.style';

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
  /** TODO: defaultValue is duplication of selectedOption*/
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  selectedOption?: SelectOption;
  /** if the select has tags */
  multi?: boolean;
  /** Options for the select dropdown */
  options: SelectOption[];
} & TextFieldProps;

const emptyValue = { label: '', value: '' };

const Select = React.forwardRef<HTMLInputElement, Props & InputHTMLAttributes<HTMLInputElement>>(
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
      setInputValue(defaultValue || selectedOption);
    }, [defaultValue, selectedOption]);

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
        <TextField
          onFocus={() => setOpen(true)}
          rightIcon={rightIconRender}
          onKeyDown={(e: any) => {
            // if backspace
            if (e.keyCode === 8) {
              setInputValue(emptyValue);
            }
          }}
          onInput={(e: any) => {
            setSearchValue(e.target.value);
          }}
          onChange={ON_CHANGE_MOCK}
          {...restInputProps}
          status={status}
          value={searchValue || inputValue.label}
          ref={ref}
        />
        {open && (
          <div css={menuStyle({ status, size: restInputProps.size })}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  css={optionStyle({
                    selected: inputValue.value === option.value,
                    ...restInputProps,
                  })}
                  onClick={() => {
                    setInputValue(option);
                    setOpen(false);
                    setSearchValue('');
                    handleSelectedOption(option);
                  }}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div css={optionStyle({ selected: false, noResultsExist: true, ...restInputProps })}>
                No options
              </div>
            )}
          </div>
        )}
      </ClickAwayListener>
    );
  }
);

export default Select;
