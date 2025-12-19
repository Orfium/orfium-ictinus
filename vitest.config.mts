import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  envPrefix: ['REACT_APP_', 'VITE_', 'CUSTOM_', 'ROOT_'],
  test: {
    projects: ['apps/*', 'packages/*'],
    coverage: {
      reporter: ['lcov'],
      provider: 'v8',
      exclude: [
        ...coverageConfigDefaults.exclude,
        'apps/**',
        'examples/**',
        'packages/tokens/**',
        'server/**',
        '**/page.tsx',
        '**/build/**',
        '**/dist/**',
        '**/*.css.ts',
        '**/*.styles.ts',
        '**/*.style.ts',
        '**/package.json',
        '**/vitest.config.ts',
        '**/vitest.workspace.ts',
        'turbo.json',
        'pnpm-lock.yaml',
        '**/__mocks__/**',
        '**/src/config/**',
        '**/src/test/**',
      ],
    },
  },
});
