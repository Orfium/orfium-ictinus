import Label from 'components/Label';
import ProgressIndicator from 'components/ProgressIndicator';
import type { SelectOption } from 'components/Select';
import Tag from 'components/Tag';
import type { InputProps, TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';
import useTheme from 'hooks/useTheme';
import { last, merge, omit } from 'lodash-es';
import React, { useMemo, useRef } from 'react';
import { generateUniqueID, generateUniqueKey } from 'utils/helpers';
import type { TestProps } from 'utils/types';
import useMultiTextFieldBaseUtils from './hooks';
import {
  inputContainer,
  inputOverrides,
  progressIndicatorStyles,
  rightIconsContainer,
  tagContent,
  tagStyle,
  textInputBaseOverrides,
} from './MultiTextFieldBase.style';

export type Props = {
  /** the values of the MultiTextField if MultiTextField is controlled */
  selectedOptions: SelectOption[] | string[];
  /** Callback fired when the `input` value typed is changed */
  onInput?: React.EventHandler<any>;
  /** Value of the `input` element */
  value?: string | number;
  /** Callback fired when the Delete button of each Tag is clicked */
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
      status = { type: 'normal' },
      isReadOnly,
      label,
      id: userDefinedId,
      placeholder,
      isRequired = false,
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
    const id = useRef(userDefinedId || generateUniqueID('multiTextfield_')).current;

    const theme = useTheme();
    const hasValue = Boolean(value || (selectedOptions?.length && selectedOptions?.length > 0));

    const isLocked = status?.type === 'read-only';

    const hintMessageId = status?.hintMessage ? (status?.id ?? `${id}_hintMessage`) : undefined;

    const { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef } =
      useMultiTextFieldBaseUtils({
        isTextfield,
        label,
        placeholder,
        isRequired,
        hasValue,
        isLocked,
        value,
        onOptionDelete,
        onClearAllOptions,
        onKeyDown,
      });

    const tags = useMemo(
      () => (
        <>
          {selectedOptions?.map((option: any, index: number) => (
            <span
              key={generateUniqueKey('tag' + (typeof option === 'string' ? option : option.label))}
              css={tagStyle()}
            >
              <Tag
                onClear={
                  !(status?.type === 'read-only' || isDisabled)
                    ? () => onOptionDelete(option)
                    : undefined
                }
                dataTestPrefixId={`tag_${index}`}
              >
                <div
                  title={typeof option === 'string' ? option : option.label}
                  css={tagContent({
                    maxWidth: TextfieldRef.current?.getBoundingClientRect().width,
                  })}
                >
                  {typeof option === 'string' ? option : option.label}
                </div>
              </Tag>
            </span>
          ))}
        </>
      ),
      [isDisabled, onOptionDelete, selectedOptions, status?.type]
    );

    return (
      <div ref={TextfieldRef}>
        <TextInputBase
          isDisabled={isInteractive && isDisabled}
          status={isInteractive ? { ...status, id: hintMessageId } : { type: 'normal' }}
          {...rest}
          isInteractive={isInteractive}
          sx={merge(
            textInputBaseOverrides({ hasValue, hasLabel, isResponsive, isTextfield })(theme),
            sx
          )}
        >
          <div css={inputContainer()} data-testid="selected-tags">
            {tags}
            <input
              readOnly={isLocked || isReadOnly}
              onKeyDown={handleKeyDown(last<SelectOption | string>(selectedOptions))}
              css={inputStyle({
                placeholder,
                label,
                sx: inputOverrides(),
                isLocked,
                isDisabled,
              })}
              placeholder={inputPlaceholder}
              required={isRequired}
              id={id}
              disabled={isDisabled || isLocked}
              data-testid={rest.dataTestId ? `input_${rest.dataTestId}` : 'input'}
              aria-invalid={status?.type === 'error'}
              aria-describedby={hintMessageId}
              {...omit(rest, 'dataTestId')}
              value={value}
              ref={ref}
            />
            {label && (
              <Label
                htmlFor={id}
                label={label}
                isRequired={isRequired}
                isAnimated={hasValue}
                hasError={!isDisabled && status?.type === 'error'}
              />
            )}
          </div>

          {!isDisabled && (
            <div css={rightIconsContainer()}>
              {isLoading ? (
                <div css={progressIndicatorStyles()}>
                  <ProgressIndicator type="circular" dataTestPrefixId="multi_textdield_base" />
                </div>
              ) : (
                icon
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
