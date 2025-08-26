import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Rename Loader to ProgressIndicator in import declarations
  root
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === '@orfium/ictinus')
    .forEach((path) => {
      path.node.specifiers.forEach((specifier) => {
        if (specifier.imported && specifier.imported.name === 'Loader') {
          specifier.imported.name = 'ProgressIndicator';
        }
      });
    });

  // Update Loader to ProgressIndicator in JSX, handle type changes, and remove color
  root.find(j.JSXElement).forEach((path) => {
    const openingElement = path.node.openingElement;

    // Check for Loader in opening element
    if (openingElement.name.name === 'Loader') {
      openingElement.name.name = 'ProgressIndicator';

      openingElement.attributes.forEach((attribute) => {
        if (attribute.name && attribute.name.name === 'type') {
          // Convert type based on the old values
          const typeValue = attribute.value.value;
          if (typeValue === 'dots' || typeValue === 'indeterminate') {
            attribute.value.value = 'linear';
          } else if (typeValue === 'spinner') {
            attribute.value.value = 'circular';
          }
        } else if (attribute.name && attribute.name.name === 'color') {
          // Remove color attribute
          j(attribute).remove();
        }
      });
    }
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
