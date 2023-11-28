import type { FC } from 'react';
import React from 'react';

import { SidebarMenuIcon, LogoPlaceholder, UserMenu } from './components';
import Search from './components/Search';
import Styles from './TopAppBar.style';
import type { TopAppBarProps } from './TopAppBar.types';
import { useBreakpoints } from '../../index';

const TopAppBar: FC<TopAppBarProps> = ({
  searchPlaceholder = 'Search',
  searchDefaultValue = '',
  logoIcon,
  onMenuIconClick,
  additionalTools,
  userMenu,
  onSearchHandler,
  onKeyPressHandler,
  isSearchDisabled = false,
  isDark = false,
}) => {
  const breakpoints = useBreakpoints();

  return (
    <div role="banner" aria-label="Top Application Banner" css={Styles.topAppBarWrapper(isDark)}>
      <div css={Styles.mainSection(Boolean(onSearchHandler))}>
        {!breakpoints.des1200 && <SidebarMenuIcon onMenuIconClick={onMenuIconClick} />}
        <LogoPlaceholder logoIcon={logoIcon} />
        {onSearchHandler && (
          <Search
            onSearchHandler={onSearchHandler}
            onKeyPressHandler={onKeyPressHandler}
            searchPlaceholder={searchPlaceholder}
            searchDefaultValue={searchDefaultValue}
            isSearchDisabled={isSearchDisabled}
            isDark={isDark}
          />
        )}
      </div>
      <div css={Styles.additionalToolsSection(Boolean(additionalTools))}>{additionalTools}</div>
      <div css={Styles.topAppBarSection}>
        <UserMenu isDark={isDark} {...userMenu} />
      </div>
    </div>
  );
};

export default TopAppBar;
