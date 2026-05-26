import {
  createContext,
  forwardRef,
  useContext,
  type ForwardedRef,
  type ReactElement,
  type RefAttributes,
  type RefObject,
} from 'react';
import {
  Button,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive,
  Tag as TagPrimitive,
  type TagGroupProps as TagGroupPrimitiveProps,
  type TagListProps as TagListPrimitiveProps,
  type TagProps as TagPrimitiveProps,
} from 'react-aria-components';

import { useDOMRef } from '../components/utils/useDOMRef';
import { CheckIcon, CloseIcon } from '../icons';
import { cn } from '../utils/cn';
import { type ExtendProps } from '../utils/ExtendProps';
import { Box, extractBoxProps, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';
import * as styles from './TagGroup.css';

const SizeContext = createContext<'normal' | 'small'>('normal');

export type TagGroupProps = BoxProps<
  'div',
  ExtendProps<
    TagGroupPrimitiveProps,
    {
      size?: 'normal' | 'small';
    }
  >
>;

export const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  ({ children, size, ...props }, ref: RefObject<HTMLDivElement>) => {
    const domRef = useDOMRef(ref);
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <TagGroupPrimitive
          ref={domRef}
          {...restProps}
          className={cn(styles.tagGroup({}), boxProps.className)}
        >
          <SizeContext.Provider value={size || 'normal'}>{children}</SizeContext.Provider>
        </TagGroupPrimitive>
      </Box>
    );
  }
);

TagGroup.displayName = 'TagGroup';

export type TagListProps<T extends object> = Omit<BoxProps<'div'>, 'children'> &
  TagListPrimitiveProps<T>;

function TagListImpl<T extends object>(
  { children, ...props }: TagListProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const domRef = useDOMRef(ref as RefObject<HTMLDivElement>);
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <TagListPrimitive
        ref={domRef}
        {...restProps}
        className={cn(styles.tagList({}), boxProps.className)}
      >
        {children}
      </TagListPrimitive>
    </Box>
  );
}

export const TagList = forwardRef(TagListImpl) as <T extends object>(
  props: TagListProps<T> & RefAttributes<HTMLDivElement>
) => ReactElement;

export type TagProps = BoxProps<
  'div',
  ExtendProps<Omit<TagPrimitiveProps, 'className'>, styles.TagVariants>
>;

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ children, size, ...props }, ref: RefObject<HTMLDivElement>) => {
    const domRef = useDOMRef(ref);
    const { boxProps, restProps } = extractBoxProps(props);

    const textValue = typeof children === 'string' ? children : undefined;
    const groupSize = useContext(SizeContext) || size;

    return (
      <Box asChild {...boxProps}>
        <TagPrimitive
          ref={domRef}
          textValue={textValue}
          {...restProps}
          className={cn(styles.tag({ size: groupSize }), boxProps.className)}
        >
          {({ isSelected, allowsRemoving }) => (
            <>
              {isSelected && (
                <CheckIcon size={groupSize === 'normal' ? 'sm' : 'xs'} flexShrink="0" />
              )}
              {typeof children === 'string' ? (
                <Text className={styles.tagText({ size: groupSize })}>{children}</Text>
              ) : (
                children
              )}
              {allowsRemoving && (
                <Button slot="remove" className={styles.removeButton({})}>
                  <CloseIcon />
                </Button>
              )}
            </>
          )}
        </TagPrimitive>
      </Box>
    );
  }
);

Tag.displayName = 'Tag';
