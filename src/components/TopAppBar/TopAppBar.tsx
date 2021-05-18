import React, { FC } from 'react';
import { useBreakpoints } from '../../index';
import { SidebarMenuIcon, LogoPlaceholder, UserMenu } from './components';
import Search from './components/Search';
import Styles from './TopAppBar.style';
import { TopAppBarProps } from './TopAppBar.types';

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
            onKeyPressHandler={onKeyPressHandler}
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
