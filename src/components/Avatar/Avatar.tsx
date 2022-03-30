import React from 'react';

import { useTheme } from '../../index';
import { DivProps } from '../../utils/common';
import { calculateActualColorFromComponentProp } from '../../utils/themeFunctions';
import Icon from '../Icon';
import { avatarStyle } from './Avatar.style';
import { Props, AvatarSizes } from './Avatar.types';
import { iconSizeBasedOnAvatar } from './utils';

const Avatar = React.forwardRef<HTMLDivElement, Props & DivProps>(
  (
    { src = '', iconName = 'user', size = 'md', color = 'lightGrey-600', children, className },
    ref
  ) => {
    const theme = useTheme();
    const calculatedColor = calculateActualColorFromComponentProp(color);

    return (
      <div
        ref={ref}
        className={className}
        css={avatarStyle({
          size,
          fill: calculatedColor.color,
          fillShade: calculatedColor.shade,
        })}
      >
        {src && <img src={src} />}
        {!src && !children && iconName && (
          <Icon
            color={theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade)}
            name={iconName}
            size={iconSizeBasedOnAvatar(size)}
          />
        )}
        {!src && children}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export default Avatar;

//TODO: Remove on v5 and change import where necessary
export { Props, AvatarSizes };
