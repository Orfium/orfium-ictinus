/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Styles from './TopNavBar.style';
import { TopNavBarProps } from './TopNavBar.types';
import { SidebarMenuIcon, LogoPlaceholder, UserMenu } from './components';

import { useBreakpoints } from '../../index';
import Search from './components/Search';

const TopNavBar: FC<TopNavBarProps> = ({
  searchPlaceholder = 'Search',
  searchDefaultValue = '',
  logoIcon,
  onMenuIconClick,
  additionalTools,
  userMenu,
  onSearchHandler,
  onKeyPressHandler,
  isSearchDisabled = false,
  dark = false,
}) => {
  const breakpoints = useBreakpoints();

  return (
    <div role="banner" aria-label="Top Application Banner" css={Styles.topNavBarWrapper(dark)}>
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
            dark={dark}
          />
        )}
      </div>
      <div css={Styles.additionalToolsSection(Boolean(additionalTools))}>{additionalTools}</div>
      <div css={Styles.topNavBarSection}>
        <UserMenu dark={dark} {...userMenu} />
      </div>
    </div>
  );
};

export default TopNavBar;
