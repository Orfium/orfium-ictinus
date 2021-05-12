import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import renderer from 'react-test-renderer';
import { addSerializer } from 'jest-specific-snapshot';
import { createSerializer } from '@emotion/jest';
import { crawlTreeChildrenProps } from './utils/storyshots';
import { ReactElement } from 'react';

/** Every time we run the tests, the dynamic attribute values that are generated for each element cause tests to fail.
 * A quick solution is to update snapshots every time we run the tests (jest -u) and then push the updated snapshots to git.
 * The above solution will cause merge conflicts, so it is not the best practice.
 * To resolve this issue. We have to change every dynamic value with a static one.
 * For example : id="styled-checkbox-_og1xq7.7u" will be converted to id="styled-checkbox-"
 * Currently, there are two dynamic attributes, id for inputs and htmlFor for labels.
 * */

addSerializer(createSerializer());

function createNodeMock(element: ReactElement) {
  const isExpandCollapseComponent = element.props.className?.includes('ExpandCollapse');
  if (isExpandCollapseComponent) {
    //Mocking useRef<HTMLDivElement> for ExpandCollapse component.
    const htmlDivElementRefMock = {
      style: {
        visibility: 0,
        height: 0,
      },
    };

    return htmlDivElementRefMock;
  }

  // You can return any object from this method for any type of DOM component.
  // React will use it as a ref instead of a DOM node when snapshot testing.
  return null;
}

initStoryshots({
  test: ({ story, context }) => {
    const converter = new Stories2SnapsConverter();
    const options = { createNodeMock };

    const snapshotFilename = converter.getSnapshotFileName(context);
    const storyElement = story.render(context);
    const tree = renderer.create(storyElement, options).toJSON();
    crawlTreeChildrenProps(tree);

    expect(tree).toMatchSpecificSnapshot(snapshotFilename);
  },
});
