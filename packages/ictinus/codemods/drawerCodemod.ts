import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Update import declarations from '@orfium/ictinus'
  root
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value.includes('@orfium/ictinus'))
    .forEach((path) => {
      path.node.specifiers.forEach((specifier) => {
        if (specifier.imported && specifier.imported.name === 'MenuItem') {
          specifier.imported.name = 'NavigationMenuItem';
        }
        if (specifier.local && specifier.local.name === 'MenuItem') {
          specifier.local.name = 'NavigationMenuItem';
        }
      });
    });

  // Update function return types and other usages of MenuItem
  root.find(j.Identifier, { name: 'MenuItem' }).forEach((path) => {
    // Ensure the change is only made for identifiers related to '@orfium/ictinus' import
    const parentPath = path.parentPath;
    if (
      parentPath &&
      parentPath.node.type === 'ImportSpecifier' &&
      parentPath.parentPath.node.source.value.includes('@orfium/ictinus')
    ) {
      path.node.name = 'NavigationMenuItem';
    }
  });

  // Rename Drawer to Navigation in import declarations
  root
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === '@orfium/ictinus')
    .forEach((path) => {
      path.node.specifiers.forEach((specifier) => {
        if (specifier.imported && specifier.imported.name === 'Drawer') {
          specifier.imported.name = 'Navigation';
        }
      });
    });

  // Update Drawer to Navigation in JSX and rename expanded to isExpanded
  root.find(j.JSXElement).forEach((path) => {
    const openingElement = path.node.openingElement;
    const closingElement = path.node.closingElement;

    // Check for Drawer in opening element
    if (openingElement.name.name === 'Drawer') {
      openingElement.name.name = 'Navigation';

      // Update closing element if it exists
      if (closingElement && closingElement.name) {
        closingElement.name.name = 'Navigation';
      }

      // Rename 'expanded' attribute to 'isExpanded'
      openingElement.attributes.forEach((attribute) => {
        if (attribute.name && attribute.name.name === 'expanded') {
          attribute.name.name = 'isExpanded';
        }
      });
    }
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
