import React, { useCallback } from 'react';
import { DivProps } from 'utils/common';
import { errorHandler, generateTestDataId } from 'utils/helpers';
import { TestProps } from 'utils/types';

import Avatar from '../Avatar';
import { avatarStackStyle, avatarWrapperStyle } from './AvatarStack.style';
import { Props } from './AvatarStack.types';
import { errors } from './utils';

const AvatarStack = React.forwardRef<HTMLDivElement, Props & TestProps & DivProps>(
  (
    {
      maxAvatars = 4,
      size = 'md',
      color = 'lightGrey-600',
      dataTestId = '',
      children: childrenProp,
    },
    ref
  ) => {
    errorHandler<Props>(errors, { maxAvatars });

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

//TODO: Remove on v5 and change import where necessary
export { Props };
