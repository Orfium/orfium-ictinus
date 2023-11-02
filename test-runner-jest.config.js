const { getJestConfig } = require('@storybook/test-runner');

process.env.TEST_ROOT = process.cwd();

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  preset: 'jest-playwright-jsdom',
  // testEnvironment: 'jsdom',
  // snapshotSerializers: [...getJestConfig().snapshotSerializers, '@emotion/jest/serializer'],
  // snapshotSerializers: [...getJestConfig().snapshotSerializers, './serializer.js'],
  snapshotSerializers: [
    '<rootDir>/serializer.js',
    // Jest will use the first working one, but including default to be complete
    ...getJestConfig().snapshotSerializers,
  ],
  snapshotResolver: './snapshot-resolver.js',
};
