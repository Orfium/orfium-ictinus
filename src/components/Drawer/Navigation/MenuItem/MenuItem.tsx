import { MenuItem as MenuItemProps } from 'components/Drawer/types';
import ExpandCollapse from 'components/ExpandCollapse';
import Icon from 'components/Icon';
import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  menuItemStyle,
  arrowContainerStyle,
  menuIconStyle,
  menuItemTextStyle,
  subMenuLinkStyle,
  subMenuIconStyle,
  menuLinkStyle,
} from '../Navigation.style';
import useTheme from '../../../../hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { pickTextColorFromSwatches } from 'theme/palette';

type Props = {
  /** Defines the current menu item whose submenu item is currently selected */
  isCurrent: boolean;
  /** Defines if the menu item is expanded */
  expanded: boolean;
  toggleMenuItem: (newUrl: string) => void;
} & MenuItemProps;

const MenuItem: React.FC<Props> = memo(
  ({ isCurrent, expanded, name, url, iconName, options, toggleMenuItem, state: linkState }) => {
    const theme = useTheme();

    const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
    const { color, shade } = calculateColorBetweenColorAndType('', 'branded1');

    const hasSubMenus = useMemo(() => options.length > 0, [options.length]);

    const MenuItemContent = (
      <React.Fragment>
        <div css={arrowContainerStyle(expanded, hasSubMenus)}>
          <Icon name="triangleRight" color={'black'} size={10} />
        </div>
        <div css={menuIconStyle(isCurrent)}>
          <Icon
            name={iconName}
            color={isCurrent ? `${pickTextColorFromSwatches(color, shade)}` : 'neutralBlack'}
            size={20}
            variant={isCurrent ? shade : 700}
          />
        </div>
        <span className={'menu-item-text'} css={menuItemTextStyle(isCurrent)}>
          {name}
        </span>
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
                          isActive={subMenuItem?.isActive}
                          key={subMenuItem.url}
                          css={subMenuLinkStyle()}
                          id={'submenu-item-link'}
                        >
                          <div css={subMenuIconStyle()}>
                            <Icon
                              name={subMenuItem.iconName}
                              color={theme.utils.getColor('lightGray', 600)}
                              size={20}
                            />
                          </div>
                          <span className={'submenu-item-text'}>{subMenuItem.name}</span>
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
