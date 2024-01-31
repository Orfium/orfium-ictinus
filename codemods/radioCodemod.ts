import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('Radio').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // Remove deprecated attributes 'filled', 'name', 'required'
        if (['filled', 'name', 'required'].includes(attr.name)) {
          j(attrPath).remove();
        }

        // Note: Handling of 'checked', 'onChange', and 'disabled'
        // properties are omitted as they require context-specific transformations
        // related to the parent 'RadioGroup' component.
      });
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
