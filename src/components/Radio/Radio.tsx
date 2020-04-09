/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactEventHandler, SyntheticEvent, useState } from 'react';
// import PropTypes from 'prop-types';
import {
  customRadioStyles,
  customRadioWrapperStyles,
  inputStyles,
  wrapperStyles,
} from './Radio.style';

export type Props = {
  checked: boolean;
  onChange: ReactEventHandler;
  value: string | number;
  name?: string;
  disabled?: boolean;
  id?: string;
  required?: boolean;
};

function Radio(props: Props) {
  const {
    onChange = () => {},
    name = 'yolo',
    value,
    checked = false,
    disabled = false,
    id,
    required,
  } = props;

  const [focused, setFocused] = useState(false);

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  return (
    <span css={wrapperStyles(disabled)}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseLeave={handleBlur}
        type={'radio'}
        onChange={onChange}
        css={inputStyles}
        name={name}
        value={value}
        disabled={disabled}
        id={id}
        required={required}
        checked={checked}
      />
      <span css={customRadioWrapperStyles(focused, disabled)}>
        <span css={customRadioStyles(props)} />
      </span>
    </span>
  );
}

Radio.propTypes = {};

// export default Radio;

export default function Group() {
  const [selectedValue, setSelectedValue] = useState('b');

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

export default React.forwardRef(Radio);
