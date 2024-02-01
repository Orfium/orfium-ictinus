import type { Transform } from 'jscodeshift';

const iconReplaceMap = {
  chevronLargeRight: 'chevronRight',
  chevronSmallRight: 'chevronRight',
  arrowDown: 'chevronDown',
  arrowRight: 'chevronRight',
  dotsVertical: 'moreOptions',
  restart: 'redo',
  alert: 'warning',
  auto: 'settings',
  calendarFilled: 'calendar',
  conflicts: 'conflict',
  digitalUse: 'digital',
  earnings2: 'earnings',
  entity: 'entities',
  externalLinkV2: 'link',
  fatArrowLeft: 'arrowLeft',
  fatArrowRight: 'arrowRight',
  globalItem: 'review',
  infoFilled: 'info',
  licence: 'license',
  musicNote: 'asset',
  triangleWarning: 'warning',
  view: 'eye',
};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const updateIconName = (attribute) => {
    if (attribute && attribute.name && attribute.name.name === 'name') {
      if (attribute.value.type === 'JSXExpressionContainer') {
        const expression = attribute.value.expression;
        // Check for both string literals and expressions
        if (expression.type === 'StringLiteral' && iconReplaceMap[expression.value]) {
          attribute.value.expression = j.stringLiteral(iconReplaceMap[expression.value]);
        } else if (expression.type === 'Literal' && iconReplaceMap[expression.value]) {
          attribute.value.expression = j.literal(iconReplaceMap[expression.value]);
        }
      } else if (
        attribute.value.type === 'StringLiteral' &&
        iconReplaceMap[attribute.value.value]
      ) {
        attribute.value = j.stringLiteral(iconReplaceMap[attribute.value.value]);
      }
    }
  };

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: (n) => ['Icon', 'IconButton'].includes(n) } },
    })
    .forEach((path) => {
      path.node.openingElement.attributes.forEach(updateIconName);
    });

  return root.toSource({ quote: 'single' });
};

export default transform;
