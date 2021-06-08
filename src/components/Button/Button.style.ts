import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { Props } from './Button';

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
};

export const iconStyle = () => () => ({
  display: 'inline-flex',
});

export const childrenWrapperStyle = ({
  iconLeft,
  iconRight,
  hasChildren,
}: RequiredProperties<Omit<Props, 'isIconButton'> & { hasChildren: boolean }>) => (
  theme: Theme
) => {
  const rightIconExists = hasChildren && iconRight;
  const leftIconExists = hasChildren && iconLeft;

  return {
    marginLeft: leftIconExists ? theme.spacing.sm : 0,
    marginRight: rightIconExists ? theme.spacing.sm : 0,
  };
};
