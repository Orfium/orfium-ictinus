import React, { useCallback } from 'react';
import { DivProps } from 'utils/common';
import { errorHandler, generateTestDataId } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { avatarStackStyle, avatarWrapperStyle } from './AvatarStack.style';
import { AvatarStackProps } from './AvatarStack.types';
import { errors } from './utils';
import Avatar from '../Avatar';

const AvatarStack = React.forwardRef<HTMLDivElement, AvatarStackProps & TestProps & DivProps>(
  ({ maxAvatars = 4, size = 1, color = 'blue', dataTestId = '', children: childrenProp }, ref) => {
    errorHandler<AvatarStackProps>(errors, { maxAvatars });

    const children = React.Children.toArray(childrenProp);

    const extraAvatars = children.length > maxAvatars ? children.length - maxAvatars : 0;

    const renderContent = useCallback(
      () =>
        children.slice(0, children.length - extraAvatars).map((child, index) => {
          return (
            <div key={index} css={avatarWrapperStyle({ zIndex: children.length - index, size })}>
              {child}
            </div>
          );
        }),
      [children, extraAvatars, size]
    );

    return (
      <div
        ref={ref}
        data-testid={generateTestDataId('avatarstack', dataTestId)}
        css={avatarStackStyle({ size })}
      >
        {renderContent()}
        {extraAvatars ? (
          <div css={avatarWrapperStyle({ zIndex: 0, size })}>
            <Avatar size={size} color={color}>
              +{extraAvatars}
            </Avatar>
          </div>
        ) : null}
      </div>
    );
  }
);
AvatarStack.displayName = 'AvatarStack';

export default AvatarStack;
