import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all IconButton components
  root.findJSXElements('IconButton').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // If the attribute is one of the deprecated ones, remove it
        if (['color', 'transparent', 'filled', 'iconSize'].includes(attr.name)) {
          j(attrPath).remove();
        }

        // If the attribute is one of the ones that changed, update it
        if (attr.name === 'loading') attr.name = 'isLoading';
        if (attr.name === 'disabled') attr.name = 'isDisabled';
        if (attr.name === 'name') attr.name = 'iconName';
        if (attr.name === 'buttonType') attr.name = 'htmlType';
        if (attr.name === 'type') attr.name = 'buttonType';
      });
  });

  return root.toSource();
};

export default transform;
