import { StylesConfig } from 'react-select';
import elevation from '../../theme/elevation';
import { darken } from 'polished';
import { SelectOption } from './Select';
import { Theme } from '../../theme';
import { Props as TextFieldProps } from '../TextField/TextField';

const reactSelectCustomStyles = (
  theme: Theme,
  inputProps: TextFieldProps
): StylesConfig<SelectOption, false> => {
  return {
    valueContainer: () => ({
      padding: 0,
    }),
    control: () => ({}),
    menuList: base => ({
      ...base,
      padding: 0,
    }),
    menu: base => ({
      ...base,
      borderRadius: 4,
      boxShadow: elevation['02'],
      marginTop: inputProps.status !== 'normal' ? -15 : 7,
    }),
    option: (__base, state) => ({
      padding: theme.spacing.md,
      fontSize: theme.typography.fontSizes['14'],
      backgroundColor: state.isSelected ? darken(0.07, theme.palette.white) : theme.palette.white,
      ':hover': {
        backgroundColor: darken(0.03, theme.palette.white),
      },
    }),
  };
};

export default reactSelectCustomStyles;
