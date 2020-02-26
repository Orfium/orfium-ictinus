/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import ReactSelect, { Styles, components } from 'react-select';
// import { textFieldStyle, wrapperStyle } from 'components/TextField/TextField.style';
// import TextField from 'components/TextField';
// import { buttonStyle, buttonSpanStyle } from './Select.style';
import useTheme from 'hooks/useTheme';
import { rem } from 'polished';

export type Props = {
  disabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  multi?: boolean;
};

const Control: React.FC<{}> = ({ children, ...props }) => {
  const theme = useTheme();

  // @ts-ignore
  console.log(props, props.getValue());

  return (
    <div>
      {/*
      //@ts-ignore */}
      <components.Control {...props}>
        <label
          css={css`
            transition: 0.25s, opacity 0.25s ease-in-out;
            // @ts-ignore
            transform: ${!props.hasValue ? 'translate(1%, 0)' : 'translate(1%, -65%) scale(0.8);'};
            transform-origin: 0 0;
            width: 100%;
            height: ${theme.typography.fontSizes['14']};
            user-select: none;
            z-index: 1500;

            font-size: ${theme.typography.fontSizes['14']};
            font-weight: ${theme.typography.weights.black};
            color: ${theme.palette.gray100};

            position: absolute;
            top: 1.3rem;
            left: 0.7rem;
          `}
        >
          {'Label'} *
        </label>
        {children}
      </components.Control>
    </div>
  );
};

const Select: React.FC<Props> = ({
  disabled = false,
  isLoading = false,
  isSearchable = false,
  isClearable = false,
  multi = false,
}) => {
  const theme = useTheme();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'banana', label: 'Banana' },
    { value: 'citrus', label: 'Citrus' },
    { value: 'vanilla', label: 'Vanilla', isDisabled: true },
  ];

  const customStyles: Styles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      backgroundColor: state.isSelected ? '#ededed' : '#ffffff',
      color: state.isDisabled ? theme.palette.gray100 : '#231f20',
      padding: 16,
      '&:hover': {
        backgroundColor: '#f8f8f9',
      },
    }),
    control: base => ({
      ...base,
      minHeight: 56,
      backgroundColor: '#f5f5f6',
      border: 0,
      // none of react-select's styles are passed to <Control />
      width: 200,
      paddingLeft: 3,
      '&:hover svg': {
        backgroundColor: 'rgba(176, 176, 176, 0.23)',
      },
      '> div:first-of-type': {
        margin: '18px 4px 2px',
        padding: '2px 4px',
        // marginTop: 15,
        // position: 'relative',
        // top: 15,
      },
    }),
    indicatorsContainer: base => ({
      // right: 12,
      // position: 'absolute',
      ...base,
      marginRight: rem(16),
    }),
    indicatorSeparator: () => ({
      opacity: 0,
    }),
    dropdownIndicator: () => ({
      color: '#231f20',
      borderRadius: '100%',
      width: 20,
      height: 20,
      position: 'relative',
      svg: {
        transition: 'background 0.2s ease-in-out',
        marginTop: -2,
        padding: 2,
        borderRadius: '100%',
      },
    }),
    singleValue: base => ({
      ...base,
      color: '#231f20',
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
        top: 3,
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
        // @ts-ignore
        components={{
          Control,
        }}
        label={'asdasd'}
      />
    </div>
  );
};

export default Select;
