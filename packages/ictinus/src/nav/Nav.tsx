import { createContext, forwardRef, useContext, type MouseEvent, type RefObject } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { SlotProvider } from '../components/utils/Slots';
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
    count?: string;
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
      count,
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
    const isDisabled = isDisabledProp ?? ctx.isDisabled;

    return (
      <Box asChild {...boxProps}>
        <Comp
          ref={ref}
          href={isDisabled ? undefined : href}
          aria-current={isActive ? 'page' : undefined}
          role="link"
          aria-disabled={isDisabled}
          onClick={onClick}
          className={cn(styles.navLink({ isActive, isDisabled }))}
          {...restProps}
        >
          <SlotProvider
            slots={{
              icon: {
                size: 'sm',
                flexShrink: '0',
              },
            }}
          >
            {children}
          </SlotProvider>
          {count !== undefined && <span className={styles.counter({ isActive })}>{count}</span>}
        </Comp>
      </Box>
    );
  }
);

NavLink.displayName = 'NavLink';

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
      count,
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
    const isDisabled = isDisabledProp ?? ctx.isDisabled;

    return (
      <Box asChild {...boxProps}>
        <Comp
          ref={ref}
          href={isDisabled ? undefined : href}
          aria-current={isActive ? 'page' : undefined}
          role="link"
          aria-disabled={isDisabled}
          onClick={onClick}
          className={styles.subLink({ isActive, isDisabled })}
          {...restProps}
        >
          {isActive && <StatusIndicatorIcon flexShrink="0" color="active" />}
          <SlotProvider
            slots={{
              icon: {
                size: 'sm',
                flexShrink: '0',
              },
            }}
          >
            {children}
          </SlotProvider>
          {count !== undefined && <span className={styles.counter({ isActive })}>{count}</span>}
        </Comp>
      </Box>
    );
  }
);

SubNavLink.displayName = 'SubNavLink';
