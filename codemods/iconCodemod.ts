import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all Icon components
  root.findJSXElements('Icon').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // If the attribute is one of the deprecated ones, remove it
        if (['variant'].includes(attr.name)) {
          j(attrPath).remove();
        }
      });
  });

  return root.toSource();
};

export default transform;
