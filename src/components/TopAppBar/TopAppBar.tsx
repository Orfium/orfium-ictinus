/** @jsx jsx */
import { jsx } from '@emotion/core';
import Styles from './TopAppBar.style';
import { DEFAULT_BG_COLOR, TopAppBarProps } from './TopAppBar.types';
import { SidebarMenuIcon } from './components';
import LogoWrapper from './components/Logo.wrapper';

const TopAppBar = ({ bgColor = DEFAULT_BG_COLOR, logoIcon, onMenuIconClick }: TopAppBarProps) => {
  return (
    <div
      role="banner"
      aria-label="Top Application Banner"
      css={Styles.topAppBarWrapper({ bgColor })}
    >
      <SidebarMenuIcon onMenuIconClick={onMenuIconClick} />
      <LogoWrapper logoIcon={logoIcon} />
    </div>
  );
};

export default TopAppBar;
