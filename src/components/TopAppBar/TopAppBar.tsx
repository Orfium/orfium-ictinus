/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Styles from './TopAppBar.style';
import { TopAppBarProps } from './TopAppBar.types';
import { SidebarMenuIcon, LogoPlaceholder, UserMenu } from './components';

import { useBreakpoints } from '../../index';
import Search from './components/Search';

const TopAppBar: FC<TopAppBarProps> = ({
  searchPlaceholder = 'Search',
  searchDefaultValue = '',
  logoIcon,
  onMenuIconClick,
  additionalTools,
  userMenu,
  onSearchHandler,
  isSearchDisabled = false,
  dark = false,
}) => {
  const breakpoints = useBreakpoints();

  return (
    <div role="banner" aria-label="Top Application Banner" css={Styles.topAppBarWrapper(dark)}>
      <div css={Styles.mainSection(Boolean(onSearchHandler))}>
        {!breakpoints.des1200 && <SidebarMenuIcon onMenuIconClick={onMenuIconClick} />}
        <LogoPlaceholder logoIcon={logoIcon} />
        {onSearchHandler && (
          <Search
            onSearchHandler={onSearchHandler}
            searchPlaceholder={searchPlaceholder}
            searchDefaultValue={searchDefaultValue}
            isSearchDisabled={isSearchDisabled}
            dark={dark}
          />
        )}
      </div>
      <div css={Styles.additionalToolsSection(Boolean(additionalTools))}>{additionalTools}</div>
      <div css={Styles.topAppBarSection}>
        <UserMenu dark={dark} {...userMenu} />
      </div>
    </div>
  );
};

export default TopAppBar;
