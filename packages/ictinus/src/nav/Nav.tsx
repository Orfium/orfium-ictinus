import { createContext, forwardRef, useContext, type MouseEvent, type RefObject } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { SlotProvider, useSlotProps } from '../components/utils/Slots';
import { StatusIndicatorIcon } from '../icons';
import { cn } from '../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../vanilla/Box';
import * as styles from './Nav.css';

type NavProps = BoxProps<'nav'>;

export const Nav = forwardRef(({ children, ...props }: NavProps, ref: RefObject<HTMLElement>) => {
  return (
    <Box asChild {...props}>
      <nav ref={ref} className={cn(styles.nav({}), props.className)}>
        <ul className={styles.navList({})}>{children}</ul>
      </nav>
    </Box>
  );
});

Nav.displayName = 'Nav';

const NavItemContext = createContext<{ isActive?: boolean; isDisabled?: boolean }>({});

type NavItemProps = BoxProps<
  'li',
  {
    isActive?: boolean;
    isDisabled?: boolean;
  }
>;

export const NavItem = forwardRef(
  ({ isActive, isDisabled, children, ...props }: NavItemProps, ref: RefObject<HTMLLIElement>) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <NavItemContext.Provider value={{ isActive, isDisabled }}>
        <Box asChild {...boxProps}>
          <li ref={ref} className={cn(styles.navItem({ isActive, isDisabled }))} {...restProps}>
            {children}
          </li>
        </Box>
      </NavItemContext.Provider>
    );
  }
);

NavItem.displayName = 'NavItem';

type NavLinkProps = BoxProps<
  'a',
  {
    href?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    asChild?: boolean;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  }
>;

export const NavLink = forwardRef(
  (
    {
      asChild,
      href,
      isActive: isActiveProp,
      isDisabled: isDisabledProp,
      onClick,
      children,
      ...props
    }: NavLinkProps,
    ref: RefObject<HTMLAnchorElement>
  ) => {
    const Comp = asChild ? Slot : 'a';
    const { boxProps, restProps } = extractBoxProps(props);

    const ctx = useContext(NavItemContext);
    const isActive = isActiveProp ?? ctx.isActive;
    const isDisabled = Boolean(isDisabledProp) || Boolean(ctx.isDisabled);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        e.preventDefault();

        return;
      }
      onClick?.(e);
    };

    return (
      <SlotProvider
        slots={{
          icon: {
            size: 'sm',
            flexShrink: '0',
          },
          navCount: {
            isActive,
          },
        }}
      >
        <Box asChild {...boxProps}>
          <Comp
            ref={ref}
            href={isDisabled ? undefined : href}
            role="link"
            aria-current={isActive ? 'page' : undefined}
            aria-disabled={isDisabled}
            onClick={handleClick}
            className={cn(styles.navLink({ isActive, isDisabled }))}
            {...restProps}
          >
            {children}
          </Comp>
        </Box>
      </SlotProvider>
    );
  }
);

NavLink.displayName = 'NavLink';

type NavCountProps = BoxProps<
  'span',
  {
    isActive?: boolean;
  }
>;

export const NavCount = forwardRef((props: NavCountProps, ref: RefObject<HTMLSpanElement>) => {
  props = useSlotProps(props, 'navCount');
  const { boxProps, restProps } = extractBoxProps(props);

  const { isActive, children, ...otherProps } = restProps;

  return (
    <Box asChild {...boxProps}>
      <span ref={ref} className={styles.counter({ isActive })} {...otherProps}>
        {children}
      </span>
    </Box>
  );
});

NavCount.displayName = 'NavCount';

type SubNavListProps = BoxProps<'ul'>;

export const SubNavList = forwardRef(
  ({ children, ...props }: SubNavListProps, ref: RefObject<HTMLUListElement>) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <ul ref={ref} className={styles.subList({})} {...restProps}>
          {children}
        </ul>
      </Box>
    );
  }
);

SubNavList.displayName = 'SubNavList';

const SubNavItemContext = createContext<{ isActive?: boolean; isDisabled?: boolean }>({});

type SubNavItemProps = BoxProps<
  'li',
  {
    isActive?: boolean;
    isDisabled?: boolean;
  }
>;

export const SubNavItem = forwardRef(
  (
    { isActive, isDisabled: isDisabledProp, children, ...props }: SubNavItemProps,
    ref: RefObject<HTMLLIElement>
  ) => {
    const { boxProps, restProps } = extractBoxProps(props);

    const ctx = useContext(NavItemContext);
    const isDisabled = isDisabledProp ?? ctx.isDisabled;

    return (
      <SubNavItemContext.Provider value={{ isActive, isDisabled }}>
        <Box asChild {...boxProps}>
          <li ref={ref} className={styles.subItem({ isActive })} {...restProps}>
            {children}
          </li>
        </Box>
      </SubNavItemContext.Provider>
    );
  }
);

SubNavItem.displayName = 'SubNavItem';

export const SubNavLink = forwardRef(
  (
    {
      asChild,
      href,
      isActive: isActiveProp,
      isDisabled: isDisabledProp,
      onClick,
      children,
      ...props
    }: NavLinkProps,
    ref: RefObject<HTMLAnchorElement>
  ) => {
    const Comp = asChild ? Slot : 'a';
    const { boxProps, restProps } = extractBoxProps(props);

    const ctx = useContext(SubNavItemContext);
    const isActive = isActiveProp ?? ctx.isActive;
    const isDisabled = Boolean(isDisabledProp) || Boolean(ctx.isDisabled);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        e.preventDefault();

        return;
      }
      onClick?.(e);
    };

    return (
      <SlotProvider
        slots={{
          icon: {
            size: 'sm',
            flexShrink: '0',
          },
          navCount: {
            isActive,
          },
        }}
      >
        <Box asChild {...boxProps}>
          <Comp
            ref={ref}
            href={isDisabled ? undefined : href}
            role="link"
            aria-current={isActive ? 'page' : undefined}
            aria-disabled={isDisabled}
            onClick={handleClick}
            className={styles.subLink({ isActive, isDisabled })}
            {...restProps}
          >
            {isActive && <StatusIndicatorIcon flexShrink="0" color="active" />}

            {children}
          </Comp>
        </Box>
      </SlotProvider>
    );
  }
);

SubNavLink.displayName = 'SubNavLink';
