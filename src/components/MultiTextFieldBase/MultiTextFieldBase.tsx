import useTheme from 'hooks/useTheme';
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
import { InputProps, Props as TextFieldProps } from 'components/TextField/TextField';
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
      disabled,
      locked,
      status,
      lean,
      dark,
      readOnly,
      label,
      id,
      placeholder,
      required = false,
      styleType,
      onOptionDelete,
      onClearAllOptions,
      isLoading,
      isInteractive = true,
      isResponsive = false,
      isTextfield = false,
      onKeyDown,
      ...rest
    } = props;

    const theme = useTheme();
    const hasValue = Boolean(value || (selectedOptions?.length && selectedOptions?.length > 0));

    const { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef } =
      useMultiTextFieldBaseUtils({
        isTextfield,
        label,
        placeholder,
        required,
        locked,
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
                onClear={!(locked || disabled) ? () => onOptionDelete(option) : undefined}
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
      [disabled, locked, onOptionDelete, selectedOptions]
    );

    return (
      <div ref={TextfieldRef}>
        <TextInputBase
          disabled={isInteractive && disabled}
          locked={isInteractive && locked}
          status={isInteractive ? status : 'normal'}
          lean={lean}
          size={'md'}
          styleType={styleType}
          {...rest}
          isInteractive={isInteractive}
          sx={textInputBaseOverrides({ hasValue, isLoading, hasLabel, isResponsive, isTextfield })(
            theme
          )}
        >
          <div css={inputContainer()}>
            {chips}
            <input
              readOnly={readOnly}
              onKeyDown={handleKeyDown}
              css={inputStyle({
                size: 'md',
                placeholder,
                label,
                dark,
                lean,
                sx: inputOverrides(),
              })}
              placeholder={inputPlaceholder}
              required={required}
              id={id}
              disabled={disabled || locked}
              {...omit(rest, 'dataTestId')}
              value={value}
              ref={ref}
            />
            {label && (
              <Label
                size={'md'}
                htmlFor={id}
                label={label}
                required={required}
                animateToTop={hasValue}
                error={status === 'error'}
              />
            )}
          </div>

          {!disabled && (
            <div css={rightIconsContainer()}>
              {isLoading && <Loader />}
              {icon && (
                <div css={rightIconStyles({ isClickable: hasValue && !locked })}>{icon}</div>
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
