import * as React from 'react';
import ReactSelect, { CommonProps, StylesConfig, ValueType } from 'react-select';
import useTheme from '../../hooks/useTheme';
import { generateUniqueID } from '../../utils/helpers';
import TextField from '../TextField';
import Icon from '../Icon';
import { Props as TextFieldProps } from '../TextField/TextField';

export type SelectOption = { value: string | number; label: string; isDisabled?: boolean };

export type Props = {
  /** The function that is used to return the selected options */
  onChange?: (value: ValueType<SelectOption, false>) => void;
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
      ...restInputProps
    },
    ref
  ) => {
    const theme = useTheme();

    const customStyles: StylesConfig<SelectOption, false> = {
      valueContainer: () => ({
        padding: 0,
      }),
      control: () => ({}),
    };

    return (
      <div css={{ position: 'relative' }}>
        <ReactSelect
          inputId={`select-${generateUniqueID()}`}
          styles={customStyles}
          defaultValue={defaultValue}
          isMulti={multi}
          value={value}
          options={options}
          placeholder={false}
          // onChange={onChange} // TODO fix this
          components={{
            DropdownIndicator: null,
            IndicatorSeparator: null,
            // eslint-disable-next-line react/display-name
            Input: (props: CommonProps<SelectOption, false>) => {
              return (
                <TextField
                  {...props}
                  rightIcon={
                    <Icon name={'arrowDown'} color={theme.utils.getColor('lightGray', 600)} />
                  }
                  {...restInputProps}
                  ref={ref}
                  value={props?.selectProps?.value?.label}
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
