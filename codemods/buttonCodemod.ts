import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all Button components
  root.findJSXElements('Button').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // If the attribute is one of the deprecated ones, remove it
        if (['color', 'transparent', 'filled'].includes(attr.name)) {
          j(attrPath).remove();
        }

        // If the attribute is one of the ones that changed, update it
        if (attr.name === 'loading') attr.name = 'isLoading';
        if (attr.name === 'disabled') attr.name = 'isDisabled';
        if (attr.name === 'buttonType') attr.name = 'htmlType';
        if (attr.name === 'type') attr.name = 'buttonType';
        if (attr.name === 'iconLeft') attr.name = 'iconLeftName';
        if (attr.name === 'iconRight') attr.name = 'iconRightName';
      });
  });

  return root.toSource();
};

export default transform;
