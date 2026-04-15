import { forwardRef, useState, type RefObject } from 'react';

import { SlotProvider, useSlotProps } from '../components/utils/Slots';
import { useDOMRef } from '../components/utils/useDOMRef';
import { cn } from '../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';

import * as styles from './Avatar.css';

export type AvatarColor = 'blue' | 'red' | 'purple' | 'teal' | 'orange';
export type AvatarSize = '1' | '2' | '3' | '4' | '5' | '6';

export type AvatarProps = BoxProps<
  'div',
  NonNullable<styles.AvatarVariants> & {
    src?: string;
    alt?: string;
    initials?: string;
    'aria-label'?: string;
  }
>;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { color = 'blue', size = '1', src, alt, initials, children, 'aria-label': ariaLabel, ...props },
    ref: RefObject<HTMLDivElement>
  ) => {
    props = useSlotProps(props, 'avatar');
    const domRef = useDOMRef(ref);
    const { boxProps, restProps } = extractBoxProps(props);
    const [imageError, setImageError] = useState(false);

    const renderContent = () => {
      // Show image only if src exists and no error occurred
      if (src && !imageError) {
        return (
          <img
            src={src}
            alt={alt || ''}
            className={styles.image}
            onError={() => {
              setImageError(true);
            }}
          />
        );
      }

      if (children) {
        return children;
      }

      if (initials) {
        return <Text>{initials}</Text>;
      }

      // Default user icon fallback
      return (
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
    };

    // Generate accessible label if not provided
    const getAccessibleLabel = () => {
      if (ariaLabel) return ariaLabel;
      if (alt) return alt;

      // Base label on what content is actually displayed
      if (src && !imageError) return 'User avatar';
      if (initials) return `Avatar with initials ${initials}`;

      return 'User avatar';
    };

    return (
      <Box asChild {...boxProps}>
        <div
          ref={domRef}
          aria-label={getAccessibleLabel()}
          role="img"
          {...restProps}
          className={cn(styles.avatar({ color, size }), boxProps.className)}
        >
          <SlotProvider
            slots={{
              icon: {
                className: styles.icon({ size }),
                'aria-hidden': true,
              },
            }}
          >
            {renderContent()}
          </SlotProvider>
        </div>
      </Box>
    );
  }
);

Avatar.displayName = 'Avatar';
