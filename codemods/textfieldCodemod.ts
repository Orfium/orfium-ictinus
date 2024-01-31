import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('TextField').forEach((path) => {
    let statusValue = null;

    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attrName = attrPath.node.name.name;

        // Store status value for later use
        if (attrName === 'status') {
          statusValue = attrPath.node.value.expression || attrPath.node.value;
          j(attrPath).remove();
        }

        // Remove deprecated attributes
        if (['rightIcon', 'leftIcon', 'locked', 'lean', 'styleType'].includes(attrName)) {
          j(attrPath).remove();
        }

        // Rename attributes
        const renameMap = {
          multi: 'isMulti',
          disabled: 'isDisabled',
          readOnly: 'isReadOnly',
          required: 'isRequired',
        };

        if (attrName in renameMap) {
          attrPath.node.name.name = renameMap[attrName];
        }

        // Transform hintMsg
        if (attrName === 'hintMsg') {
          const hintMsgValue = attrPath.node.value.expression || attrPath.node.value;
          attrPath.node.name.name = 'status';
          attrPath.node.value = j.jsxExpressionContainer(
            j.objectExpression([
              j.objectProperty(j.identifier('type'), statusValue || j.literal(null)),
              j.objectProperty(j.identifier('hintMessage'), hintMsgValue),
            ])
          );
        }
      });
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
