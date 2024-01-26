import React from 'react';

import { render, fireEvent } from '../../test';
import Drawer from './Drawer';
import { DrawerContent, DrawerFooter, DrawerHeader } from './components';

describe('Drawer', () => {
  const content = 'content';

  test('Drawer renders correctly', async () => {
    const closeCTA = vi.fn();

    const { findByText, findByTestId } = render(
      <Drawer isOpen={true} size={33} onClose={closeCTA}>
        <DrawerHeader>
          <div>{content}</div>
        </DrawerHeader>
      </Drawer>
    );

    const drawerContainer = await findByTestId('ictinus_drawer_drawer_container');
    expect(drawerContainer).toBeTruthy();

    const drawerContent = await findByText(content);
    expect(drawerContent).toBeTruthy();
  });

  test('Drawer closeCTA works properly when clicked', async () => {
    const closeCTA = vi.fn();

    const { findByTestId } = render(
      <Drawer isOpen={true} size={33} onClose={closeCTA}>
        <DrawerHeader>
          <div>{content}</div>
        </DrawerHeader>
      </Drawer>
    );

    const closeButton = await findByTestId('ictinus_drawer_close_button');
    fireEvent.click(closeButton);

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });

  test('Drawer closeCTA will get triggered when Esc button is clicked', async () => {
    const closeCTA = vi.fn();

    render(
      <Drawer isOpen={true} size={33} onClose={closeCTA}>
        <DrawerHeader>
          <div>{content}</div>
        </DrawerHeader>
      </Drawer>
    );

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });

  test('Drawer with no fixed header/footer has the whole container scrollable', async () => {
    const closeCTA = vi.fn();

    const { findByTestId } = render(
      <Drawer isOpen={true} size={33} onClose={closeCTA}>
        <DrawerHeader>
          <div>{content}</div>
        </DrawerHeader>
        <DrawerContent>
          <div>{content}</div>
        </DrawerContent>
        <DrawerFooter>
          <div>{content}</div>
        </DrawerFooter>
      </Drawer>
    );

    const drawerContainer = await findByTestId('ictinus_drawer_drawer_container');
    expect(drawerContainer).toBeTruthy();

    const containerComputedStyle = getComputedStyle(drawerContainer);

    expect('auto').toContain(containerComputedStyle.overflowY);

    const drawerContent = await findByTestId('ictinus_drawer_content');
    expect(drawerContent).toBeTruthy();

    const contentComputedStyle = getComputedStyle(drawerContent);

    expect('').toContain(contentComputedStyle.overflowY);
  });

  test('Drawer with fixed header/footer has the content scrollable', async () => {
    const closeCTA = vi.fn();

    const { findByTestId } = render(
      <Drawer isOpen={true} size={33} onClose={closeCTA} hasFixedLayout>
        <DrawerHeader>
          <div>{content}</div>
        </DrawerHeader>
        <DrawerContent>
          <div>{content}</div>
        </DrawerContent>
        <DrawerFooter>
          <div>{content}</div>
        </DrawerFooter>
      </Drawer>
    );

    const drawerContainer = await findByTestId('ictinus_drawer_drawer_container');
    expect(drawerContainer).toBeTruthy();

    const containerComputedStyle = getComputedStyle(drawerContainer);

    expect('').toContain(containerComputedStyle.overflowY);

    const drawerContent = await findByTestId('ictinus_drawer_content');
    expect(drawerContent).toBeTruthy();

    const contentComputedStyle = getComputedStyle(drawerContent);

    expect('auto').toContain(contentComputedStyle.overflowY);
  });
});
