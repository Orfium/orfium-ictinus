import React from 'react';
import type { CommonButtonProps } from 'utils/common';
import type { TestProps } from 'utils/types';

import type { AvatarProps } from 'components/Avatar';
import Avatar from 'components/Avatar';
import { BUTTON_ICON_COLOR } from 'components/ButtonBase/constants';
import type { AcceptedIconNames } from 'components/Icon';
import { Icon } from '../../icon';
import { Text } from '../../vanilla/Text';
import type { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import ButtonBase from '../ButtonBase/ButtonBase';

export type ButtonProps = ButtonBaseProps &
  TestProps &
  CommonButtonProps & {
    /** An optional icon to put on the right of the button */
    iconRightName?: AcceptedIconNames;
    /** An optional icon to put on the left of the button */
    iconLeftName?: AcceptedIconNames;
    /** An optional avatar to put on the left of the button */
    avatar?: Pick<AvatarProps, 'src' | 'color'> & { label?: string };
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'primary',
    size = 'normal',
    iconLeftName,
    iconRightName,
    avatar,
    children,
    onClick,
    isLoading,
  } = props;

  const hasAvatar = ['primary', 'secondary', 'tertiary'].includes(type) && avatar;
  const isCompact = size === 'compact';
  const iconSize = isCompact ? 'sm' : 'md';

  return (
    <ButtonBase {...props} ref={ref} isLoading={isLoading} onClick={onClick}>
      {hasAvatar && <Avatar src={avatar?.src}>{avatar?.label}</Avatar>}
      {iconLeftName && !hasAvatar && (
        <Icon name={iconLeftName} color={BUTTON_ICON_COLOR[type]} size={iconSize} />
      )}
      <Text>{children}</Text>
      {iconRightName && (
        <Icon name={iconRightName} color={BUTTON_ICON_COLOR[type]} size={iconSize} />
      )}
    </ButtonBase>
  );
});

Button.displayName = 'Button';

export default Button;
