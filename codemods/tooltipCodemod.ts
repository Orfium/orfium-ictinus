import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.JSXElement, { openingElement: { name: { name: 'Tooltip' } } }).forEach((path) => {
    const attributesToRemove = ['size', 'isTransparent'];

    path.node.openingElement.attributes = path.node.openingElement.attributes.filter(
      (attribute) => {
        if (!attribute.name || !attribute.name.name) {
          // Skip if attribute name is missing
          return true;
        }

        const attributeName = attribute.name.name;

        // Rename attributes
        if (attributeName === 'interactive') {
          attribute.name.name = 'isInteractive';
        } else if (attributeName === 'delay') {
          attribute.name.name = 'delayIn';
        }

        // Remove deprecated attributes
        return !attributesToRemove.includes(attributeName);
      }
    );
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
