import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('InlineNotification').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // If the attribute is one of the ones that changed, update it
        if (attr.name === 'withIcon') attr.name = 'hasIcon';
      });
  });

  return root.toSource();
};

export default transform;
