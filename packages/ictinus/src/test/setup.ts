import { createSerializer } from '@emotion/jest';
import '@testing-library/jest-dom/vitest';
import { expect, vi } from 'vitest';

/**
 * Mock the version module to return a fixed value in tests.
 * This prevents snapshot changes when the package version changes.
 */
vi.mock('../version', () => ({
  version: 'test-version',
}));

expect.addSnapshotSerializer(createSerializer());

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

vi.mock(
  (() => {
    // This will mock the version of uuid belonging to react-tooltip
    // if it exists, otherwise use the top-level uuid module
    // see the issue here https://github.com/wwayne/react-tooltip/issues/595
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('react-tooltip/node_modules/uuid');

      return 'react-tooltip/node_modules/uuid';
    } catch {
      return 'uuid';
    }
  })(),
  () => ({
    v4: () => '00000000-0000-0000-0000-000000000000',
  })
);

// because scrollIntoView doesn't exist in jest
window.HTMLElement.prototype.scrollIntoView = function () {};

vi.stubGlobal('matchMedia', (query: string) => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // deprecated
  removeListener: vi.fn(), // deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));
