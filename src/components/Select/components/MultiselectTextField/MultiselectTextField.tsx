import useTheme from 'hooks/useTheme';
import omit from 'lodash/omit';
import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { generateUniqueKey } from 'utils/helpers';
import type { TestProps } from 'utils/types';

import {
  chipContent,
  chipStyle,
  inputContainer,
  inputOverrides,
  rightIconsContainer,
  rightIconStyles,
  textInputBaseOverrides,
} from './MultiselectTextField.style';
import Chip from 'components/Chip';
import Icon from 'components/Icon';
import Label from 'components/Label';
import Loader from 'components/Loader';
import type { SelectOption } from 'components/Select';
import type { InputProps, TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

type Props = {
  /** the values of the MultiSelect if MultiSelect is controlled */
  selectedOptions?: SelectOption[];
  /** Callback fired when the `input` value typed is changed */
  onInput?: React.EventHandler<any>;
  /** Value of the `input` element */
  value?: string | number;
  /** Callback fired when the Delete button of each Chip is clicked */
  onOptionDelete: (option?: SelectOption) => void;
  /** Callback fired when the Delete button of the whole MultiSelect is clicked */
  onClearAllOptions: () => void;
  /** If the component is loading */
  isLoading?: boolean;
} & Omit<TextFieldProps, 'size'>;

const MultiselectTextField = React.forwardRef<HTMLInputElement, Props & InputProps & TestProps>(
  (props, ref) => {
    const {
      selectedOptions,
      value,
      isDisabled,
      status = { type: 'normal' },
      label,
      id,
      placeholder,
      isRequired = false,
      onOptionDelete,
      onClearAllOptions,
      isLoading,
      suffix,
      ...rest
    } = props;

    const isLocked = status.type === 'read-only';

    const TextfieldRef = React.useRef<HTMLDivElement>(null);

    const theme = useTheme();

    const hasValue = Boolean(value || (selectedOptions?.length && selectedOptions?.length > 0));

    const inputPlaceholder = useMemo(() => {
      if (!label && placeholder) {
        return isRequired ? `${placeholder} *` : placeholder;
      }

      return label;
    }, [label, placeholder, isRequired]);

    const iconName = useMemo(() => {
      if (isLocked) {
        return 'lock';
      }

      if (hasValue) {
        return 'close';
      }

      return 'search';
    }, [hasValue, isLocked]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (value === '' && event.key === 'Backspace') {
        onOptionDelete();
      }
    };

    const chips = useMemo(
      () => (
        <>
          {selectedOptions?.map((option, index) => (
            <span key={generateUniqueKey('chip' + index)} css={chipStyle()}>
              <Chip
                onClear={!(isLocked || isDisabled) ? () => onOptionDelete(option) : undefined}
                fill="lightGrey"
                dataTestId={`chip_${index}`}
              >
                <div
                  title={option.label}
                  css={chipContent({
                    maxWidth: TextfieldRef.current?.getBoundingClientRect().width,
                  })}
                >
                  {option.label}
                </div>
              </Chip>
            </span>
          ))}
        </>
      ),
      [isDisabled, isLocked, onOptionDelete, selectedOptions]
    );

    const icon = useMemo(() => {
      if (suffix) {
        if (typeof suffix === 'string') {
          return <Icon name={suffix} size={20} color={theme.utils.getColor('lightGrey', 650)} />;
        }

        return suffix;
      }

      return (
        <Icon
          size={20}
          name={iconName}
          color={theme.utils.getColor('lightGrey', 650)}
          onClick={hasValue && !isLocked ? onClearAllOptions : undefined}
          dataTestId="select-right-icon"
        />
      );
    }, [hasValue, iconName, isLocked, onClearAllOptions, suffix, theme.utils]);

    return (
      <div ref={TextfieldRef}>
        <TextInputBase
          isDisabled={isDisabled}
          status={status}
          {...rest}
          sx={textInputBaseOverrides({ hasValue, isLoading })(theme)}
        >
          <div css={inputContainer()}>
            {chips}
            <input
              readOnly={isLocked}
              onKeyDown={handleKeyDown}
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
              {...omit(rest, 'dataTestId')}
              value={value}
              ref={ref}
            />
            {label && (
              <Label
                size="md"
                htmlFor={id}
                label={label}
                isRequired={isRequired}
                isAnimated={hasValue}
                hasError={status.type === 'error'}
              />
            )}
          </div>

          {!isDisabled && (
            <div css={rightIconsContainer()}>
              {isLoading && <Loader />}
              <div css={rightIconStyles({ isClickable: hasValue && !isLocked })}>{icon}</div>
            </div>
          )}
        </TextInputBase>
      </div>
    );
  }
);

MultiselectTextField.displayName = 'MultiselectTextField';

export default React.memo(MultiselectTextField, isEqual);
