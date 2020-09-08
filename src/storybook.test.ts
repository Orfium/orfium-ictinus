import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { styleSheetSerializer } from 'jest-styled-components';
import { addSerializer } from 'jest-specific-snapshot';
import { crawlTreeChildrenProps } from './utils/storyshots';

/** Every time we run the tests, the dynamic attribute values that are generated for each element cause tests to fail.
 * A quick solution is to update snapshots every time we run the tests (jest -u) and then push the updated snapshots to git.
 * The above solution will cause merge conflicts, so it is not the best practice.
 * To resolve this issue. We have to change every dynamic value with a static one.
 * For example : id="styled-checkbox-_og1xq7.7u" will be converted to id="styled-checkbox-"
 * Currently, there are two dynamic attributes, id for inputs and htmlFor for labels.
 * */

addSerializer(styleSheetSerializer);
registerRequireContextHook();

initStoryshots({
  test: ({ story, context }) => {
    const converter = new Stories2SnapsConverter();
    const snapshotFilename = converter.getSnapshotFileName(context);
    const storyElement = story.render(context);
    const tree = renderer.create(storyElement).toJSON();
    crawlTreeChildrenProps(tree);

    expect(tree).toMatchSpecificSnapshot(snapshotFilename);
  },
});
