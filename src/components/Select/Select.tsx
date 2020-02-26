import * as React from 'react';
import ReactSelect, { components, ControlProps, Styles } from 'react-select';
import useTheme from 'hooks/useTheme';
import { rem } from 'polished';
import Label from 'components/Label';

type SelectOption = { value: string; label: string; isDisabled?: boolean };

export type Props = {
  /** The label that is going to be displayed */
  label: string;
  /** Options for the select dropdown */
  options: SelectOption[];
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
};

const Control: React.FC<ControlProps<{}> & { label?: string }> = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      <React.Fragment>
        {props.selectProps.label && (
          <Label label={props.selectProps.label} required animateToTop={props.hasValue} />
        )}
        {children}
      </React.Fragment>
    </components.Control>
  );
};

const Select: React.FC<Props> = ({
  disabled = false,
  isLoading = false,
  isSearchable = false,
  isClearable = false,
  multi = false,
  required = false,
  options,
  label,
}) => {
  const theme = useTheme();

  const customStyles: Styles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ededed' : '#ffffff',
      color: state.isDisabled ? theme.palette.gray100 : theme.palette.text.primary,
      padding: rem(16),
      '&:hover': {
        backgroundColor: '#f8f8f9',
      },
    }),
    control: base => ({
      ...base,
      minHeight: rem(56),
      backgroundColor: '#f5f5f6',
      border: 0,
      width: 200,
      paddingLeft: rem(3),
      '&:hover svg': {
        backgroundColor: 'rgba(176, 176, 176, 0.23)',
      },
      '> div:first-of-type': {
        margin: `${rem(18)} ${rem(4)} ${rem(2)}`,
        padding: `${rem(2)} ${rem(4)}`,
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
      color: theme.palette.text.primary,
      borderRadius: '100%',
      width: rem(20),
      height: rem(20),
      position: 'relative',
      svg: {
        transition: 'background 0.2s ease-in-out',
        marginTop: -rem(2),
        padding: rem(2),
        borderRadius: '100%',
      },
    }),
    singleValue: base => ({
      ...base,
      color: theme.palette.text.primary,
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
        backgroundColor: theme.palette.gray100,
        width: theme.spacing.md,
        height: theme.spacing.md,
        borderRadius: theme.spacing.md,
        top: rem(3),
        position: 'relative',
        '&:hover': {
          backgroundColor: '#cecece',
        },
        svg: {
          fill: '#fff',
          backgroundColor: 'transparent',
        },
      },
    }),
  };

  return (
    <div style={{ position: 'relative' }}>
      <ReactSelect
        styles={customStyles}
        defaultValue={options[0]}
        isDisabled={disabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={multi}
        options={options}
        placeholder={false}
        components={{
          Control,
        }}
        label={label}
        required={required}
      />
    </div>
  );
};

export default Select;
