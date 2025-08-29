import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all Button components
  root.findJSXElements('Filter').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        if (['styleType'].includes(attr.name)) {
          j(attrPath).remove();
        }

        // If the attribute is one of the ones that changed, update it
        if (attr.name === 'multi') attr.name = 'isMulti';
        if (attr.name === 'disabled') attr.name = 'isDisabled';
        if (attr.name === 'selectedItem') attr.name = 'selectedFilter';
        if (attr.name === 'onSelect') attr.name = 'onChange';
      });
  });

  return root.toSource();
};

export default transform;
