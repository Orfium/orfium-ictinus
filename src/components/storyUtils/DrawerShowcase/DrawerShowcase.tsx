import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import Drawer from '../../Drawer';
import Button from '../../Button';
import { menuItems } from './MenuItems';
import useTheme from '../../../hooks/useTheme';
import { flex } from '../../../theme/functions';

const DisplayLocation = () => {
  const location = useLocation<{ test: string }>();

  return <div>Link State: {location?.state?.test}</div>;
};

const DrawerShowcase: React.FC = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Router>
      <Button type="branded1" size="sm" onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'Hide' : 'Show'} Drawer
      </Button>
      <div css={[flex, 'height: 100vh']}>
        <Drawer expanded={expanded} menuItems={menuItems} setExpanded={setExpanded} />
        <div
          css={[
            flex,
            `padding: 50px;flex-direction: column; align-items: center; background-color: ${theme.palette.flat.lightGray[100]}; width: 100%;  `,
          ]}
        >
          <div css={[flex, 'flex-direction: column']}>
            <span css={['font-weight: bold; margin: 5px']}>
              Click an option to navigate directly to Route
            </span>
            {menuItems.map(menuItem => {
              const hasSubMenus = menuItem.options.length > 0;
              if (!hasSubMenus) {
                return (
                  <NavLink
                    css={['text-decoration: none; color: inherit; margin: 5px']}
                    key={menuItem.url}
                    exact
                    to={menuItem.url}
                  >
                    {menuItem.name}
                  </NavLink>
                );
              } else
                return menuItem.options.map(subMenuItem => (
                  <NavLink
                    css={['text-decoration: none; color: inherit; margin: 5px']}
                    key={subMenuItem.url}
                    exact
                    to={subMenuItem.url}
                  >
                    {subMenuItem.name}
                  </NavLink>
                ));
            })}
          </div>
          <br />
          <br /> Current Route:
          <Switch>
            <Route path="/menu1">
              {() => (
                <Fragment>
                  <div>/menu1</div>
                  <DisplayLocation />
                </Fragment>
              )}
            </Route>
            <Route path="/submenu1">
              {() => (
                <Fragment>
                  <div>/submenu1</div>
                  <DisplayLocation />
                </Fragment>
              )}
            </Route>
            <Route path="/submenu2">{() => <div>/submenu2</div>}</Route>
            <Route path="/submenu3">{() => <div>/submenu3</div>}</Route>
            <Route path="/submenu4">{() => <div>/submenu4</div>}</Route>
            <Route path="/menu2">{() => <div>/menu2</div>}</Route>
            <Route path="/submenu5">{() => <div>/submenu5</div>}</Route>
            <Route path="/submenu6">{() => <div>/submenu6</div>}</Route>
            <Route path="/menu3">{() => <div>/menu3</div>}</Route>
            <Route path="/submenu7">{() => <div>/submenu7</div>}</Route>
            <Route path="/submenu8">{() => <div>/submenu8</div>}</Route>
            <Route path="/submenu9">{() => <div>/submenu9</div>}</Route>
            <Route path="/menu4">{() => <div>/menu4</div>}</Route>
          </Switch>
          <br />
        </div>
      </div>
    </Router>
  );
};

export default DrawerShowcase;
