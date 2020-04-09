import PropTypes from 'prop-types';
import React, { ReactEventHandler, ReactNode, useRef, useState } from 'react';
import RadioGroupContext from './RadioGroupContext';

type RadioGroupProps = {
  children: ReactNode;
  onChange?: ReactEventHandler;
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
};

function RadioGroup(props: RadioGroupProps) {
  const { children, onChange, value: externallyControlledValue, defaultValue, name } = props;
  const { current: nameValue } = useRef(name ?? `radio-name-${Math.round(Math.random() * 1000)}`);
  const [internallyControlledValue, setInternallyControlledValue] = useState(defaultValue);
  const value =
    externallyControlledValue === undefined ? internallyControlledValue : externallyControlledValue;

  const handleChange: ReactEventHandler = e => {
    const target = e.target as HTMLInputElement;

    if (externallyControlledValue === undefined) {
      setInternallyControlledValue(target.value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <RadioGroupContext.Provider value={{ name: nameValue, onChange: handleChange, value }}>
      {children}
    </RadioGroupContext.Provider>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
};

export default RadioGroup;
