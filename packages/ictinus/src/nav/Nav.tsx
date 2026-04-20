import { forwardRef, type MouseEvent, type ReactNode, type RefObject } from 'react';

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

type NavItemProps = BoxProps<
  'li',
  {
    label: ReactNode;
    count?: string;
    href?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  }
>;

export const NavItem = forwardRef(
  (
    { label, count, href, isActive, isDisabled, onClick, children, ...props }: NavItemProps,
    ref: RefObject<HTMLLIElement>
  ) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <li ref={ref} className={cn(styles.navItem({ isActive, isDisabled }))} {...restProps}>
          <a
            href={isDisabled ? undefined : href}
            aria-current={isActive ? 'page' : undefined}
            role="link"
            aria-disabled={isDisabled}
            onClick={onClick}
            className={cn(styles.navLink({ isActive, isDisabled }))}
          >
            {label}
            {count !== undefined && <span className={styles.counter({ isActive })}>{count}</span>}
          </a>
          {children ? <ul className={styles.subList({})}>{children}</ul> : null}
        </li>
      </Box>
    );
  }
);

NavItem.displayName = 'NavItem';

type SubNavItemProps = BoxProps<
  'li',
  {
    label: ReactNode;
    href?: string;
    isActive?: boolean;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  }
>;

export const SubNavItem = forwardRef(
  ({ label, href, isActive, onClick }: SubNavItemProps, ref: RefObject<HTMLLIElement>) => {
    return (
      <li ref={ref} className={styles.subItem({ isActive })}>
        <a
          href={href ?? '#'}
          aria-current={isActive ? 'page' : undefined}
          onClick={onClick}
          className={styles.subLink({ isActive })}
        >
          {isActive && <StatusIndicatorIcon color="active" />}
          {label}
        </a>
      </li>
    );
  }
);

SubNavItem.displayName = 'SubNavItem';
