import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMockMediaMatcher } from '../../hooks/useBreakpoints.test';
import { fireEvent, render } from '../../test';
import { menuItems } from '../storyUtils/DrawerShowcase/MenuItems';
import Drawer from './Drawer';

describe('Drawer', () => {
  let queries: any;
  let expanded = true;

  beforeEach(async () => {
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(true);

    queries = render(
      <Router>
        <Drawer
          expanded={expanded}
          menuItems={menuItems}
          setExpanded={() => {
            expanded = false;
          }}
        />
      </Router>
    );
  });

  test('that menu items are rendering', async () => {
    for (const menuItem of menuItems) {
      // menu item is visible
      expect(queries.getByText(menuItem.name)).toBeVisible();
      //sub menu items are not visible
      for (const subMenuItem of menuItem.options) {
        expect(queries.getByText(subMenuItem.name)).not.toBeVisible();
      }
    }
  });

  test('that submenu items are displayed when menu item is clicked', async () => {
    const testingMenuItem = menuItems[0];
    fireEvent.click(queries.getByText(testingMenuItem.name));
    for (const subMenuItem of testingMenuItem.options) {
      expect(queries.getByText(subMenuItem.name)).toBeVisible();
    }
  });

  test('that submenu navigation is working', async () => {
    const testingMenuItem = menuItems[0];
    const testingSubMenuItem = testingMenuItem.options[3];
    expect(queries.getByText(testingSubMenuItem.name)).not.toBeVisible();
    fireEvent.click(queries.getByText(testingMenuItem.name)); // open menu item
    expect(queries.getByText(testingSubMenuItem.name)).toBeVisible();
    fireEvent.click(queries.getByText(testingSubMenuItem.name));
    expect(location.pathname).toBe(testingSubMenuItem.url);
  });
});
