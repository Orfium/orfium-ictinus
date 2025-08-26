import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === '@orfium/ictinus')
    .forEach((path) => {
      path.node.specifiers.forEach((specifier) => {
        if (specifier.imported && specifier.imported.name === 'Chip') {
          specifier.imported.name = 'Tag';
        }
      });
    });

  root.find(j.JSXElement).forEach((path) => {
    const openingElement = path.node.openingElement;
    const closingElement = path.node.closingElement;

    if (openingElement.name.name === 'Chip') {
      openingElement.name.name = 'Tag';

      if (closingElement && closingElement.name) {
        closingElement.name.name = 'Tag';
      }

      // Rename 'fill' attribute to 'color'
      openingElement.attributes.forEach((attribute) => {
        if (attribute.name && attribute.name.name === 'fill') {
          const colorValue = attribute.value.value;
          if (colorValue === 'neutralWhite') {
            attribute.value.value = 'neutral';
          }
          attribute.name.name = 'color';
        }
      });
    }
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
