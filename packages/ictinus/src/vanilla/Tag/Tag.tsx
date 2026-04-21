import { forwardRef, type ReactNode, type Ref } from 'react';
import {
  Button,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive,
  Tag as TagPrimitive,
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
type TagGroupProps = BoxProps<'div', TagsVariants> & TagGroupPrimitiveProps;

const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  (
    { size = 'normal', color = 'neutral', children, selectionMode, onRemove, ...props },
    ref: Ref<HTMLDivElement>
  ) => {
    // Extract Box props before passing to useSlotProps to avoid conflicts
    const { boxProps, restProps } = extractBoxProps(props);

    const componentProps = useSlotProps(restProps, 'tag-group');

    // Determine if this tag group is interactive
    const isInteractive = (selectionMode && selectionMode !== 'none') || Boolean(onRemove);

    return (
      <SlotProvider
        slots={{
          'tag-list': { size, color, interactive: isInteractive },
          'tag-item': { size, color, interactive: isInteractive },
        }}
      >
        <Box asChild {...boxProps}>
          <TagGroupPrimitive
            ref={ref}
            className={cn(styles.tagGroup({}), boxProps.className)}
            selectionMode={selectionMode}
            onRemove={onRemove}
            {...componentProps}
          >
            <TagList>{children}</TagList>
          </TagGroupPrimitive>
        </Box>
      </SlotProvider>
    );
  }
);

TagGroup.displayName = 'TagGroup';

// TagList component (internal - automatically added by TagGroup)
type TagListProps = BoxProps<'div', TagsVariants> & TagListPrimitiveProps<object>;

const TagList = forwardRef<HTMLDivElement, TagListProps>(
  ({ size, color, children, ...props }, ref: Ref<HTMLDivElement>) => {
    // Get inherited props from SlotProvider, but let direct props override them
    const inheritedProps = useSlotProps({}, 'tag-list');

    const finalSize = size ?? inheritedProps.size;
    const finalColor = color ?? inheritedProps.color;
    const finalInteractive = inheritedProps.interactive;

    // Extract Box props before passing to useSlotProps to avoid conflicts
    const { boxProps, restProps } = extractBoxProps(props);

    const componentProps = useSlotProps(
      {
        size: finalSize,
        color: finalColor,
        interactive: finalInteractive,
        ...restProps,
      },
      'tag-list'
    );

    return (
      <Box asChild {...boxProps}>
        <TagListPrimitive
          ref={ref}
          className={cn(styles.tagList({}), boxProps.className)}
          {...componentProps}
        >
          {children}
        </TagListPrimitive>
      </Box>
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
            styles.tag({
              size: finalSize,
              color: finalColor,
              interactive: finalInteractive,
            }),
            boxProps.className
          )}
          textValue={textValue || (typeof children === 'string' ? children : undefined)}
          {...componentProps}
        >
          {(renderProps) => {
            // Check if this tag is removable (onRemove is available in the TagGroup)
            const isRemovable = Boolean(renderProps.allowsRemoving);

            return (
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
                {finalInteractive && renderProps.isSelected && (
                  <Icon name="check" aria-hidden="true" />
                )}
                {typeof children === 'string' ? <Text>{children}</Text> : children}
                {isRemovable && <TagRemoveButton />}
              </SlotProvider>
            );
          }}
        </TagPrimitive>
      </Box>
    );
  }
);

Tag.displayName = 'Tag';

// TagRemoveButton component
type TagRemoveButtonProps = BoxProps<'button'> &
  ButtonProps & {
    children?: ReactNode;
  };

const TagRemoveButton = forwardRef<HTMLButtonElement, TagRemoveButtonProps>(
  ({ children, ...props }, ref: Ref<HTMLButtonElement>) => {
    // Extract Box props before passing to useSlotProps to avoid conflicts
    const { boxProps, restProps } = extractBoxProps(props);

    const componentProps = useSlotProps(restProps, 'remove-button');

    return (
      <Box asChild {...boxProps}>
        <Button
          ref={ref}
          slot="remove"
          className={cn(styles.removeButton({}), boxProps.className)}
          {...componentProps}
        >
          {children || <Icon name="close" aria-hidden="true" />}
        </Button>
      </Box>
    );
  }
);

TagRemoveButton.displayName = 'TagRemoveButton';

// CodeTag component (simplified component for inline code display)
type CodeTagProps = BoxProps<'div', NonNullable<Pick<TagsVariants, 'size'>>> & TagPrimitiveProps;

const CodeTag = forwardRef<HTMLDivElement, CodeTagProps>(
  ({ size, children, textValue, ...props }, ref: Ref<HTMLDivElement>) => {
    const inheritedProps = useSlotProps({}, 'tag-item');

    const finalSize = size ?? inheritedProps.size;
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <TagPrimitive
          ref={ref}
          className={cn(styles.codeTag({ size: finalSize }), boxProps.className)}
          textValue={textValue || (typeof children === 'string' ? children : undefined)}
          {...restProps}
        >
          {typeof children === 'string' ? (
            <Text className={styles.codeTagText({ size: finalSize })}>{children}</Text>
          ) : (
            children
          )}
        </TagPrimitive>
      </Box>
    );
  }
);

CodeTag.displayName = 'CodeTag';

export { CodeTag, Tag, TagGroup, TagList, TagRemoveButton };

export type { CodeTagProps, TagColors, TagGroupProps, TagProps, TagRemoveButtonProps, TagSizes };
