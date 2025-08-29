import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('TextArea').forEach((path) => {
    let hintMsgValue = null;

    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attrName = attrPath.node.name.name;

        // Remove deprecated attributes and store hintMsg value
        if (attrName === 'hintMsg') {
          hintMsgValue = attrPath.node.value.expression || attrPath.node.value;
          j(attrPath).remove();
        } else if (['styleType', 'status'].includes(attrName)) {
          j(attrPath).remove();
        }

        // Rename attributes
        const renameMap = {
          required: 'isRequired',
          disabled: 'isDisabled',
          resizeEnabled: 'isResizeEnabled',
        };

        if (attrName in renameMap) {
          attrPath.node.name.name = renameMap[attrName];
        }
      });

    // Transform hintMsg
    if (hintMsgValue) {
      const hintAttribute = j.jsxAttribute(
        j.jsxIdentifier('hint'),
        j.jsxExpressionContainer(
          j.objectExpression([
            // Assuming default type as "normal"
            j.objectProperty(j.identifier('type'), j.literal('normal')),
            j.objectProperty(j.identifier('hintMessage'), hintMsgValue),
            // Add 'id' if needed
            // j.objectProperty(j.identifier('id'), j.literal('some-id')),
          ])
        )
      );

      // Add transformed hintMsg as 'hint' attribute
      path.node.openingElement.attributes.push(hintAttribute);
    }
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
