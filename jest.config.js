module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'mdx'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
};

// transform: {
//   '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
//   '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
// },
