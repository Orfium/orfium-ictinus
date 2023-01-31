import { useTheme } from '@emotion/react';
import React, { useMemo } from 'react';

import Icon from '../Icon';
import { avatarStyle } from './Avatar.style';
import getTokens from './Avatar.tokens';
import { AvatarProps } from './Avatar.types';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src = '', size = 1, color = 'blue', className, dataTestPrefixId = '', children }, ref) => {
    const theme = useTheme();
    const tokens = getTokens(theme);

    const avatarContent = useMemo(() => {
      if (src) {
        return <img src={src} />;
      }

      if (!src && children) {
        return children;
      }

      return (
        <Icon
          color={tokens.color.getForegroundColor(color)}
          name={'userAvatar'}
          size={parseFloat(tokens.iconSize[size])}
        />
      );
    }, [children, color, size, src, tokens.color, tokens.iconSize]);

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
