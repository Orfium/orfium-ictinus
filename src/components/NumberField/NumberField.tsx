import useFieldUtils from 'hooks/useFieldUtils';
import { omit } from 'lodash-es';
import React from 'react';
import { NumberField as ReactAriaNumberField, Group, Input } from 'react-aria-components';
import { generateUniqueID } from 'utils/helpers';

import Stepper from './components/Stepper/Stepper';
import { groupStyles } from './NumberField.style';
import type { TextFieldProps } from '../TextField/TextField';
import Label from 'components/Label';
import { suffixContainerStyle } from 'components/TextField/TextField.style';
import TextInputBase from 'components/TextInputBase/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type NumberFieldProps = Omit<
  TextFieldProps,
  | 'mask'
  | 'maskChar'
  | 'size'
  | 'value'
  | 'onChange'
  | 'isMulti'
  | 'onMultiValueClearAll'
  | 'onMultiValueDelete'
> & {
  /** Callback fired when the `input` is changed. */
  onChange?: (value: number) => void;
  /** The value of the `input` element. */
  value?: number;
  /** Formatting options for the value displayed in the number field, following the Intl.NumberFormatOptions type */
  formatOptions?: Intl.NumberFormatOptions;
  /** Whether the numberInput has a stepper */
  hasStepper?: boolean;
  /** The amount that the input value changes with each increment or decrement "tick". Defaults to 1 */
  step?: number;
  /** The smallest value allowed for the input. */
  minValue?: number;
  /** The largest value allowed for the input. */
  maxValue?: number;
};

const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>((props, ref) => {
  const {
    id = generateUniqueID('numberfield_'),
    suffix = null,
    hasStepper = false,
    label,
    placeholder = '',
    isRequired = false,
    isDisabled,
    isReadOnly,
    step,
    onChange,
    formatOptions,
    value,
    minValue,
    maxValue,
    status = { type: 'normal' },
    dataTestPrefixId,
    sx,
    ...rest
  } = props;

  const { isLocked, hintMessageId, handleContainerClick, suffixContent, combinedRefs } =
    useFieldUtils({
      id,
      suffix,
      status,
      isDisabled,
      ref,
    });

  return (
    <div onClick={handleContainerClick}>
      <TextInputBase {...props} status={{ ...status, id: hintMessageId }} sx={sx}>
        <div css={{ width: '100%' }}>
          <ReactAriaNumberField
            value={value}
            step={step}
            onChange={onChange}
            formatOptions={formatOptions}
            minValue={minValue}
            maxValue={maxValue}
          >
            <Group css={hasStepper ? groupStyles() : {}}>
              <Input
                id={id}
                readOnly={isLocked || isReadOnly}
                disabled={isDisabled || isLocked}
                required={isRequired}
                placeholder={placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label}
                css={inputStyle({ label, placeholder, isLocked, isDisabled })}
                aria-invalid={status?.type === 'error'}
                aria-describedby={hintMessageId}
                data-testid={props.dataTestId ? `input_${props.dataTestId}` : 'input'}
                ref={combinedRefs}
                {...omit(rest, ['value', 'onChange', 'dataTestId'])}
              />
              <Label
                htmlFor={id}
                label={label}
                isRequired={isRequired}
                isAnimated={Boolean(value)}
                hasError={!isDisabled && status?.type === 'error'}
              />
              {hasStepper && (
                <Stepper
                  isDisabled={isLocked || isReadOnly || isDisabled}
                  dataTestIdPrefix={dataTestPrefixId}
                />
              )}
            </Group>
          </ReactAriaNumberField>
        </div>
        {suffixContent && !hasStepper && (
          <div aria-hidden={!suffixContent} css={suffixContainerStyle({})}>
            {suffixContent}
          </div>
        )}
      </TextInputBase>
    </div>
  );
});

NumberField.displayName = 'NumberField';

export default NumberField;
