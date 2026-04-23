import {
  Box,
  FavoriteIcon,
  Nav,
  NavItem,
  NavLink,
  SubNavItem,
  SubNavLink,
  SubNavList,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type MouseEvent } from 'react';

const meta: Meta = {
  title: 'Vanilla/Nav',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('bing-sub-1');

    const select = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActiveId(id);
    };

    const bingActive = activeId === 'bing' || activeId.startsWith('bing-sub-');

    return (
      <Box style={{ width: '252px' }} bg="alt">
        <Nav>
          <NavItem isActive={bingActive}>
            <NavLink count="000" href="#bing" onClick={select('bing-sub-1')}>
              <FavoriteIcon />
              Bing
            </NavLink>
            <SubNavList>
              <SubNavItem isActive={activeId === 'bing-sub-1'}>
                <SubNavLink href="#bing-sub-1" onClick={select('bing-sub-1')}>
                  Sub-tab 1
                  <FavoriteIcon />
                </SubNavLink>
              </SubNavItem>
              <SubNavItem isActive={activeId === 'bing-sub-2'}>
                <SubNavLink href="#bing-sub-2" onClick={select('bing-sub-2')}>
                  Sub-tab 2
                </SubNavLink>
              </SubNavItem>
              <SubNavItem isDisabled isActive={activeId === 'bing-sub-3'}>
                <SubNavLink href="#bing-sub-3" onClick={select('bing-sub-3')}>
                  Sub-tab 3
                </SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
          <NavItem isActive={activeId === 'geller'}>
            <NavLink href="#geller" onClick={select('geller')}>
              Geller
            </NavLink>
          </NavItem>
          <NavItem isDisabled isActive={activeId === 'green'}>
            <NavLink href="#green" onClick={select('green')}>
              Green
            </NavLink>
            <SubNavList>
              <Tooltip>
                <TooltipTrigger>
                  <SubNavItem isActive={activeId === 'green-sub-1'}>
                    <SubNavLink href="#green-sub-1" onClick={select('green-sub-1')}>
                      Sub-tab 1
                      <FavoriteIcon />
                    </SubNavLink>
                  </SubNavItem>
                </TooltipTrigger>
                <TooltipContent placement="right">
                  To enable Green, Bing must be completed first
                </TooltipContent>
              </Tooltip>
              <SubNavItem isActive={activeId === 'green-sub-2'}>
                <SubNavLink href="#green-sub-2" onClick={select('green-sub-2')}>
                  Sub-tab 2
                </SubNavLink>
              </SubNavItem>
              <SubNavItem isDisabled isActive={activeId === 'green-sub-3'}>
                <SubNavLink href="#green-sub-3" onClick={select('green-sub-3')}>
                  Sub-tab 3
                </SubNavLink>
              </SubNavItem>
            </SubNavList>
          </NavItem>
          <NavItem isActive={activeId === 'tribbiani'}>
            <NavLink href="#tribbiani" onClick={select('tribbiani')}>
              Tribbiani
            </NavLink>
          </NavItem>
        </Nav>
      </Box>
    );
  },
};
