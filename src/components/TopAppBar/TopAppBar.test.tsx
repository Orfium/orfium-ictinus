import React from 'react';
import { fireEvent, render } from 'test';

import { DEFAULT_USER_MENU } from '../storyUtils/TopAppBarShowcase';
import TopAppBar from './TopAppBar';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('TopAppBar', () => {
  let onMenuIconClickMock: jest.Mock;
  let onSearchHandler: jest.Mock;
  let onKeyPressHandler: jest.Mock;

  beforeEach(() => {
    onMenuIconClickMock = jest.fn();
    onSearchHandler = jest.fn();
    onKeyPressHandler = jest.fn();
  });

  it('should render correctly', () => {
    const { container } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly on dark', () => {
    const { container } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} dark />
    );
    expect(container).toMatchSnapshot();
  });

  it('should call onMenuClick One Time', async () => {
    const { findByTestId } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} />
    );

    const menuHandler = await findByTestId('menu-handler');
    fireEvent.click(menuHandler);

    expect(onMenuIconClickMock).toHaveBeenCalledTimes(1);
  });
  it('should call onKeyPressHandler One Time', async () => {
    const { findByTestId } = render(
      <TopAppBar
        onMenuIconClick={onMenuIconClickMock}
        onSearchHandler={onSearchHandler}
        onKeyPressHandler={onKeyPressHandler}
        userMenu={DEFAULT_USER_MENU}
      />
    );

    const topNavSearch = (await findByTestId('top-nav-search')) as HTMLInputElement;
    fireEvent.change(topNavSearch, { target: { value: 'hello' } });
    expect(topNavSearch.value).toBe('hello');

    fireEvent.keyPress(topNavSearch, { key: 'Enter', code: 13, charCode: 13 });
    expect(onKeyPressHandler).toHaveBeenCalledTimes(1);
  });
});
