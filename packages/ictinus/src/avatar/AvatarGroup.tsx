import { Children, cloneElement, forwardRef, type ReactElement, type RefObject } from 'react';

import { useSlotProps } from '../components/utils/Slots';
import { useDOMRef } from '../components/utils/useDOMRef';
import { cn } from '../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../vanilla/Box';

import { Avatar, type AvatarColor } from './Avatar';
import * as styles from './AvatarGroup.css';

export type AvatarGroupProps = BoxProps<
  'div',
  NonNullable<styles.AvatarGroupVariants> & {
    maxAvatars?: number;
    color?: AvatarColor;
    children: ReactElement | ReactElement[];
  }
>;

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { size = '1', color = 'blue', maxAvatars = 4, children, ...props },
    ref: RefObject<HTMLDivElement>
  ) => {
    props = useSlotProps(props, 'avatarGroup');
    const domRef = useDOMRef(ref);
    const { boxProps, restProps } = extractBoxProps(props);

    // Validate maxAvatars
    if (maxAvatars < 1) {
      throw new Error('maxAvatars prop must be greater than 0');
    }

    const childrenArray = Children.toArray(children);
    const totalAvatars = childrenArray.length;
    const extraAvatars = totalAvatars > maxAvatars ? totalAvatars - maxAvatars : 0;
    const visibleChildren = childrenArray.slice(0, totalAvatars - extraAvatars);

    const getZIndex = (index: number) => {
      const zIndex = Math.min(Math.max(totalAvatars - index, 0), 10);

      return String(zIndex) as '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
    };

    return (
      <Box asChild {...boxProps}>
        <div
          ref={domRef}
          {...restProps}
          className={cn(styles.avatarGroup({ size }), boxProps.className)}
        >
          {visibleChildren.map((child, index) => (
            <div
              key={`avatar-${(child as ReactElement)?.key || `child-${index}`}`}
              className={styles.avatarWrapper({
                size,
                zIndex: getZIndex(index),
              })}
            >
              {cloneElement(child as ReactElement, { size })}
            </div>
          ))}
          {extraAvatars > 0 && (
            <div
              className={styles.avatarWrapper({
                size,
                zIndex: '0',
              })}
            >
              <Avatar size={size} color={color} initials={`+${extraAvatars}`} />
            </div>
          )}
        </div>
      </Box>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
