import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { ButtonProps } from '../Button/Button';

const getButtonMargin =
  ({ iconLeftName, iconRightName }: Pick<ButtonProps, 'iconLeftName' | 'iconRightName'>) =>
  (theme: Theme) => {
    if (iconLeftName || iconRightName) {
      return theme.globals.spacing.get('6');
    }

    return 0;
  };

export const buttonSpanStyle =
  ({
    iconLeftName,
    iconRightName,
    hasChildren,
  }: RequiredProperties<ButtonProps & { hasChildren: boolean }>) =>
  (theme: Theme) => ({
    display: iconLeftName || iconRightName ? 'flex' : 'block',
    flexDirection: iconLeftName || iconRightName ? 'row' : 'column',
    alignItems: iconLeftName || iconRightName ? ('center' as const) : ('flex-start' as const),
    '> :first-of-type': {
      marginLeft: getButtonMargin({ iconLeftName, iconRightName })(theme),
      marginRight: hasChildren ? theme.globals.spacing.get('4') : 0,
    },
  });
