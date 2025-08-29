import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.findJSXElements('Select').forEach((path) => {
    let hintMsgValue = null;
    let statusValue = null;

    // Process attributes
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attrName = attrPath.node.name.name;

        // Remove deprecated attributes
        if (
          [
            'defaultValue',
            'rightIcon',
            'leftIcon',
            'locked',
            'lean',
            'styleType',
            'dark',
            'status',
            'hasMinWidthCompat',
            'onClearAllValues',
            'multiValues',
            'hintMsg',
          ].includes(attrName)
        ) {
          if (attrName === 'status') {
            statusValue = attrPath.node.value;
          }
          if (attrName === 'hintMsg') {
            hintMsgValue = attrPath.node.value;
          }
          j(attrPath).remove();
        }

        // Rename attributes
        const renameMap = {
          highlightSearch: 'hasHighlightSearch',
          multi: 'isMulti',
          disabled: 'isDisabled',
          creatable: 'isCreatable',
          handleSelectedOption: 'onChange',
          selectedOptions: 'selectedOption', // Renaming for both singular and plural cases
        };

        if (attrName in renameMap) {
          attrPath.node.name.name = renameMap[attrName];
        }

        // TODO: Handle 'onOptionDelete', 'multiValuesHandler', 'onMultiValueCreate', 'maxMultiValues'
        // These require more specific information on how to transform
      });

    // Transform hintMsg into an object
    if (hintMsgValue || statusValue) {
      const hintAttribute = j.jsxAttribute(
        j.jsxIdentifier('status'),
        j.jsxExpressionContainer(
          j.objectExpression([
            j.objectProperty(
              j.identifier('type'),
              statusValue.value === 'hint' || statusValue.value === 'success'
                ? j.literal('normal')
                : statusValue || j.literal(null)
            ),
            j.objectProperty(j.identifier('hintMessage'), hintMsgValue || j.literal(null)),
          ])
        )
      );

      // Add transformed hintMsg as 'hint' attribute
      path.node.openingElement.attributes.push(hintAttribute);
    }

    // TODO: Handle 'onClear' replacement for 'onClearAllValues'
  });

  return root.toSource({ quote: 'single' });
};

export default transform;
