import { type ComponentProps, type Ref } from 'react';
import type {
  ButtonProps,
  MenuItemProps as MenuItemPrimitiveProps,
  MenuProps as MenuPrimitiveProps,
  MenuSectionProps as MenuSectionPrimitiveProps,
  MenuTriggerProps as MenuTriggerPrimitiveProps,
  Selection,
} from 'react-aria-components';
import {
  Collection,
  Header,
  MenuItem as MenuItemPrimitive,
  Menu as MenuPrimitive,
  MenuSection as MenuSectionPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  Pressable,
  SubmenuTrigger as SubmenuTriggerPrimitive,
} from 'react-aria-components';

import { cn } from '../../utils/cn';
import { DropdownDescription, DropdownLabel, DropdownSeparator } from '../Dropdown';
import { PopoverContent, type PopoverContentProps } from '../Popover';
import * as styles from './Menu.css';

const Menu = (props: MenuTriggerPrimitiveProps) => <MenuTriggerPrimitive {...props} />;

const MenuSubmenu = ({ delay = 0, ...props }) => (
  <SubmenuTriggerPrimitive {...props} delay={delay}>
    {props.children}
  </SubmenuTriggerPrimitive>
);

interface MenuTriggerProps extends ButtonProps {
  ref?: Ref<HTMLButtonElement>;
}

const MenuTrigger = ({ ...props }: ComponentProps<typeof Pressable>) => <Pressable {...props} />;

interface MenuContentProps<T>
  extends MenuPrimitiveProps<T>,
    Pick<PopoverContentProps, 'placement'> {
  className?: string;
  popover?: Pick<
    PopoverContentProps,
    | 'showArrow'
    | 'className'
    | 'placement'
    | 'offset'
    | 'crossOffset'
    | 'arrowBoundaryOffset'
    | 'triggerRef'
    | 'isOpen'
    | 'onOpenChange'
    | 'shouldFlip'
  >;
}

const MenuContent = <T extends object>({
  className,
  placement,
  popover,
  ...props
}: MenuContentProps<T>) => {
  return (
    <PopoverContent placement={placement} {...popover}>
      <MenuPrimitive
        data-slot="menu-content"
        className={cn(styles.menu({}), className)}
        {...props}
      />
    </PopoverContent>
  );
};

interface MenuItemProps extends Omit<MenuItemPrimitiveProps, 'className'> {
  className?: string;
}

const MenuItem = ({ className, children, ...props }: MenuItemProps) => {
  const textValue = props.textValue || (typeof children === 'string' ? children : undefined);

  return (
    <MenuItemPrimitive className={cn(styles.item({}), className)} textValue={textValue} {...props}>
      {(values) => (typeof children === 'function' ? children(values) : children)}
    </MenuItemPrimitive>
  );
};

export interface MenuHeaderProps extends ComponentProps<typeof Header> {
  separator?: boolean;
}

const MenuHeader = ({ ...props }: MenuHeaderProps) => <Header {...props} />;

interface MenuSectionProps<T> extends MenuSectionPrimitiveProps<T> {
  ref?: Ref<HTMLDivElement>;
  title?: string;
}

const MenuSection = <T extends object>({ ...props }: MenuSectionProps<T>) => {
  return (
    <MenuSectionPrimitive {...props}>
      {'title' in props && <Header>{props.title}</Header>}
      <Collection items={props.items}>{props.children}</Collection>
    </MenuSectionPrimitive>
  );
};

const MenuSeparator = DropdownSeparator;
const MenuLabel = DropdownLabel;
const MenuDescription = DropdownDescription;

Menu.Content = MenuContent;
Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.Section = MenuSection;
Menu.Separator = MenuSeparator;
Menu.Label = MenuLabel;
Menu.Description = MenuDescription;
Menu.Trigger = MenuTrigger;
Menu.Submenu = MenuSubmenu;

export {
  Menu,
  MenuContent,
  MenuDescription,
  MenuHeader,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuSubmenu,
  MenuTrigger,
};
export type { MenuContentProps, MenuItemProps, MenuSectionProps, MenuTriggerProps, Selection };
