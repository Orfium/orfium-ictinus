import { forwardRef, useMemo, type PropsWithChildren } from 'react';

import { avatarStyle, iconStyles } from './Avatar.style';
import type { AvatarProps } from './Avatar.types';
import { UserAvatar } from './UserAvatar';

const Avatar = forwardRef<HTMLDivElement, PropsWithChildren<AvatarProps>>(
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
