import * as React from 'react';
import RadioGroupContext from './RadioGroupContext';

export type RadioGroupProps = {
  /** A list of Radio elements */
  children: React.ReactNode;
  /** The onChange event handler for the radio group */
  onChange?: React.ReactEventHandler;
  /** The current value of the radio group. Defining this prop means the radio group is controlled */
  value?: string | number;
  /** A default value for the radio group. Defining this prop means the radio group is not controlled */
  defaultValue?: string | number;
  /** A name value for all the radio inputs of the radio group */
  name?: string;
};

function RadioGroup(props: RadioGroupProps) {
  const { children, onChange, value: externallyControlledValue, defaultValue, name } = props;
  const [internallyControlledValue, setInternallyControlledValue] = React.useState(defaultValue);
  const { current: nameValue } = React.useRef(name ?? `radio-${Math.round(Math.random() * 1000)}`);
  const value =
    externallyControlledValue === undefined ? internallyControlledValue : externallyControlledValue;

  const handleChange: React.ReactEventHandler = e => {
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

export default RadioGroup;
