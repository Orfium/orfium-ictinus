module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
    '.+\\.svg?.+$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'mdx'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.tsx',
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  // setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx,js,jsx,mdx,md}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/docs/'],
};
