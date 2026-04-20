import React, { forwardRef, type ReactNode, type Ref } from 'react';
import {
  Button,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive,
  Tag as TagPrimitive,
  composeRenderProps,
  type ButtonProps,
  type TagGroupProps as TagGroupPrimitiveProps,
  type TagListProps as TagListPrimitiveProps,
  type TagProps as TagPrimitiveProps,
} from 'react-aria-components';

import { SlotProvider, useSlotProps } from '../../components/utils/Slots';
import { cn } from '../../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../Box';
import { Text } from '../Text';

import { Icon } from '../../icon';
import * as styles from './Tag.css';

// Types
type TagColors = 'neutral' | 'blue' | 'red' | 'purple' | 'teal' | 'orange';
type TagSizes = 'normal' | 'small';

interface TagsVariants {
  size?: TagSizes;
  color?: TagColors;
}

// TagGroup (root component)
interface TagGroupProps extends TagGroupPrimitiveProps, TagsVariants {
  className?: string;
}

const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  (
    { size = 'normal', color = 'neutral', className, children, selectionMode, onRemove, ...props },
    ref: Ref<HTMLDivElement>
  ) => {
    const componentProps = useSlotProps(props, 'tag-group');

    // Determine if this tag group is interactive
    const isInteractive = (selectionMode && selectionMode !== 'none') || Boolean(onRemove);

    return (
      <SlotProvider
        slots={{
          'tag-list': { size, color, interactive: isInteractive },
          'tag-item': { size, color, interactive: isInteractive },
        }}
      >
        <TagGroupPrimitive
          ref={ref}
          className={composeRenderProps(className, (className) =>
            cn(styles.tagGroup({}), className)
          )}
          selectionMode={selectionMode}
          onRemove={onRemove}
          {...componentProps}
        >
          {children}
        </TagGroupPrimitive>
      </SlotProvider>
    );
  }
);

TagGroup.displayName = 'TagGroup';

// TagList component
interface TagListProps extends TagListPrimitiveProps<object>, TagsVariants {
  className?: string;
  children?: React.ReactNode;
}

const TagList = forwardRef<HTMLDivElement, TagListProps>(
  ({ size, color, className, children, ...props }, ref: Ref<HTMLDivElement>) => {
    // Get inherited props from SlotProvider, but let direct props override them
    const inheritedProps = useSlotProps({}, 'tag-list');

    const finalSize = size ?? inheritedProps.size;
    const finalColor = color ?? inheritedProps.color;
    const finalInteractive = inheritedProps.interactive;
    const componentProps = useSlotProps(
      { size: finalSize, color: finalColor, interactive: finalInteractive, ...props },
      'tag-list'
    );

    return (
      <TagListPrimitive
        ref={ref}
        className={composeRenderProps(className, (className) => cn(styles.tagList({}), className))}
        {...componentProps}
      >
        {children}
      </TagListPrimitive>
    );
  }
);

TagList.displayName = 'TagList';

// Tag component
type TagProps = BoxProps<'div', NonNullable<TagsVariants>> & TagPrimitiveProps;

const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ size, color, textValue, children, ...props }, ref: Ref<HTMLDivElement>) => {
    // Get inherited props from SlotProvider, but let direct props override them
    const inheritedProps = useSlotProps({}, 'tag-item');

    const finalSize = size ?? inheritedProps.size;
    const finalColor = color ?? inheritedProps.color;
    const finalInteractive = inheritedProps.interactive ?? false;

    // Extract Box props before passing to useSlotProps to avoid conflicts
    const { boxProps, restProps } = extractBoxProps(props);

    const componentProps = useSlotProps(restProps, 'tag-item');

    return (
      <Box asChild {...boxProps}>
        <TagPrimitive
          ref={ref}
          className={cn(
            styles.tag({ size: finalSize, color: finalColor, interactive: finalInteractive }),
            boxProps.className
          )}
          textValue={textValue || (typeof children === 'string' ? children : undefined)}
          {...componentProps}
        >
          {(renderProps) => (
            <SlotProvider
              slots={{
                icon: {
                  size: finalSize === 'small' ? 'xs' : 'sm',
                  flexShrink: '0',
                },
                text: {
                  className: styles.text({ size: finalSize }),
                },
                'remove-button': {
                  'aria-label': `Remove ${textValue || (typeof children === 'string' ? children : 'tag')}`,
                },
              }}
            >
              {finalInteractive && renderProps.isSelected && <Icon name="check" />}
              {typeof children === 'string' ? <Text>{children}</Text> : children}
            </SlotProvider>
          )}
        </TagPrimitive>
      </Box>
    );
  }
);

Tag.displayName = 'Tag';

// TagRemoveButton component
interface TagRemoveButtonProps extends ButtonProps {
  children?: ReactNode;
}

const TagRemoveButton = forwardRef<HTMLButtonElement, TagRemoveButtonProps>(
  ({ className, children, ...props }, ref: Ref<HTMLButtonElement>) => {
    const componentProps = useSlotProps(props, 'remove-button');

    return (
      <Button
        ref={ref}
        slot="remove"
        className={composeRenderProps(className, (className, __renderProps) =>
          cn(styles.removeButton({}), className)
        )}
        {...componentProps}
      >
        {children || <Icon name="close" size="sm" />}
      </Button>
    );
  }
);

TagRemoveButton.displayName = 'TagRemoveButton';

export { Tag, TagGroup, TagList, TagRemoveButton };

export type { TagColors, TagGroupProps, TagListProps, TagProps, TagRemoveButtonProps, TagSizes };
