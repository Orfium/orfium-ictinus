import * as React from 'react';

import {
  customRadioInnerHover,
  customRadioStyles,
  customRadioWrapperStyles,
  inputStyles,
  wrapperStyles,
} from './Radio.style';
import useTheme from '../../hooks/useTheme';
import { generateTestDataId } from '../../utils/helpers';
import type { TestId } from '../../utils/types';
import useRadioGroup from '../RadioGroup/useRadioGroup';

export type RadioProps = {
  /** The value of the radio input. If no value is passed the default value, according to spec, is "on"
   *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value
   *
   *  @default on
   * */
  value?: string | number;
  /** Whether the radio input is selected or not. Defining this prop means the radio input is controlled */
  isChecked?: boolean;
  /** The onChange event handler for the radio input */
  onChange?: React.ReactEventHandler;
  /** The name of the radio input, in case you want to manually form a radio group */
  name?: string;
  /** Whether the radio input is disabled
   *
   *  @default false
   * */
  isDisabled?: boolean;
  /** ID property of the radio input */
  id?: string;
  /** Whether the radio input is required to be selected in the context of a form
   *
   * @default false
   * */
  isRequired?: boolean;
  /** Whether the radio input is filled or outlined
   *
   * @default true
   * */
  isFilled?: boolean;
  dataTestId?: TestId;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    isChecked: isExternallyControlledChecked,
    onChange,
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value
    value = 'on',
    name,
    isDisabled = false,
    id,
    isRequired = false,
    isFilled = true,
    dataTestId,
  } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [isInternallyControlledChecked, setIsInternallyControlledChecked] = React.useState(false);
  const radioGroup = useRadioGroup();
  const theme = useTheme();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.SyntheticEvent) => {
    if (isDisabled) return;

    if (isExternallyControlledChecked === undefined) {
      setIsInternallyControlledChecked((e.target as HTMLInputElement).checked);
    }

    if (onChange) {
      onChange(e);
    }

    if (radioGroup) {
      radioGroup.onChange(e);
    }
  };

  // Checked value is either the externally controlled value,
  // or based on the radioGroup provided values,
  // or the internally controlled value
  const isCheckedValue =
    isExternallyControlledChecked ??
    (radioGroup ? (radioGroup && radioGroup.value) === value : isInternallyControlledChecked);
  const nameValue = name ?? (radioGroup && radioGroup.name);

  return (
    <span
      css={wrapperStyles(isDisabled)}
      data-testid={generateTestDataId('radio-input', dataTestId)}
    >
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
        disabled={isDisabled}
        id={id}
        required={isRequired}
        checked={isCheckedValue}
        ref={ref}
      />
      <span css={customRadioWrapperStyles(isFocused, isDisabled)(theme)}>
        <span
          css={customRadioStyles({
            isChecked: isCheckedValue,
            isDisabled,
            isFilled,
          })(theme)}
        />
        <span css={customRadioInnerHover(isFocused, isDisabled)(theme)} />
      </span>
    </span>
  );
});

Radio.displayName = 'Radio';

export default Radio;
