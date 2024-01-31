import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('Switch').forEach((path) => {
    let labelPlacementValue = null;

    // Process attributes
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attrName = attrPath.node.name.name;

        // Handle labelPlacement
        if (attrName === 'labelPlacement') {
          labelPlacementValue = attrPath.node.value;
          attrPath.node.name.name = 'labelConfig';
          attrPath.node.value = j.jsxExpressionContainer(
            j.objectExpression([
              j.objectProperty(
                j.identifier('placement'),
                labelPlacementValue.expression || labelPlacementValue
              ),
            ])
          );
        }

        // Rename checked to isSelected
        if (attrName === 'checked') {
          attrPath.node.name.name = 'isSelected';
        }
      });
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
