import React from 'react';

import Button, { ButtonProps } from '../../Button';

const ButtonShowcase: React.FCC<ButtonProps & { hasAvatar: boolean; buttonLabel: string }> = ({
  isBlock,
  type,
  hasAvatar,
  avatar,
  size,
  iconLeftName,
  iconRightName,
  isLoading,
  isDisabled,
  buttonLabel,
}) => {
  const avatarProps = hasAvatar ? { avatar } : {};

  return (
    <Button
      isBlock={isBlock}
      type={type}
      size={size}
      iconLeftName={iconLeftName}
      iconRightName={iconRightName}
      isLoading={isLoading}
      isDisabled={isDisabled}
      {...avatarProps}
    >
      {buttonLabel}
    </Button>
  );
};

export default ButtonShowcase;
