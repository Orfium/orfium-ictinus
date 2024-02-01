import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Rename SearchField to Search in import declarations
  root
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === '@orfium/ictinus')
    .forEach((path) => {
      path.node.specifiers.forEach((specifier) => {
        if (specifier.imported && specifier.imported.name === 'SearchField') {
          specifier.imported.name = 'Search';
        }
      });
    });

  // Update Drawer to Navigation in JSX and rename expanded to isExpanded
  root.find(j.JSXElement).forEach((path) => {
    const openingElement = path.node.openingElement;
    const closingElement = path.node.closingElement;

    // Check for Drawer in opening element
    if (openingElement.name.name === 'SearchField') {
      openingElement.name.name = 'Search';

      // Update closing element if it exists
      if (closingElement && closingElement.name) {
        closingElement.name.name = 'Search';
      }
    }
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
