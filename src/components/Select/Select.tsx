import { rem, transparentize } from 'polished';
import * as React from 'react';
import ReactSelect, { components, ControlProps, Styles, ValueType } from 'react-select';
import useTheme from '../../hooks/useTheme';
import { generateUniqueID } from '../../utils/helpers';
import Label from '../Label';

export type SelectOption = { value: string | number; label: string; isDisabled?: boolean };

export type Props = {
  /** The label that is going to be displayed */
  label: string;
  /** Options for the select dropdown */
  options: SelectOption[];
  /** The function that is used to return the selected options */
  onChange?: (value: ValueType<SelectOption>) => void;
  /** the default value of the select if needed */
  defaultValue?: SelectOption;
  /** the value of the select if select is controlled */
  value?: SelectOption;
  /** If the select is going to be disabled or not */
  disabled?: boolean;
  /** if the select is loading data */
  isLoading?: boolean;
  /** if the select value is searchable */
  isSearchable?: boolean;
  /** if the select value can be clearable */
  isClearable?: boolean;
  /** if the select has tags */
  multi?: boolean;
  /** if the select is required */
  required?: boolean;
  /** If the text field has errors */
  error?: boolean;
};

const Control: React.FC<ControlProps<SelectOption>> = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      <React.Fragment>
        {props.selectProps.label && (
          <Label
            htmlFor={props.selectProps.inputId}
            label={props.selectProps.label}
            required={props.selectProps.required}
            animateToTop={props.hasValue}
          />
        )}
        {children}
      </React.Fragment>
    </components.Control>
  );
};

const Select: React.FC<Props> = ({
  defaultValue = undefined,
  disabled = false,
  isLoading = false,
  isSearchable = false,
  isClearable = false,
  multi = false,
  required = false,
  options,
  error,
  label,
  value,
  onChange = () => {},
}) => {
  const theme = useTheme();

  const customStyles: Styles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ededed' : theme.palette.white,
      color: state.isDisabled ? theme.palette.flat.lightGray[700] : theme.palette.text.primary[400],
      padding: rem(16),
      '&:hover': {
        backgroundColor: '#f8f8f9',
      },
    }),
    control: (base, state) => ({
      ...base,
      opacity: disabled ? 0.5 : 1,
      minHeight: rem(56),
      width: 200,
      paddingLeft: rem(3),
      backgroundColor: error
        ? transparentize(0.85, theme.palette.error[400])
        : theme.palette.flat.lightGray[200],
      border: error ? `1px solid ${theme.palette.error[400]}` : '0',
      '&:hover': {},
      '&:hover svg': {
        backgroundColor: 'rgba(176, 176, 176, 0.23)',
      },
      '> div:first-of-type': {
        margin: `${rem(18)} ${rem(4)} ${rem(2)}`,
        padding: `${rem(2)} ${rem(4)}`,
      },
      label: {
        transform: state.isFocused || state.hasValue ? 'translate(1%, -65%) scale(0.8)' : 'initial',
      },
    }),
    indicatorsContainer: base => ({
      ...base,
      marginRight: rem(16),
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      color: theme.palette.text.primary[400],
      borderRadius: '100%',
      width: rem(20),
      height: rem(20),
      position: 'relative',
      svg: {
        transition: 'background 0.2s ease-in-out',
        borderRadius: '100%',
        padding: 0,
      },
    }),
    singleValue: base => ({
      ...base,
      color: theme.palette.text.primary[400],
      fontSize: theme.typography.fontSizes[16],
    }),
    multiValue: base => ({
      ...base,
      fontSize: theme.typography.fontSizes[14],
      backgroundColor: 'transparent',
      'div:first-of-type': {
        paddingLeft: 0,
      },
      'div:last-of-type': {
        backgroundColor: theme.palette.flat.lightGray[700],
        width: theme.spacing.md,
        height: theme.spacing.md,
        borderRadius: theme.spacing.md,
        top: rem(3),
        position: 'relative',
        '&:hover': {
          backgroundColor: '#cecece',
        },
        svg: {
          fill: theme.palette.white,
          backgroundColor: 'transparent',
        },
      },
    }),
  };

  return (
    <div style={{ position: 'relative' }}>
      <ReactSelect
        inputId={`select-${generateUniqueID()}`}
        styles={customStyles}
        defaultValue={defaultValue}
        isDisabled={disabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={multi}
        value={value}
        options={options}
        placeholder={false}
        onChange={onChange}
        components={{
          Control,
        }}
        label={label}
        required={required}
        inputProps={{ required }}
      />
    </div>
  );
};

export default Select;
