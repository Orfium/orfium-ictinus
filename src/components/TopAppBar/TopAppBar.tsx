/** @jsx jsx */
import { jsx } from '@emotion/core';
import Styles from './TopAppBar.style';
import { DEFAULT_BG_COLOR_TYPE, TopAppBarProps } from './TopAppBar.types';
import { SidebarMenuIcon } from './components';
import LogoWrapper from './components/Logo.wrapper';

const TopAppBar = ({ bgColorType = DEFAULT_BG_COLOR_TYPE, logoIcon }: TopAppBarProps) => {
  return (
    <div
      role="banner"
      aria-label="Top Application Banner"
      css={Styles.topAppBarWrapper({ bgColorType })}
    >
      <SidebarMenuIcon />
      <LogoWrapper logoIcon={logoIcon} />
    </div>
  );
};

export default TopAppBar;
