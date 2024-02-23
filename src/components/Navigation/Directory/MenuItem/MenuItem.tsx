import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import useTheme from '../../../../hooks/useTheme';
import {
  menuItemStyle,
  arrowContainerStyle,
  menuIconStyle,
  menuItemTextStyle,
  subMenuLinkStyle,
  subMenuIconStyle,
  menuLinkStyle,
} from '../Directory.style';
import ExpandCollapse from 'components/ExpandCollapse';
import Icon from 'components/Icon';
import type { NavigationMenuItem } from 'components/Navigation/types';

export type MenuItemProps = {
  /** Defines the current menu item whose submenu item is currently selected */
  isCurrent: boolean;
  /** Defines if the menu item is expanded */
  isExpanded: boolean;
  toggleMenuItem: (newUrl: string) => void;
} & NavigationMenuItem;

const MenuItem: React.FCC<MenuItemProps> = memo(
  ({ isCurrent, isExpanded, name, url, iconName, options, toggleMenuItem, state: linkState }) => {
    const theme = useTheme();

    const hasSubMenus = useMemo(() => options.length > 0, [options.length]);

    const MenuItemContent = (
      <React.Fragment>
        <div css={arrowContainerStyle(isExpanded, hasSubMenus)}>
          <Icon
            name="triangleRight"
            color={theme.tokens.colors.get('textColor.default.primary')}
            size={20}
          />
        </div>
        <div css={menuIconStyle()}>
          <Icon
            name={iconName}
            color={
              isCurrent
                ? theme.tokens.colors.get('textColor.default.active')
                : theme.tokens.colors.get('textColor.default.primary')
            }
            size={20}
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
            // @ts-ignore
            isExpanded={isExpanded}
            onChange={() => toggleMenuItem(url)}
            textAndControl={(handleClick) => {
              return (
                <button type="button" css={menuItemStyle()} data-testid={url} onClick={handleClick}>
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
                          to={subMenuItem.url}
                          state={subMenuItem.state}
                          data-testid={subMenuItem.url}
                          className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                          }
                          key={subMenuItem.url}
                          css={subMenuLinkStyle()}
                          id="submenu-item-link"
                        >
                          <div css={subMenuIconStyle()}>
                            <Icon
                              name={subMenuItem.iconName}
                              color={theme.tokens.colors.get('textColor.default.primary')}
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
            to={url}
            state={linkState}
            data-testid={url}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
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
