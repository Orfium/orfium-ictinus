import '@testing-library/jest-dom';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

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
