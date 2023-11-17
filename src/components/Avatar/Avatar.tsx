import React, { useMemo } from 'react';

import UserAvatar from './assets/user-avatar.svg';
import { avatarStyle, iconStyles } from './Avatar.style';
import { AvatarProps } from './Avatar.types';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src = '', size = 1, color = 'blue', className, dataTestPrefixId = '', children }, ref) => {
    const avatarContent = useMemo(() => {
      if (src) {
        return <img src={src} />;
      }

      if (!src && children) {
        return children;
      }

      return <UserAvatar css={iconStyles({ size, color })} />;
    }, [children, color, size, src]);

    return (
      <div
        ref={ref}
        className={className}
        css={avatarStyle({
          size,
          color,
        })}
        data-testid={`${dataTestPrefixId}_avatar`}
      >
        {avatarContent}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export default Avatar;
