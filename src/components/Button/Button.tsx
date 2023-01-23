import React from 'react';
import { CommonButtonProps } from 'utils/common';
import { TestProps } from 'utils/types';

import buttonTokens from '../Button/Button.tokens';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { buttonSpanStyle } from './Button.style';
import Avatar, { AvatarProps } from 'components/Avatar';
import Icon, { AcceptedIconNames } from 'components/Icon';

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
    iconLeftName,
    iconRightName,
    avatar,
    children,
    onClick,
    isLoading,
  } = props;

  const hasAvatar = ['primary', 'secondary', 'tertiary'].includes(type) && avatar;

  return (
    <ButtonBase {...props} ref={ref} isLoading={isLoading} onClick={onClick}>
      <span css={buttonSpanStyle()}>
        {hasAvatar && <Avatar src={avatar?.src}>{avatar?.label}</Avatar>}
        {iconLeftName && !hasAvatar && (
          <Icon name={iconLeftName} color={buttonTokens.color[type].textColor} />
        )}
        <span>{children}</span>
        {iconRightName && <Icon name={iconRightName} color={buttonTokens.color[type].textColor} />}
      </span>
    </ButtonBase>
  );
});

Button.displayName = 'Button';

export default Button;
