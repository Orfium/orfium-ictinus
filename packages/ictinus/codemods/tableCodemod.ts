import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('Table').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // If the attribute is one of the ones that changed, update it
        if (attr.name === 'padded') attr.name = 'isPadded';
        if (attr.name === 'fixedHeader') attr.name = 'hasFixedHeader';
        if (attr.name === 'fixedCTA') attr.name = 'hasFixedCTA';
        if (attr.name === 'initialExpanded') attr.name = 'isInitiallyExpanded';
      });
  });

  return root.toSource();
};

export default transform;
