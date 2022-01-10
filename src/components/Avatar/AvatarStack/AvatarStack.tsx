import React from 'react';
import { DivProps } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import Avatar, { AvatarSizes } from '../Avatar';
import { avatarStackStyle } from './AvatarStack.style';

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
    const clampedMax = maxAvatars < 1 ? 1 : maxAvatars;

    const children = React.Children.toArray(childrenProp);

    const extraAvatars = children.length > clampedMax ? children.length - clampedMax : 0;

    return (
      <div
        ref={ref}
        data-testid={generateTestDataId('avatarstack', dataTestId)}
        style={{ display: 'flex' }}
      >
        {children.slice(0, children.length - extraAvatars).map((child, index) => {
          return (
            <div key={index} css={avatarStackStyle({ zIndex: children.length - index, size })}>
              {child}
            </div>
          );
        })}
        {extraAvatars ? (
          <div css={avatarStackStyle({ zIndex: 0, size })}>
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
