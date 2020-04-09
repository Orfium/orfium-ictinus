/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { ReactEventHandler, Ref, useState } from 'react';
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

function Radio(props: Props, ref: Ref<HTMLInputElement>) {
  const { checked, onChange = () => {}, value, name, disabled = false, id, required } = props;

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
        ref={ref}
      />
      <span css={customRadioWrapperStyles(focused, disabled)}>
        <span css={customRadioStyles(props)} />
      </span>
    </span>
  );
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default React.forwardRef(Radio);
