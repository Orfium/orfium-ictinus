import React from 'react';
import { fireEvent, render } from 'test';

import { Mock } from 'vitest';
import { DEFAULT_USER_MENU } from '~/utils/common';
import TopAppBar from './TopAppBar';

describe('TopAppBar', () => {
  let onMenuIconClickMock: Mock;
  let onSearchHandler: Mock;
  let onKeyPressHandler: Mock;

  beforeEach(() => {
    onMenuIconClickMock = vi.fn();
    onSearchHandler = vi.fn();
    onKeyPressHandler = vi.fn();
  });

  it('should render correctly', () => {
    const { container } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly on dark', () => {
    const { container } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} isDark />
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
