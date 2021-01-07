/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Styles from './TopAppBar.style';
import { DEFAULT_BG_COLOR, DEFAULT_SEARCH_COLOR, TopAppBarProps } from './TopAppBar.types';
import { SidebarMenuIcon } from './components';
import LogoWrapper from './components/Logo.wrapper';
import TextField from '../TextField';
import Icon from '../Icon';
import { pickTextColorFromSwatches } from '../../theme/palette';
import Menu from '../Menu';

const TopAppBar: FC<TopAppBarProps> = ({
  bgColor = DEFAULT_BG_COLOR,
  searchBgColor = DEFAULT_SEARCH_COLOR,
  searchPlaceholder = 'Search',
  logoIcon,
  onMenuIconClick,
  additionalTools,
  userMenu,
  onSearchHandler,
}) => {
  const { type, variant } = searchBgColor;
  const { items, userAvatar, userName, onSelect } = userMenu;
  const searchProps = { onChange: onSearchHandler };

  return (
    <div
      role="banner"
      aria-label="Top Application Banner"
      css={Styles.topAppBarWrapper({ bgColor })}
    >
      <div css={Styles.mainSection}>
        <SidebarMenuIcon onMenuIconClick={onMenuIconClick} />
        <LogoWrapper logoIcon={logoIcon} />
        <div css={Styles.searchWrapper}>
          <TextField
            placeholder={searchPlaceholder}
            fill={type}
            styleType={'filled'}
            fillShade={variant}
            leftIcon={<Icon name={'search'} color={pickTextColorFromSwatches(type, variant)} />}
            {...searchProps}
          />
        </div>
      </div>
      <div css={Styles.additionalToolsSection}>{additionalTools}</div>
      <div css={Styles.topAppBarSection}>
        <Menu
          items={items}
          buttonText={userName}
          buttonType={'warning'}
          color={'darkGray-600'}
          rightIconName={'arrowDown'}
          avatar={userAvatar}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default TopAppBar;
