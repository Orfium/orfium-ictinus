import * as React from 'react';
import ReactSelect, { ValueType } from 'react-select';
import useTheme from '../../hooks/useTheme';
import { generateUniqueID } from '../../utils/helpers';
import TextField from '../TextField';
import Icon from '../Icon';
import { Props as TextFieldProps } from '../TextField/TextField';
import customStyles from './Select.style';
import pick from 'lodash/pick';

export type SelectOption = { value: string | number; label: string; isDisabled?: boolean };

export type Props = {
  /** The function that is used to return the selected options */
  onChange?: (value: ValueType<SelectOption, boolean>) => void;
  /** the default value of the select if needed */
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  value?: SelectOption;
  /** if the select has tags */
  multi?: boolean;
  /** Options for the select dropdown */
  options: SelectOption[];
} & TextFieldProps;

const Select = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      onChange = () => {},
      defaultValue = undefined,
      value,
      multi = false,
      options,
      status = 'normal',
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();
    const inputRef = React.useRef<any>(ref);

    return (
      <div css={{ position: 'relative' }}>
        <ReactSelect
          ref={inputRef}
          inputId={`select-${generateUniqueID()}`}
          styles={customStyles(theme, { status, ...restInputProps })}
          defaultValue={defaultValue}
          isMulti={multi}
          value={value}
          options={options}
          placeholder={false}
          onChange={onChange}
          components={{
            DropdownIndicator: null,
            IndicatorSeparator: null,
            // eslint-disable-next-line react/display-name
            Input: props => {
              console.log(props);

              return (
                <TextField
                  {...pick(props, ['onBlur', 'onChange', 'onFocus'])}
                  rightIcon={
                    <Icon
                      size={20}
                      name={props?.selectProps.menuIsOpen ? 'chevronLargeUp' : 'chevronLargeDown'}
                      color={theme.utils.getColor('lightGray', 400)}
                    />
                  }
                  status={status}
                  {...restInputProps}
                  value={props?.selectProps.value?.label}
                  ref={inputRef}
                />
              );
            },
          }}
        />
      </div>
    );
  }
);
Select.displayName = 'Select';

export default Select;
