import '@testing-library/jest-dom';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock(
  (() => {
    // This will mock the version of uuid belonging to react-tooltip
    // if it exists, otherwise use the top-level uuid module
    // see the issue here https://github.com/wwayne/react-tooltip/issues/595
    try {
      require('react-tooltip/node_modules/uuid');

      return 'react-tooltip/node_modules/uuid';
    } catch (error) {
      return 'uuid';
    }
  })(),
  () => ({
    v4: () => '00000000-0000-0000-0000-000000000000',
  })
);

jest.mock('@react-aria/ssr/dist/main', () => ({
  ...jest.requireActual('@react-aria/ssr/dist/main'),
  useSSRSafeId: () => 'react-aria-generated-id',
}));

// because scrollIntoView doesn't exist in jest
window.HTMLElement.prototype.scrollIntoView = function () {};

Object.defineProperty(window, 'matchMedia', {
  // We don't need this to follow our naming conventions
  // eslint-disable-next-line @typescript-eslint/naming-convention
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    // We don't need this to follow our naming conventions
    // eslint-disable-next-line @typescript-eslint/naming-convention
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('@react-aria/ssr/dist/main', () => ({
  ...jest.requireActual('@react-aria/ssr/dist/main'),
  useSSRSafeId: () => 'react-aria-generated-id',
}));
