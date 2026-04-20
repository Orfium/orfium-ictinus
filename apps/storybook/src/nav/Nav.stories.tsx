import { Box, Nav, NavItem, SubNavItem } from '@orfium/ictinus/vanilla';
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
      <Box maxWidth="full">
        <Nav>
          <NavItem
            label="Bing"
            count="000"
            href="#bing"
            isActive={bingActive}
            onClick={select('bing-sub-1')}
          >
            <SubNavItem
              label="Sub-tab 1"
              href="#bing-sub-1"
              isActive={activeId === 'bing-sub-1'}
              onClick={select('bing-sub-1')}
            />
            <SubNavItem
              label="Sub-tab 2"
              href="#bing-sub-2"
              isActive={activeId === 'bing-sub-2'}
              onClick={select('bing-sub-2')}
            />
          </NavItem>
          <NavItem
            label="Geller"
            href="#geller"
            isActive={activeId === 'geller'}
            isDisabled
            onClick={select('geller')}
          />
          <NavItem
            label="Tribiani"
            href="#tribiani"
            isActive={activeId === 'tribiani'}
            onClick={select('tribiani')}
          />
        </Nav>
      </Box>
    );
  },
};
