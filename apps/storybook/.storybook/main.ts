import type { StorybookConfig } from '@storybook/react-vite';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const config: StorybookConfig = {
  stories: [
    '../docs/GettingStarted/**/*.mdx',
    '../docs/Foundations/**/*.mdx',
    '../docs/Utilities/**/*.mdx',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
  ],
  addons: [getAbsolutePath('@storybook/addon-a11y'), getAbsolutePath('@storybook/addon-docs')],
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: false,
  },
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
};

export default config;

function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
