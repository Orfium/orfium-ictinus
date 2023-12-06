import { useState, useEffect } from 'react';

import { Props as TextFieldProps } from '../TextField';

type Props = Pick<
  TextFieldProps,
  | 'multiValues'
  | 'maxMultiValues'
  | 'onMultiValueCreate'
  | 'onMultiValueDelete'
  | 'onClearAllValues'
  | 'onInput'
  | 'multiValuesHandler'
>;

const useMultiTextFieldUtils = ({
  multiValues = [],
  maxMultiValues,
  onMultiValueCreate,
  onMultiValueDelete,
  onClearAllValues,
  onInput,
  multiValuesHandler = (value) => value,
}: Props) => {
  const [values, setValues] = useState(multiValues);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setValues(multiValues);
  }, [multiValues]);

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

        if (onMultiValueDelete) {
          onMultiValueDelete(lastItem);
        }
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

      const handledInputValue = multiValuesHandler(inputValue);

      setValues([
        ...values,
        ...(Array.isArray(handledInputValue) ? handledInputValue : [handledInputValue]),
      ]);

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
