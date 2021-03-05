/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Styles from './TopAppBar.style';
import { TopAppBarProps } from './TopAppBar.types';
import { SidebarMenuIcon, LogoPlaceholder, UserMenu } from './components';
import TextField from '../TextField';
import Icon from '../Icon';
import { useBreakpoints } from '../../index';

const TopAppBar: FC<TopAppBarProps> = ({
  searchPlaceholder = 'Search',
  logoIcon,
  onMenuIconClick,
  additionalTools,
  userMenu,
  onSearchHandler,
  dark = false,
}) => {
  const breakpoints = useBreakpoints();
  const searchProps = onSearchHandler ? { onChange: onSearchHandler } : {};

  return (
    <div role="banner" aria-label="Top Application Banner" css={Styles.topAppBarWrapper(dark)}>
      <div css={Styles.mainSection(Boolean(onSearchHandler))}>
        {!breakpoints.des1200 && <SidebarMenuIcon onMenuIconClick={onMenuIconClick} />}
        <LogoPlaceholder logoIcon={logoIcon} />
        {onSearchHandler && (
          <div css={Styles.searchWrapper}>
            <TextField
              placeholder={searchPlaceholder}
              dark={dark}
              styleType={'filled'}
              leftIcon={<Icon name={'search'} />}
              {...searchProps}
            />
          </div>
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
