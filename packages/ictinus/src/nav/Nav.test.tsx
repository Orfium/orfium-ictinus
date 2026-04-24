import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { vi } from 'vitest';

import { render, screen, within } from '../test';
import { Nav, NavCount, NavItem, NavLink, SubNavItem, SubNavLink, SubNavList } from './Nav';

describe('Nav', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('NavLink', () => {
    it('strips href when disabled even if href is provided', () => {
      render(
        <Nav>
          <NavItem>
            <NavLink href="/settings" isDisabled>
              Settings
            </NavLink>
          </NavItem>
        </Nav>
      );

      const link = screen.getByRole('link', { name: 'Settings' });
      expect(link).not.toHaveAttribute('href');
      expect(link).toHaveAttribute('aria-disabled', 'true');
    });

    it('inherits active and disabled state from NavItem', () => {
      render(
        <Nav>
          <NavItem isActive isDisabled>
            <NavLink href="/billing">Billing</NavLink>
          </NavItem>
        </Nav>
      );

      const link = screen.getByRole('link', { name: 'Billing' });
      expect(link).toHaveAttribute('aria-current', 'page');
      expect(link).not.toHaveAttribute('href');
      expect(link).toHaveAttribute('aria-disabled', 'true');
    });

    it('isActive on NavLink overrides inactive NavItem', () => {
      render(
        <Nav>
          <NavItem>
            <NavLink href="/dash" isActive>
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
      );

      expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute(
        'aria-current',
        'page'
      );
    });

    it('lets isActive=false on NavLink override an active NavItem', () => {
      render(
        <Nav>
          <NavItem isActive>
            <NavLink href="/reports" isActive={false}>
              Reports
            </NavLink>
          </NavItem>
        </Nav>
      );

      const link = screen.getByRole('link', { name: 'Reports' });
      expect(link).not.toHaveAttribute('aria-current');
    });

    it('renders a counter', () => {
      render(
        <Nav>
          <NavItem>
            <NavLink href="/inbox">
              Inbox
              <NavCount>000</NavCount>
            </NavLink>
          </NavItem>
        </Nav>
      );

      const link = screen.getByRole('link', { name: /Inbox/i });
      expect(within(link).getByText('000')).toBeInTheDocument();
    });

    it('forwards ref to the anchor element', () => {
      const ref = createRef<HTMLAnchorElement>();

      render(
        <Nav>
          <NavItem>
            <NavLink ref={ref} href="/ref-test">
              Ref target
            </NavLink>
          </NavItem>
        </Nav>
      );

      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
      expect(ref.current).toHaveAttribute('href', '/ref-test');
    });

    it('does not invoke onClick when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(
        <Nav>
          <NavItem>
            <NavLink href="/muted" isDisabled onClick={onClick}>
              Muted
            </NavLink>
          </NavItem>
        </Nav>
      );

      await user.click(screen.getByRole('link', { name: 'Muted' }));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('SubNavLink and SubNavItem', () => {
    it('inherits isDisabled from NavItem through SubNavItem', () => {
      render(
        <Nav>
          <NavItem isDisabled>
            <SubNavList>
              <SubNavItem>
                <SubNavLink href="/nested">Nested</SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
        </Nav>
      );

      const link = screen.getByRole('link', { name: 'Nested' });
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(link).not.toHaveAttribute('href');
    });

    it('does not invoke onClick when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(
        <Nav>
          <NavItem>
            <SubNavList>
              <SubNavItem>
                <SubNavLink href="/sub" isDisabled onClick={onClick}>
                  Sub muted
                </SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
        </Nav>
      );

      await user.click(screen.getByRole('link', { name: 'Sub muted' }));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('renders the status indicator only when the sub link is active', () => {
      const { rerender } = render(
        <Nav>
          <NavItem>
            <SubNavList>
              <SubNavItem isActive>
                <SubNavLink href="/active-sub">Active sub</SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
        </Nav>
      );

      const activeLink = screen.getByRole('link', { name: 'Active sub' });
      expect(within(activeLink).getByRole('img')).toBeInTheDocument();

      rerender(
        <Nav>
          <NavItem>
            <SubNavList>
              <SubNavItem>
                <SubNavLink href="/inactive-sub">Inactive sub</SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
        </Nav>
      );

      const inactiveLink = screen.getByRole('link', { name: 'Inactive sub' });
      expect(within(inactiveLink).queryByRole('img')).not.toBeInTheDocument();
    });

    it('lets SubNavLink isDisabled override a non-disabled SubNavItem', () => {
      render(
        <Nav>
          <NavItem>
            <SubNavList>
              <SubNavItem>
                <SubNavLink href="/forced" isDisabled>
                  Forced off
                </SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
        </Nav>
      );

      const link = screen.getByRole('link', { name: 'Forced off' });
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(link).not.toHaveAttribute('href');
    });
  });

  describe('Nav shell', () => {
    it('merges className onto the nav element', () => {
      render(
        <Nav className="app-nav" data-testid="main-nav">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
      );

      const nav = screen.getByTestId('main-nav');
      expect(nav.tagName).toBe('NAV');
      expect(nav).toHaveClass('app-nav');
    });
  });
});
