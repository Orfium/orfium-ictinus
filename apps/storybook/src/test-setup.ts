import { createSerializer } from '@emotion/jest';
import '@testing-library/jest-dom/vitest';
import { beforeAll, vi } from 'vitest';

// Import project-level annotations for Storybook decorators (ThemeProvider)
import { setProjectAnnotations } from '@storybook/react';
import * as previewAnnotations from '../.storybook/preview';

// Set up Storybook annotations (decorators, etc.) for portable stories
const annotations = setProjectAnnotations([previewAnnotations]);

expect.addSnapshotSerializer(createSerializer());

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
global.IntersectionObserver = mockIntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = vi.fn(() => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: vi.fn(),
}));

// Run Storybook's beforeAll hook to apply decorators
beforeAll(annotations.beforeAll);
