import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const validColors = ['teal', 'red', 'purple', 'teal'];
  const attributesToRemove = ['isChecked', 'badgeNumber', 'disabled', 'thumbnail'];

  root.find(j.JSXElement, { openingElement: { name: { name: 'Chip' } } }).forEach((path) => {
    path.node.openingElement.attributes.forEach((attribute) => {
      if (!attribute.name || !attribute.name.name) {
        // Skip if attribute name is missing
        return;
      }

      const attributeName = attribute.name.name;

      // Rename fill to color and adjust values
      if (attributeName === 'fill') {
        attribute.name.name = 'color';

        // Check if the value is a string literal
        if (attribute.value.type === 'StringLiteral') {
          if (!validColors.includes(attribute.value.value)) {
            attribute.value.value = 'blue';
          }
        }

        // Check if the value is within JSX expression container
        else if (
          attribute.value.type === 'JSXExpressionContainer' &&
          attribute.value.expression.type === 'StringLiteral'
        ) {
          if (!validColors.includes(attribute.value.expression.value)) {
            attribute.value.expression.value = 'blue';
          }
        }
      }

      // Remove deprecated attributes
      if (attributesToRemove.includes(attributeName)) {
        j(attribute).remove();
      }
    });
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
