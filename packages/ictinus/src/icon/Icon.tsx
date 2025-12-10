import { AccountIcon, UserIcon } from '../icons';
import { type BoxProps } from '../vanilla/Box';

export type IconProps = {
  name: keyof typeof ICONS;
  size?: 'xs' | 'sm' | 'md' | 'lg';
} & Omit<BoxProps, 'size'>;

const SIZE = {
  xs: '3',
  sm: '4',
  md: '5',
  lg: '6',
} as const;

export function Icon({ name, size = 'md', ...props }: IconProps) {
  const IconComponent = ICONS[name];

  return <IconComponent size={SIZE[size]} {...props} />;
}

export const ICONS = {
  account: AccountIcon,
  user: UserIcon,
} as const;
