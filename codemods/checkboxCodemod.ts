import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('CheckBox').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // Remove 'filled' attribute
        if (attr.name === 'filled') {
          j(attrPath).remove();
        }

        // Replace 'label' with 'labelConfig'
        if (attr.name === 'label') {
          attr.name = 'labelConfig';
          attrPath.node.value = j.jsxExpressionContainer(
            j.objectExpression([
              j.property(
                'init',
                j.identifier('helpText'),
                attrPath.node.value.expression || j.stringLiteral('')
              ),
            ])
          );
        }

        // Rename 'checked' to 'isSelected'
        if (attr.name === 'checked') {
          attr.name = 'isSelected';
        }
      });
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
