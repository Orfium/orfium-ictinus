import useCombinedRefs from 'hooks/useCombinedRefs';
import { useTheme } from 'index';
import { omit } from 'lodash';
import React, { useMemo } from 'react';
import { NumberField as ReactAriaNumberField, Group, Input,  } from 'react-aria-components';
import { generateUniqueID } from 'utils/helpers';

import Stepper from './components/Stepper/Stepper';
import { TextFieldProps } from '../TextField/TextField';
import { getTextInputBaseTokens } from '../TextInputBase/TextInputBase.tokens';
import Icon, { AcceptedIconNames } from 'components/Icon';
import Label from 'components/Label';
import { suffixContainerStyle } from 'components/TextField/TextField.style';
import TextInputBase from 'components/TextInputBase/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type NumberFieldProps = Omit<TextFieldProps, 'mask' | 'maskChar' | 'value' | 'onChange'> & {
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
    ...rest
  } = props;

  const theme = useTheme();
  const tokens = getTextInputBaseTokens(theme);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const isLocked = status?.type === 'read-only';
  const hintMessageId = status?.hintMessage ? status?.id ?? `${id}_hintMessage` : undefined;

  const handleClick = () => {
    if (!isLocked && !isDisabled) {
      combinedRefs.current?.focus();
    }
  };

  const suffixContent = useMemo(() => {
    if (isLocked || typeof suffix === 'string') {
      const iconName = isLocked ? 'lock' : suffix;

      return (
        <Icon
          name={iconName as AcceptedIconNames}
          size={16}
          color={theme.utils.getColor('lightGrey', 650)}
        />
      );
    }

    return suffix;
  }, [isLocked, suffix, theme.utils]);

  const textInputBaseSx = useMemo(
    () =>
      !suffixContent && !hasStepper
        ? {
            textField: {
              paddingRight: tokens('paddingContentLeft'),
            },
          }
        : {},
    [hasStepper, suffixContent, tokens]
  );

  return (
    <div onClick={handleClick}>
      <TextInputBase {...props} status={{ ...status, id: hintMessageId }} sx={textInputBaseSx}>
        <div css={{ width: '100%' }}>
          <ReactAriaNumberField
            value={value}
            step={step}
            onChange={onChange}
            formatOptions={formatOptions}
            minValue={minValue}
            maxValue={maxValue}
          >
            <Group>
              <Input
                id={id}
                readOnly={isLocked || isReadOnly}
                disabled={isDisabled || isLocked}
                required={isRequired}
                placeholder={placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label}
                css={inputStyle({ label, placeholder })}
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
                hasError={status?.type === 'error'}
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
          <div aria-hidden={!suffixContent} css={suffixContainerStyle()}>
            {suffixContent}
          </div>
        )}
      </TextInputBase>
    </div>
  );
});

NumberField.displayName = 'NumberField';

export default NumberField;
