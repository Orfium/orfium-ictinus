/// <reference types="vite/client"/>
import { Meta, StoryFn, composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ThemeProvider } from './index';

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

describe('Storybook Snapshots', async () => {
  const files = import.meta.glob<StoryFile>([
    `../**/*.stories.tsx`,
    '!**/useSearchQueryParams.stories.tsx',
  ]);
  const modules = await Promise.all(Object.values(files).map((fn) => fn()));

  describe.each(modules.map((module) => ({ name: module.default.title, module })))(
    '$name',
    ({ module }) => {
      test.each(Object.values(composeStories(module)).map((Story) => [Story.storyName!, Story]))(
        '%s',
        async (_, Story) => {
          const { container } = render(
            <ThemeProvider>
              <Story />
            </ThemeProvider>
          );
          expect(container).toBeTruthy();
          await expect(container).toMatchFileSnapshot(
            `./__storyshots__/${module.default.title}-${Story.storyName}.snap`
          );
        }
      );
    }
  );
});
