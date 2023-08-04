import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';

import { avatarStyle } from './Avatar.style';
import { AvatarTokens, getAvatarTokens, parseAvatarIconSize } from './Avatar.tokens';
import { AvatarProps } from './Avatar.types';
import Icon from '../Icon';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src = '', size = 1, color = 'blue', className, dataTestPrefixId = '', children }, ref) => {
    const theme = useTheme();

    const tokens = getAvatarTokens(theme);

    const avatarContent = useMemo(() => {
      if (src) {
        return <img src={src} />;
      }

      if (!src && children) {
        return children;
      }

      return (
        <Icon
          color={tokens(`textColor.${color}` as AvatarTokens)}
          name={'userAvatar'}
          size={parseFloat(tokens(`size.${size}` as AvatarTokens, parseAvatarIconSize))}
        />
      );
    }, [children, color, size, src, tokens]);

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
