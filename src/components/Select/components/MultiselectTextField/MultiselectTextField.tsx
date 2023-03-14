import useTheme from 'hooks/useTheme';
import omit from 'lodash/omit';
import React, { useMemo } from 'react';
import { generateUniqueID } from 'utils/helpers';
import { TestProps } from 'utils/types';

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
import { AcceptedIconNames } from 'components/Icon/types';
import Label from 'components/Label';
import Loader from 'components/Loader';
import { SelectOption } from 'components/Select/Select';
import { InputProps, Props as TextFieldProps } from 'components/TextField/TextField';
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
      rightIcon,
      ...rest
    } = props;

    const TextfieldRef = React.useRef<HTMLDivElement>(null);

    const theme = useTheme();

    const hasValue = Boolean(value || (selectedOptions?.length && selectedOptions?.length > 0));

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (value === '' && event.key === 'Backspace') {
        onOptionDelete();
      }
    };

    const chips = useMemo(
      () => (
        <>
          {selectedOptions?.map((option, index) => (
            <span key={generateUniqueID('chip' + index)} css={chipStyle()}>
              <Chip
                onClear={!(locked || disabled) ? () => onOptionDelete(option) : undefined}
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
      [disabled, locked, onOptionDelete, selectedOptions]
    );

    const icon = useMemo(
      () =>
        rightIcon ? (
          typeof rightIcon === 'string' ? (
            <Icon
              name={rightIcon as AcceptedIconNames}
              size={20}
              color={theme.utils.getColor('lightGrey', 650)}
            />
          ) : (
            rightIcon
          )
        ) : (
          <Icon
            size={20}
            name={locked ? 'lock' : hasValue ? 'close' : 'search'}
            color={theme.utils.getColor('lightGrey', 650)}
            onClick={hasValue && !locked ? onClearAllOptions : undefined}
            dataTestId="select-right-icon"
          />
        ),
      [hasValue, locked, onClearAllOptions, rightIcon, theme.utils]
    );

    return (
      <div ref={TextfieldRef}>
        <TextInputBase
          disabled={disabled}
          locked={locked}
          status={status}
          lean={lean}
          size={'md'}
          styleType={styleType}
          {...rest}
          sx={textInputBaseOverrides({ hasValue, isLoading })(theme)}
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
              placeholder={!label && placeholder ? `${placeholder} ${required ? '*' : ''}` : label}
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
              <div css={rightIconStyles({ isClickable: hasValue && !locked })}>{icon}</div>
            </div>
          )}
        </TextInputBase>
      </div>
    );
  }
);

MultiselectTextField.displayName = 'MultiselectTextField';

export default MultiselectTextField;
