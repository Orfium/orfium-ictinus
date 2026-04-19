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
import { Text } from '../Text';

import { Icon } from '../../icon';
import * as styles from './Tag.css';

// Types
type TagColors = 'neutral' | 'blue' | 'red' | 'purple' | 'teal' | 'orange';
type TagSizes = 'normal' | 'small';

interface TagsVariants {
  size?: TagSizes;
  color?: TagColors;
  interactive?: boolean;
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
    const isInteractive = Boolean(selectionMode || onRemove);

    return (
      <SlotProvider
        slots={{
          'tag-list': { size, color, interactive: isInteractive },
          'tag-item': { size, color, interactive: isInteractive },
          label: { className: styles.label({}) },
          description: { className: styles.description({}) },
          'error-message': { className: styles.errorMessage({}) },
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
  ({ size, color, interactive, className, children, ...props }, ref: Ref<HTMLDivElement>) => {
    // Get inherited props from SlotProvider, but let direct props override them
    const inheritedProps = useSlotProps({}, 'tag-list');

    const finalSize = size ?? inheritedProps.size;
    const finalColor = color ?? inheritedProps.color;
    const finalInteractive = interactive ?? inheritedProps.interactive;
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
interface TagProps extends TagPrimitiveProps, TagsVariants {
  className?: string;
  interactive?: boolean;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    { size, color, interactive, className, textValue, children, ...props },
    ref: Ref<HTMLDivElement>
  ) => {
    // Get inherited props from SlotProvider, but let direct props override them
    const inheritedProps = useSlotProps({}, 'tag-item');

    const finalSize = size ?? inheritedProps.size;
    const finalColor = color ?? inheritedProps.color;
    const finalInteractive = interactive ?? inheritedProps.interactive ?? false;
    const componentProps = useSlotProps(
      { size: finalSize, color: finalColor, interactive: finalInteractive, ...props },
      'tag-item'
    );

    return (
      <TagPrimitive
        ref={ref}
        className={composeRenderProps(className, (className, __renderProps) =>
          cn(
            styles.tag({ size: finalSize, color: finalColor, interactive: finalInteractive }),
            className
          )
        )}
        textValue={textValue || (typeof children === 'string' ? children : undefined)}
        {...componentProps}
      >
        {(renderProps) => (
          <SlotProvider
            slots={{
              icon: {
                size: size === 'small' ? 'xs' : 'sm',
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
            {typeof children === 'function' ? (
              children(renderProps)
            ) : typeof children === 'string' ? (
              <Text>{children}</Text>
            ) : (
              children
            )}
          </SlotProvider>
        )}
      </TagPrimitive>
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
