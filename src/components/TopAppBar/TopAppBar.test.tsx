import React from 'react';
import { fireEvent, render } from 'test';

import { createMockMediaMatcher } from '../../hooks/useBreakpoints.test';
import { DEFAULT_USER_MENU } from '../storyUtils/TopAppBarShowcase';
import TopAppBar from './TopAppBar';
import { Mock } from 'vitest';

describe('TopAppBar', () => {
  let onMenuIconClickMock: Mock;
  let onSearchHandler: Mock;
  let onKeyPressHandler: Mock;

  beforeEach(() => {
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(true);
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
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(false);

    const { findByTestId } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} />
    );

    const menuHandler = await findByTestId('menu-handler');
    fireEvent.click(menuHandler);

    expect(onMenuIconClickMock).toHaveBeenCalledTimes(1);
  });
  it('should call onKeyPressHandler One Time', async () => {
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(false);

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
