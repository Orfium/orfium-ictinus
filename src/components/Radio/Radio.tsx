/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { generateTestDataId } from '../../utils/helpers';
import { TestId } from '../../utils/types';
import useRadioGroup from '../RadioGroup/useRadioGroup';
import {
  customRadioInnerHover,
  customRadioStyles,
  customRadioWrapperStyles,
  inputStyles,
  wrapperStyles,
} from './Radio.style';
import useTheme from '../../hooks/useTheme';

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
  onChange?: React.ReactEventHandler;
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
  /** Whether the radio input is filled or outlined
   *
   * @default true
   * */
  filled?: boolean;
  dataTestId?: TestId;
};

function Radio(props: Props, ref: React.Ref<HTMLInputElement>) {
  const {
    checked: externallyControlledChecked,
    onChange,
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value
    value = 'on',
    name,
    disabled = false,
    id,
    required = false,
    filled = true,
    dataTestId,
  } = props;
  const [focused, setFocused] = React.useState(false);
  const [internallyControlledChecked, setInternallyControlledChecked] = React.useState(false);
  const radioGroup = useRadioGroup();
  const theme = useTheme();

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  function handleChange(e: React.SyntheticEvent) {
    if (disabled) return;

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
        onMouseOver={handleFocus}
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
            filled,
          })(theme)}
        />
        <span css={customRadioInnerHover(focused, disabled)} />
      </span>
    </span>
  );
}

export const RadioWithoutForwardRef = Radio;
export default React.forwardRef(Radio);
