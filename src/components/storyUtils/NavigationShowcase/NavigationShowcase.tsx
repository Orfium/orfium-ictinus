import useTheme from 'hooks/useTheme';
import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { flex } from 'theme/functions';

import { menuItems } from './MenuItems';
import Button from 'components/Button';
import Navigation from 'components/Navigation';

const DisplayLocation = () => {
  const location = useLocation();

  return <div>Link State: {location?.state?.test}</div>;
};

interface Props {
  renderHeader?: () => React.ReactNode;
}
const NavigationShowcase: React.FCC<Props> = ({ renderHeader }) => {
  const theme = useTheme();
  const [hasExpanded, setHasExpanded] = useState<boolean>(true);

  return (
    <Router>
      <Button onClick={() => setHasExpanded((hasExpanded) => !hasExpanded)}>
        {hasExpanded ? 'Hide' : 'Show'} Navigation
      </Button>
      <div css={[flex, 'height: 100vh']}>
        <Navigation
          isExpanded={hasExpanded}
          menuItems={menuItems}
          setExpanded={setHasExpanded}
          renderHeader={renderHeader}
        />
        <div
          css={[
            flex,
            `padding: 50px; flex-direction: column; align-items: center; background-color: ${theme.tokens.colors.get(
              'backgroundColor.alt'
            )}; width: 100%;`,
          ]}
        >
          <div css={[flex, 'flex-direction: column']}>
            <span css={['font-weight: bold; margin: 5px']}>
              Click an option to navigate directly to Route
            </span>
            {menuItems.map((menuItem) => {
              const hasSubMenus = menuItem.options.length > 0;

              return hasSubMenus ? (
                menuItem.options.map((subMenuItem) => (
                  <NavLink
                    css={['text-decoration: none; color: inherit; margin: 5px']}
                    key={subMenuItem.url}
                    to={subMenuItem.url}
                  >
                    {subMenuItem.name}
                  </NavLink>
                ))
              ) : (
                <NavLink
                  css={['text-decoration: none; color: inherit; margin: 5px']}
                  key={menuItem.url}
                  to={menuItem.url}
                >
                  {menuItem.name}
                </NavLink>
              );
            })}
          </div>
          <br />
          <br /> Current Route:
          <Routes>
            <Route
              path="/menu1"
              element={
                <Fragment>
                  <div>/menu1</div>
                  <DisplayLocation />
                </Fragment>
              }
            />
            <Route
              path="/submenu1"
              element={
                <Fragment>
                  <div>/submenu1</div>
                  <DisplayLocation />
                </Fragment>
              }
            />
            <Route path="/submenu2" element={<div>/submenu2</div>} />
            <Route path="/submenu3" element={<div>/submenu3</div>} />
            <Route path="/submenu4" element={<div>/submenu4</div>} />
            <Route path="/menu2" element={<div>/menu2</div>} />
            <Route path="/submenu5" element={<div>/submenu5</div>} />
            <Route path="/submenu6" element={<div>/submenu6</div>} />
            <Route path="/menu3" element={<div>/menu3</div>} />
            <Route path="/submenu7" element={<div>/submenu7</div>} />
            <Route path="/submenu8" element={<div>/submenu8</div>} />
            <Route path="/submenu9" element={<div>/submenu9</div>} />
            <Route path="/menu4" element={<div>/menu4</div>} />
          </Routes>
          <br />
        </div>
      </div>
    </Router>
  );
};

export default NavigationShowcase;
