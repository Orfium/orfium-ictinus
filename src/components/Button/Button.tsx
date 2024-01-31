import useTheme from 'hooks/useTheme';
import React from 'react';
import type { CommonButtonProps } from 'utils/common';
import type { TestProps } from 'utils/types';

import { buttonSpanStyle } from './Button.style';
import type { ButtonTokens } from '../Button/Button.tokens';
import { getButtonTokens } from '../Button/Button.tokens';
import type { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import ButtonBase from '../ButtonBase/ButtonBase';
import type { AvatarProps } from 'components/Avatar';
import Avatar from 'components/Avatar';
import type { AcceptedIconNames } from 'components/Icon';
import Icon from 'components/Icon';

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

  const theme = useTheme();
  const tokens = getButtonTokens(theme);

  return (
    <ButtonBase {...props} ref={ref} isLoading={isLoading} onClick={onClick}>
      <span css={buttonSpanStyle()}>
        {size === 'compact' ? (
          <span>{children}</span>
        ) : (
          <>
            {hasAvatar && <Avatar src={avatar?.src}>{avatar?.label}</Avatar>}
            {iconLeftName && !hasAvatar && (
              <Icon name={iconLeftName} color={tokens(`${type}.textColor` as ButtonTokens)} />
            )}
            <span>{children}</span>
            {iconRightName && (
              <Icon name={iconRightName} color={tokens(`${type}.textColor` as ButtonTokens)} />
            )}
          </>
        )}
      </span>
    </ButtonBase>
  );
});

Button.displayName = 'Button';

export default Button;
