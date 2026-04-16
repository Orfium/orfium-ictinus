import { forwardRef, type RefObject } from 'react';

import { SlotProvider, useSlotProps } from '../components/utils/Slots';
import { useDOMRef } from '../components/utils/useDOMRef';
import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';

import type { AvatarSize } from './Avatar';
import * as styles from './AvatarGroup.css';

export type AvatarGroupProps = BoxProps<'div', { size: AvatarSize }>;

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref: RefObject<HTMLDivElement>) => {
    props = useSlotProps(props, 'avatarGroup');
    const { size = '1', children, ...restProps } = props;
    const domRef = useDOMRef(ref);

    return (
      <Box asChild {...restProps}>
        <div ref={domRef} className={cn(styles.avatarGroup({ size }), props.className)}>
          <SlotProvider slots={{ avatar: { size } }}>{children}</SlotProvider>
        </div>
      </Box>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
