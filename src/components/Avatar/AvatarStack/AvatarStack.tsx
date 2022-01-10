import React, { useCallback } from 'react';
import { DivProps } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import Avatar, { AvatarSizes } from '../Avatar';
import { avatarStackStyle, avatarWrapperStyle } from './AvatarStack.style';

export type Props = {
  /** the maximum number of avatars to be displayed **/
  maxAvatars?: number;
  /** The size of the extra avatar, if any **/
  size?: AvatarSizes;
  /** the color of the extra avatar based on our colors eg. red-500 **/
  color?: string;
};

type TestProps = {
  dataTestId?: TestId;
};

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
    if (maxAvatars < 1) {
      throw new Error('maxAvatars prop must be greater than 0');
    }

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
