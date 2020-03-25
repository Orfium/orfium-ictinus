/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactEventHandler, SyntheticEvent, useState } from 'react';
// import PropTypes from 'prop-types';
import { customRadioStyles, inputStyles, wrapperStyles } from './Radio.style';

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
    disabled,
    id,
    required,
  } = props;

  return (
    <span css={wrapperStyles}>
      <input
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
      <span css={customRadioStyles(props)} />
    </span>
  );
}

Radio.propTypes = {};

// export default Radio;

export default function Group() {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Radio checked={selectedValue === 'a'} value={'a'} onChange={handleChange} />
      <Radio checked={selectedValue === 'b'} value={'b'} onChange={handleChange} />
      <Radio checked={selectedValue === 'c'} value={'c'} onChange={handleChange} />
      <Radio checked={selectedValue === 'd'} value={'d'} onChange={handleChange} />
      <Radio checked={selectedValue === 'e'} value={'e'} onChange={handleChange} disabled />
    </div>
  );
}
