import { Theme } from 'theme';

import { ButtonProps } from './Button';

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
};

export const iconStyle = () => () => ({
  display: 'inline-flex',
});

export const childrenWrapperStyle =
  ({
    iconLeft,
    iconRight,
    hasChildren,
  }: Omit<
    ButtonProps,
    'block' | 'isIconButton' | 'buttonType' | 'dataTestId' | 'onClick' | 'ref'
  > & {
    hasChildren: boolean;
  }) =>
  (theme: Theme) => {
    const rightIconExists = hasChildren && iconRight;
    const leftIconExists = hasChildren && iconLeft;

    return {
      marginLeft: leftIconExists ? theme.spacing.get('4') : 0,
      marginRight: rightIconExists ? theme.spacing.get('4') : 0,
    };
  };
