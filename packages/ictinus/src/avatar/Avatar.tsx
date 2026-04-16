import { forwardRef, useState, type RefObject } from 'react';

import { useSlotProps } from '../components/utils/Slots';
import { useDOMRef } from '../components/utils/useDOMRef';
import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';

import * as styles from './Avatar.css';

export type AvatarColor = 'blue' | 'red' | 'purple' | 'teal' | 'orange';
export type AvatarSize = '1' | '2' | '3' | '4' | '5' | '6';

export type AvatarProps = Omit<
  BoxProps<
    'span',
    NonNullable<styles.AvatarVariants> & {
      src?: string;
      alt?: string;
      initials?: string;
    }
  >,
  'children'
>;

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (props, ref: RefObject<HTMLSpanElement>) => {
    props = useSlotProps(props, 'avatar');
    const { colorScheme = 'blue', size = '1', src, alt, initials, ...restProps } = props;
    const domRef = useDOMRef(ref);
    const [imageError, setImageError] = useState(false);

    return (
      <Box asChild {...restProps}>
        <span ref={domRef} className={cn(styles.avatar({ colorScheme, size }), props.className)}>
          {src && !imageError ? (
            <img
              src={src}
              alt={alt || ''}
              className={styles.image}
              onError={() => {
                setImageError(true);
              }}
            />
          ) : initials ? (
            <Text>{initials}</Text>
          ) : (
            <UserIcon size={size} />
          )}
        </span>
      </Box>
    );
  }
);

const UserIcon = ({ size }: { size: AvatarSize }) => (
  <svg viewBox="0 0 14 17" fill="none" className={styles.icon({ size })} aria-hidden="true">
    <path
      d="M6.96625 6.55647C8.77677 6.55647 10.2445 5.08876 10.2445 3.27824C10.2445 1.46772 8.77677 0 6.96625 0C5.15573 0 3.68801 1.46772 3.68801 3.27824C3.68801 5.08876 5.15573 6.55647 6.96625 6.55647Z"
      fill="currentColor"
    />
    <path
      d="M0 12.2113C0 12.1401 0.0171683 12.0699 0.0515269 12.0076C1.31285 9.7198 3.95046 8.09435 7 8.09435C10.0495 8.09435 12.6872 9.7198 13.9485 12.0076C13.9828 12.0699 14 12.1401 14 12.2113C14 12.2824 13.9828 12.3528 13.9483 12.4151C12.687 14.6941 10.0518 16.0044 7.00244 16.0044C3.95304 16.0044 1.31314 14.6941 0.0516988 12.4151C0.0172363 12.3528 0 12.2824 0 12.2113Z"
      fill="currentColor"
    />
  </svg>
);

Avatar.displayName = 'Avatar';
