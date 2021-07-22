import '@testing-library/jest-dom';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

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

// because scrollIntoView doesn't exist in jest
window.HTMLElement.prototype.scrollIntoView = function() {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
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
