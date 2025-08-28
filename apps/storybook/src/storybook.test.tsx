/// <reference types="vite/client"/>
import { ThemeProvider } from '@orfium/ictinus';
import { type Meta, type StoryFn, composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

/**
 * This serializer identifies and replaces React Aria's dynamically generated IDs
 * in snapshot tests, ensuring consistent and predictable snapshots.
 *
 * @example
 * // Input:  id="react-aria-:r5:"
 * // Output: id="react-aria-:test-id:"
 *
 * @example
 * // Input:  aria-labelledby="react-aria-:r7:-label"
 * // Output: aria-labelledby="react-aria-:test-id:-label"
 *
 * @note
 * This serializer may add quotes even if they weren't in the original string.
 */
expect.addSnapshotSerializer({
  test: (val) => typeof val === 'string' && /react-aria-:\w+:/.test(val),
  print: (val) =>
    typeof val === 'string' &&
    val.replace(/react-aria-:\w+:([-\w$.\s]+)?/g, '"react-aria-:test-id:$1"'),
});

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`
    );
  }
};

function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = Object.entries(
    import.meta.glob<StoryFile>(['./**/*.stories.ts(x)?', '!**/useSearchQueryParams.stories.tsx'], {
      eager: true,
    })
  );

  return storyFiles.map(([filePath, storyFile]) => ({ filePath, storyFile }));
}

const storyKindRegex = /^.*?DontTest$/;
const storyNameRegex = /Large/i;

describe('Storybook Tests', () => {
  getAllStoryFiles().forEach(({ filePath, storyFile }) => {
    const meta = storyFile.default;
    const title = meta.title || filePath.split('.').pop();

    if (!title) {
      throw new Error(`Unable to find title for story file: ${filePath}`);
    }

    if (storyKindRegex.test(title) || meta.parameters?.storyshots?.disable) {
      return;
    }

    const describeFn = meta.parameters?.storyshots?.skip ? describe.skip : describe;
    describeFn(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          // Create your own logic to filter stories here if you like.
          // This is recreating the default behavior of storyshots.
          return !storyNameRegex.test(name) && !story.parameters.storyshots?.disable;
        });

      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter.`
        );
      }

      stories.forEach(({ name, story: Story }) => {
        // Instead of not running the test, you can create logic to skip it instead, so it's shown as skipped in the test results.
        const testFn = Story.parameters.storyshots?.skip ? test.skip : test;

        testFn(name, async () => {
          const mounted = render(
            <ThemeProvider>
              <Story />
            </ThemeProvider>
          );

          // add a slightly delay to allow a couple render cycles to complete, resulting in a more stable snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));

          await expect(mounted.container).toMatchFileSnapshot(
            `./__storyshots__/${meta.title}-${Story.storyName}.snap`
          );
        });
      });
    });
  });
});
