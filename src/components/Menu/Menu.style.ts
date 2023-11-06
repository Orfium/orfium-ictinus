import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { Props } from '../Button/Button';

export const buttonSpanStyle = ({
  size,
  iconLeft,
  iconRight,
  hasChildren,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => ({
  display: iconLeft || iconRight ? 'flex' : 'block',
  flexDirection: iconLeft || iconRight ? 'row' : 'column',
  alignItems: iconLeft || iconRight ? ('center' as const) : ('flex-start' as const),
  '> :first-of-type': {
    marginLeft: iconLeft || iconRight ? (size === 'sm' ? theme.spacing.sm : theme.spacing.md) : 0,
    marginRight: hasChildren ? theme.spacing.sm : 0,
  },
});
