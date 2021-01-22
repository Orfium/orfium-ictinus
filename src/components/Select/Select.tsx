/** @jsx jsx */
import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import TextField from '../TextField';
import Icon from '../Icon';
import { Props as TextFieldProps } from '../TextField/TextField';
import { jsx } from '@emotion/core';
import ClickAwayListener from '../utils/ClickAwayListener';
import { useEffect, useMemo } from 'react';
import { menuStyle, optionStyle } from './Select.style';

export type SelectOption = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
  tooltipInfo?: string;
};

export type Props = {
  /** The function that is used to return the selected options */
  onChange?: (value: SelectOption) => void;
  /** the default value of the select if needed */
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  value?: SelectOption;
  /** if the select has tags */
  multi?: boolean;
  /** Options for the select dropdown */
  options: SelectOption[];
} & TextFieldProps;

const emptyValue = { label: '', value: '' };

const Select = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      onChange = () => {},
      defaultValue = undefined,
      value = emptyValue,
      multi = false,
      options,
      status = 'normal',
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(defaultValue || value);
    const [searchValue, setSearchValue] = React.useState('');

    useEffect(() => {
      onChange(inputValue);
    }, [inputValue, onChange]);

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
        />
      ),
      [open, theme.utils]
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
          onKeyDown={e => {
            // if backspace
            if (e.keyCode === 8) {
              setInputValue(emptyValue);
            }
          }}
          onInput={e => {
            setSearchValue(e.target.value);
          }}
          {...restInputProps}
          status={status}
          value={searchValue || inputValue.label}
          ref={ref}
        />
        {open && (
          <div css={menuStyle({ status })}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  css={optionStyle({ selected: inputValue.value === option.value })}
                  onClick={() => {
                    setInputValue(option);
                    setOpen(false);
                    setSearchValue('');
                  }}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div css={optionStyle({ selected: false })}>No options</div>
            )}
          </div>
        )}
      </ClickAwayListener>
    );
  }
);

export default Select;
