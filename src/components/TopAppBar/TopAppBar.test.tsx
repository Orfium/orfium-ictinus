import React from 'react';
import { fireEvent, render } from 'test';
import { DEFAULT_USER_MENU } from '../storyUtils/TopAppBarShowcase';
import TopAppBar from './TopAppBar';
import { createMockMediaMatcher } from '../../hooks/useBreakpoints.test';

describe('TopAppBar', () => {
  let onMenuIconClickMock: jest.Mock;

  beforeEach(() => {
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(true);
    onMenuIconClickMock = jest.fn();
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
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(false);

    const { findByTestId } = render(
      <TopAppBar onMenuIconClick={onMenuIconClickMock} userMenu={DEFAULT_USER_MENU} />
    );

    const menuHandler = await findByTestId('menu-handler');
    fireEvent.click(menuHandler);

    expect(onMenuIconClickMock).toHaveBeenCalledTimes(1);
  });
});
