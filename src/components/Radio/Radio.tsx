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
  onSelect: ReactEventHandler;
  value: string | number;
  name: string;
  disabled?: boolean;
  id?: string;
  required?: boolean;
};

function Radio(props: Props) {
  const {
    onSelect = () => {},
    name,
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
        css={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseLeave={handleBlur}
        type={'radio'}
        onChange={onSelect}
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

  return (
    <div>
      <Radio name="same" checked={selectedValue === 'a'} value={'a'} onSelect={handleChange} />
      <Radio name="same" checked={selectedValue === 'b'} value={'b'} onSelect={handleChange} />
      <Radio name="same" checked={selectedValue === 'c'} value={'c'} onSelect={handleChange} />
      <Radio name="same" checked={selectedValue === 'd'} value={'d'} onSelect={handleChange} />
      <Radio
        name="same"
        checked={selectedValue === 'e'}
        value={'e'}
        onSelect={handleChange}
        disabled
      />
    </div>
  );
}
