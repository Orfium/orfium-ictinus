import '@testing-library/jest-dom/vitest';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

vi.mock('@tippyjs/react');

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.mock(
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

vi.mock('@react-aria/ssr', async () => ({
  ...(await vi.importActual<any>('@react-aria/ssr')),
  useSSRSafeId: () => 'react-aria-generated-id',
}));

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
