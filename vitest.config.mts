import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  envPrefix: ['REACT_APP_', 'VITE_', 'CUSTOM_', 'ROOT_'],
  test: {
    projects: ['apps/*', 'packages/*'],
    coverage: {
      reporter: ['lcov'],
      provider: 'v8',
      // Match sonar.sources
      include: ['packages/ictinus/src/**'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/*.stories.tsx',
        '**/*.css.ts',
        '**/*.styles.ts',
        '**/*.style.ts',
        '**/*.tokens.ts',
        '**/__mocks__/**',
        '**/test/**',
      ],
    },
  },
});
