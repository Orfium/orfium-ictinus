import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all Avatar components
  root.findJSXElements('Avatar').forEach((path) => {
    j(path)
      .find(j.JSXAttribute)
      .forEach((attrPath) => {
        const attr = attrPath.node.name;

        // If the attribute is size, update it
        if (attr.name === 'size') {
          const sizeValue = attrPath.node.value.value;
          switch (sizeValue) {
            case 'xs':
              attrPath.node.value.value = '1';
              break;
            case 'sm':
            case 'md':
              attrPath.node.value.value = '2';
              break;
            case 'lg':
              attrPath.node.value.value = '4';
              break;
          }
        }

        // If the attribute is color, update it
        if (attr.name === 'color') {
          const colorValue = attrPath.node.value.value;
          attrPath.node.value.value = colorValue.split('-')[0];
        }

        // Update color property
        const colorValue = attrPath.node.value.value;
        if (!['blue', 'teal', 'purple', 'red', 'orange'].includes(colorValue)) {
          attrPath.node.value.value = 'blue';
        }

        // If the attribute is iconName, update it
        if (attr.name === 'iconName') {
          attr.name = 'src';
        }
      });
  });

  return root.toSource();
};

export default transform;
