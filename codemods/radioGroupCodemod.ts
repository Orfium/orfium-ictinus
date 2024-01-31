import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('RadioGroup').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // Remove deprecated attributes 'defaultValue', 'name'
        if (['defaultValue', 'name'].includes(attr.name)) {
          j(attrPath).remove();
        }
      });
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
