import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { BASE_SHADE } from 'theme/palette';

import useTheme from '../../../../hooks/useTheme';
import {
  menuItemStyle,
  arrowContainerStyle,
  menuIconStyle,
  menuItemTextStyle,
  subMenuLinkStyle,
  subMenuIconStyle,
  menuLinkStyle,
} from '../Navigation.style';
import type { DrawerMenuItem } from 'components/Drawer/types';
import ExpandCollapse from 'components/ExpandCollapse';
import Icon from 'components/Icon';

export type MenuItemProps = {
  /** Defines the current menu item whose submenu item is currently selected */
  isCurrent: boolean;
  /** Defines if the menu item is expanded */
  isExpanded: boolean;
  toggleMenuItem: (newUrl: string) => void;
} & DrawerMenuItem;

const MenuItem: React.FCC<MenuItemProps> = memo(
  ({ isCurrent, isExpanded, name, url, iconName, options, toggleMenuItem, state: linkState }) => {
    const theme = useTheme();

    const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
    const { color, shade } = calculateColorBetweenColorAndType('', 'primary');

    const hasSubMenus = useMemo(() => options.length > 0, [options.length]);

    const MenuItemContent = (
      <React.Fragment>
        <div css={arrowContainerStyle(isExpanded, hasSubMenus)}>
          <Icon name="triangleRight" color={theme.utils.getColor('lightGrey', 650)} size={10} />
        </div>
        <div css={menuIconStyle(isCurrent)}>
          <Icon
            name={iconName}
            color={
              isCurrent
                ? theme.utils.getAAColorFromSwatches(color, shade)
                : theme.utils.getColor('lightGrey', 850)
            }
            size={20}
            variant={isCurrent ? shade : BASE_SHADE}
          />
        </div>
        <span className="menu-item-text" css={menuItemTextStyle(isCurrent)}>
          {name}
        </span>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        {hasSubMenus ? (
          <ExpandCollapse
            isExpanded={isExpanded}
            onChange={() => toggleMenuItem(url)}
            textAndControl={(handleClick) => {
              return (
                <button
                  type="button"
                  css={menuItemStyle()}
                  data-testid={url}
                  onClick={handleClick}
                >
                  {MenuItemContent}
                </button>
              );
            }}
          >
            {() => {
              return (
                <React.Fragment>
                  {options.map(
                    (subMenuItem) =>
                      subMenuItem.isVisible && (
                        <NavLink
                          exact
                          to={{
                            pathname: subMenuItem.url,
                            state: subMenuItem.state,
                          }}
                          data-testid={subMenuItem.url}
                          activeClassName="active"
                          isActive={subMenuItem?.isActive}
                          key={subMenuItem.url}
                          css={subMenuLinkStyle()}
                          id="submenu-item-link"
                        >
                          <div css={subMenuIconStyle()}>
                            <Icon
                              name={subMenuItem.iconName}
                              color={theme.utils.getColor('lightGrey', 650)}
                              size={20}
                            />
                          </div>
                          <span className="submenu-item-text">{subMenuItem.name}</span>
                        </NavLink>
                      )
                  )}
                </React.Fragment>
              );
            }}
          </ExpandCollapse>
        ) : (
          <NavLink
            exact
            to={{
              pathname: url,
              state: linkState,
            }}
            data-testid={url}
            activeClassName="active"
            key={url}
            css={menuLinkStyle()}
          >
            {MenuItemContent}
          </NavLink>
        )}
      </React.Fragment>
    );
  }
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
