import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Update Pagination props in JSX
  root.find(j.JSXElement).forEach((path) => {
    const openingElement = path.node.openingElement;

    // Check for Pagination in opening element
    if (openingElement.name.name === 'Pagination') {
      openingElement.attributes.forEach((attribute) => {
        if (attribute.name && attribute.name.name === 'nextPageDisabled') {
          attribute.name.name = 'isNextPageDisabled';
        } else if (attribute.name && attribute.name.name === 'prevPageDisabled') {
          attribute.name.name = 'isPrevPageDisabled';
        } else if (attribute.name && attribute.name.name === 'hideEnhancedPaginationButtons') {
          attribute.name.name = 'isEnhancedPaginationVisible';
          // Invert the boolean value
          if (attribute.value.type === 'JSXExpressionContainer') {
            attribute.value = j.jsxExpressionContainer(
              j.logicalExpression('!', attribute.value.expression)
            );
          } else if (attribute.value.type === 'BooleanLiteral') {
            attribute.value = j.booleanLiteral(!attribute.value.value);
          }
        }
      });
    }
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
