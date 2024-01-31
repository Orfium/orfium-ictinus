import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('Menu').forEach((path) => {
    // Remove unwanted attributes and rename onSelect to onAction
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attrName = attrPath.node.name.name;
        if (['color', 'buttonText', 'items'].includes(attrName)) {
          j(attrPath).remove();
        }
        if (attrName === 'onSelect') {
          attrPath.node.name.name = 'onAction';
        }
      });

    // Insert a static ListItem for testing
    const staticListItem = j.jsxElement(
      j.jsxOpeningElement(j.jsxIdentifier('ListItem'), [], true),
      j.jsxClosingElement(j.jsxIdentifier('ListItem')),
      [j.jsxText('Static Item')]
    );

    // Ensure that children array exists
    if (!path.node.children) {
      path.node.children = [];
    }

    // Append static ListItem as a child
    path.node.children.push(staticListItem);

    // Log for debugging
    console.log('Updated Menu Component:', path.node);
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
