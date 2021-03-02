/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Styles from './TopAppBar.style';
import { TopAppBarProps } from './TopAppBar.types';
import { SidebarMenuIcon } from './components';
import LogoWrapper from './components/Logo.wrapper';
import TextField from '../TextField';
import Icon from '../Icon';
import Menu from '../Menu';
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
  const { items, userAvatar, userName, onSelect } = userMenu;
  const searchProps = onSearchHandler ? { onChange: onSearchHandler } : {};

  return (
    <div role="banner" aria-label="Top Application Banner" css={Styles.topAppBarWrapper(dark)}>
      <div css={Styles.mainSection(Boolean(onSearchHandler))}>
        {!breakpoints.des1200 && <SidebarMenuIcon onMenuIconClick={onMenuIconClick} />}
        <LogoWrapper logoIcon={logoIcon} />
        {onSearchHandler && (
          <div css={Styles.searchWrapper}>
            <TextField
              placeholder={searchPlaceholder}
              dark={dark}
              styleType={dark ? 'filled' : 'outlined'}
              leftIcon={<Icon name={'search'} />}
              {...searchProps}
            />
          </div>
        )}
      </div>
      <div css={Styles.additionalToolsSection(Boolean(additionalTools))}>{additionalTools}</div>
      <div css={Styles.topAppBarSection}>
        <Menu
          items={items}
          color={dark ? 'neutralBlack-700' : 'neutralWhite-100'}
          buttonText={userName}
          buttonType={'warning'}
          rightIconName={'arrowDown'}
          avatar={userAvatar}
          onSelect={onSelect}
          dataTestId={'userMenu'}
        />
      </div>
    </div>
  );
};

export default TopAppBar;
