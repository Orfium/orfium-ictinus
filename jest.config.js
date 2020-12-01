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
    '\\.svg$': '<rootDir>/__mocks__/fileMock.tsx',
  },
};
