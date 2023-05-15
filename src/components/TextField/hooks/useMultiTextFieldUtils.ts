import { useState } from 'react';

import { Props as TextFieldProps } from '../TextField';

type Props = Pick<
  TextFieldProps,
  | 'multiValues'
  | 'maxMultiValues'
  | 'onMultiValueCreate'
  | 'onMultiValueDelete'
  | 'onClearAllValues'
  | 'onInput'
>;

const useMultiTextFieldUtils = ({
  multiValues = [],
  maxMultiValues,
  onMultiValueCreate,
  onMultiValueDelete,
  onClearAllValues,
  onInput,
}: Props) => {
  const [values, setValues] = useState(multiValues);
  const [inputValue, setInputValue] = useState('');

  const handleValueDelete = (option?: string) => {
    if (option) {
      setValues(values.filter((opt) => opt !== option));
      if (onMultiValueDelete) {
        onMultiValueDelete(option);
      }
    } else {
      if (values.length > 0) {
        const lastItem = values[values.length - 1];
        setValues(values.filter((opt) => opt !== lastItem));
      }
    }
  };

  const handleClearAllValues = () => {
    setValues([]);
    setInputValue('');

    if (onClearAllValues) {
      onClearAllValues();
    }
  };

  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onInput) {
      onInput(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (maxMultiValues && values.length >= maxMultiValues) {
      event.preventDefault();

      return;
    }
    if (event.key === 'Enter') {
      if (inputValue === '') {
        event.preventDefault();
      }

      setValues([...values, inputValue]);

      if (onMultiValueCreate) {
        onMultiValueCreate(inputValue);
      }

      setInputValue('');
    } else if (event.key === 'Backspace') {
      if (inputValue === '') {
        handleValueDelete();
      }
    }
  };

  return {
    values,
    handleValueDelete,
    handleClearAllValues,
    handleKeyDown,
    handleTyping,
    inputValue,
  };
};

export default useMultiTextFieldUtils;
