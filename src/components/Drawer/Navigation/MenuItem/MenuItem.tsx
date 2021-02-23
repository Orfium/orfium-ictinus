/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MenuItem as MenuItemProps } from 'components/Drawer/types';
import ExpandCollapse from 'components/ExpandCollapse';
import Icon from 'components/Icon';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { pickTextColorFromSwatches } from 'theme/palette';
import {
  menuItemStyle,
  arrowContainerStyle,
  menuIconStyle,
  menuItemTextStyle,
  subMenuLinkStyle,
  subMenuIconStyle,
  menuLinkStyle,
} from '../Navigation.style';

type Props = {
  /** Defines the current menu item whose submenu item is currently selected */
  isCurrent: boolean;
  /** Defines if the menu item is expanded */
  expanded: boolean;
  toggleMenuItem: (newUrl: string) => void;
} & MenuItemProps;

const MenuItem: React.FC<Props> = memo(
  ({ isCurrent, expanded, name, url, iconName, options, toggleMenuItem, state: linkState }) => {
    const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();

    const calculatedIconColor = useMemo(() => {
      const branded1Color = calculateColorBetweenColorAndType('', 'branded1');

      return pickTextColorFromSwatches(branded1Color.color, branded1Color.shade);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hasSubMenus = useMemo(() => options.length > 0, [options.length]);

    const MenuItemContent = (
      <React.Fragment>
        <div css={arrowContainerStyle(expanded, hasSubMenus)}>
          <Icon name="triangleRight" color={'black'} size={10} />
        </div>
        <div css={menuIconStyle(isCurrent)}>
          <Icon name={iconName} color={isCurrent ? calculatedIconColor : 'black'} size={20} />
        </div>
        <span css={menuItemTextStyle(isCurrent)}>{name}</span>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        {hasSubMenus ? (
          <ExpandCollapse
            expanded={expanded}
            onChange={() => toggleMenuItem(url)}
            textAndControl={handleClick => {
              return (
                <div css={menuItemStyle()} data-testid={url} onClick={handleClick}>
                  {MenuItemContent}
                </div>
              );
            }}
          >
            {() => {
              return (
                <React.Fragment>
                  {options.map(
                    subMenuItem =>
                      subMenuItem.visible && (
                        <NavLink
                          exact
                          to={{
                            pathname: subMenuItem.url,
                            state: subMenuItem.state,
                          }}
                          data-testid={subMenuItem.url}
                          activeClassName="active"
                          key={subMenuItem.url}
                          css={subMenuLinkStyle()}
                        >
                          <div css={subMenuIconStyle()}>
                            <Icon name={subMenuItem.iconName} color={'black'} size={20} />
                          </div>
                          <span>{subMenuItem.name}</span>
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

export default MenuItem;
