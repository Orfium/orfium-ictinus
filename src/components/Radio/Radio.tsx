/** @jsx jsx */
import { jsx } from '@emotion/core';
import useRadioGroup from 'components/RadioGroup/useRadioGroup';
import React, { ReactEventHandler, Ref, SyntheticEvent, useState } from 'react';
import { generateTestDataId } from 'utils/helpers';
import {
  customRadioStyles,
  customRadioWrapperStyles,
  inputStyles,
  wrapperStyles,
} from './Radio.style';
import { TestId } from 'utils/types';

export type Props = {
  /** The value of the radio input. If no value is passed the default value, according to spec, is "on"
   *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value
   *
   *  @default on
   * */
  value?: string | number;
  /** Whether the radio input is selected or not. Defining this prop means the radio input is controlled */
  checked?: boolean;
  /** The onChange event handler for the radio input */
  onChange?: ReactEventHandler;
  /** The name of the radio input, in case you want to manually form a radio group */
  name?: string;
  /** Whether the radio input is disabled
   *
   *  @default false
   * */
  disabled?: boolean;
  /** ID property of the radio input */
  id?: string;
  /** Whether the radio input is required to be selected in the context of a form
   *
   * @default false
   * */
  required?: boolean;
  dataTestId?: TestId;
};

function Radio(props: Props, ref: Ref<HTMLInputElement>) {
  const {
    checked: externallyControlledChecked,
    onChange,
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value
    value = 'on',
    name,
    disabled = false,
    id,
    required = false,
    dataTestId,
  } = props;
  const [focused, setFocused] = useState(false);
  const [internallyControlledChecked, setInternallyControlledChecked] = useState(false);
  const radioGroup = useRadioGroup();

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  function handleChange(e: SyntheticEvent) {
    if (externallyControlledChecked === undefined) {
      setInternallyControlledChecked((e.target as HTMLInputElement).checked);
    }

    if (onChange) {
      onChange(e);
    }

    if (radioGroup) {
      radioGroup.onChange(e);
    }
  }

  // Checked value is either the externally controlled value,
  // or based on the radioGroup provided values,
  // or the internally controlled value
  const checkedValue =
    externallyControlledChecked ??
    (radioGroup ? (radioGroup && radioGroup.value) === value : internallyControlledChecked);
  const nameValue = name ?? (radioGroup && radioGroup.name);

  return (
    <span css={wrapperStyles(disabled)} data-testid={generateTestDataId('radio-input', dataTestId)}>
      <input
        css={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseLeave={handleBlur}
        type={'radio'}
        onChange={handleChange}
        name={nameValue}
        value={value}
        disabled={disabled}
        id={id}
        required={required}
        checked={checkedValue}
        ref={ref}
      />
      <span css={customRadioWrapperStyles(focused, disabled)}>
        <span
          css={customRadioStyles({
            checked: checkedValue,
            disabled,
          })}
        />
      </span>
    </span>
  );
}

export const RadioWithoutForwardRef = Radio;
export default React.forwardRef(Radio);
