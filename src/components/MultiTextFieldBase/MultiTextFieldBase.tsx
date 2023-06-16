import useTheme from 'hooks/useTheme';
import { merge } from 'lodash';
import omit from 'lodash/omit';
import React, { useMemo } from 'react';
import { generateUniqueID } from 'utils/helpers';
import { TestProps } from 'utils/types';

import useMultiTextFieldBaseUtils from './hooks';
import {
  chipContent,
  chipStyle,
  inputContainer,
  inputOverrides,
  rightIconsContainer,
  rightIconStyles,
  textInputBaseOverrides,
} from './MultiTextFieldBase.style';
import Chip from 'components/Chip';
import Label from 'components/Label';
import Loader from 'components/Loader';
import { SelectOption } from 'components/Select/Select';
import { InputProps, TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type Props = {
  /** the values of the MultiTextField if MultiTextField is controlled */
  selectedOptions?: SelectOption[] | string[];
  /** Callback fired when the `input` value typed is changed */
  onInput?: React.EventHandler<any>;
  /** Value of the `input` element */
  value?: string | number;
  /** Callback fired when the Delete button of each Chip is clicked */
  onOptionDelete: (option?: SelectOption | string) => void;
  /** Callback fired when the Delete button of the whole MultiSelect is clicked */
  onClearAllOptions: () => void;
  /** If the component is loading */
  isLoading?: boolean;
  /** Whether the Textfield should change its styles when hovered/focused etc */
  isInteractive?: boolean;
  /** If true, the TextField has a dynamic width, bounded by max and min width values  */
  isResponsive?: boolean;
  isTextfield?: boolean;
} & Omit<TextFieldProps, 'size'>;

const MultiTextFieldBase = React.forwardRef<HTMLInputElement, Props & InputProps & TestProps>(
  (props, ref) => {
    const {
      selectedOptions,
      value,
      isDisabled,
      isLocked,
      status,
      isLean,
      isDark,
      isReadOnly,
      label,
      id,
      placeholder,
      isRequired = false,
      styleType,
      onOptionDelete,
      onClearAllOptions,
      isLoading,
      isInteractive = true,
      isResponsive = false,
      isTextfield = false,
      onKeyDown,
      sx,
      ...rest
    } = props;

    const theme = useTheme();
    const hasValue = Boolean(value || (selectedOptions?.length && selectedOptions?.length > 0));

    const { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef } =
      useMultiTextFieldBaseUtils({
        isTextfield,
        label,
        placeholder,
        isRequired,
        isLocked,
        hasValue,
        value,
        onOptionDelete,
        onClearAllOptions,
        onKeyDown,
      });

    const chips = useMemo(
      () => (
        <>
          {selectedOptions?.map((option: any, index: number) => (
            <span key={generateUniqueID('chip' + index)} css={chipStyle()}>
              <Chip
                onClear={!(isLocked || isDisabled) ? () => onOptionDelete(option) : undefined}
                fill="lightGrey"
                dataTestId={`chip_${index}`}
              >
                <div
                  title={typeof option === 'string' ? option : option.label}
                  css={chipContent({
                    maxWidth: TextfieldRef.current?.getBoundingClientRect().width,
                  })}
                >
                  {typeof option === 'string' ? option : option.label}
                </div>
              </Chip>
            </span>
          ))}
        </>
      ),
      [isDisabled, isLocked, onOptionDelete, selectedOptions]
    );

    return (
      <div ref={TextfieldRef}>
        <TextInputBase
          isDisabled={isInteractive && isDisabled}
          isLocked={isInteractive && isLocked}
          status={isInteractive ? status : 'normal'}
          isLean={isLean}
          size={'md'}
          styleType={styleType}
          {...rest}
          isInteractive={isInteractive}
          sx={merge(
            textInputBaseOverrides({ hasValue, isLoading, hasLabel, isResponsive, isTextfield })(
              theme
            ),
            sx
          )}
        >
          <div css={inputContainer()}>
            {chips}
            <input
              readOnly={isReadOnly}
              onKeyDown={handleKeyDown}
              css={inputStyle({
                size: 'md',
                placeholder,
                label,
                isDark,
                isLean,
                sx: inputOverrides(),
              })}
              placeholder={inputPlaceholder}
              required={isRequired}
              id={id}
              disabled={isDisabled || isLocked}
              {...omit(rest, 'dataTestId')}
              value={value}
              ref={ref}
            />
            {label && (
              <Label
                size={'md'}
                htmlFor={id}
                label={label}
                isRequired={isRequired}
                isAnimated={hasValue}
                hasError={status === 'error'}
              />
            )}
          </div>

          {!isDisabled && (
            <div css={rightIconsContainer()}>
              {isLoading && <Loader />}
              {icon && (
                <div css={rightIconStyles({ isClickable: hasValue && !isLocked })}>{icon}</div>
              )}
            </div>
          )}
        </TextInputBase>
      </div>
    );
  }
);

MultiTextFieldBase.displayName = 'MultiTextFieldBase';

export default MultiTextFieldBase;
