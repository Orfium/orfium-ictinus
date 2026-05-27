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

globalThis.ResizeObserver = vi.fn().mockImplementation(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
});

const mockIntersectionObserver = vi.fn().mockImplementation(function () {
  return {
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  };
});
window.IntersectionObserver = mockIntersectionObserver;

vi.mock('uuid', () => ({
  v4: () => '00000000-0000-0000-0000-000000000000',
}));

window.HTMLElement.prototype.scrollIntoView = function () {};

vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // deprecated
  removeListener: vi.fn(), // deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));
