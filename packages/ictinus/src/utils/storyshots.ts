const DYNAMIC_ATTRIBUTES_LIST = [
  { elementType: 'input', attributeName: 'id' },
  { elementType: 'label', attributeName: 'htmlFor' },
];

/**
 * Changes the dynamic value of the attribute to static
 * @param prop
 * @param attributeConfig
 */
function changeAttributeValueToStatic(
  prop: any,
  attributeConfig: { elementType: string; attributeName: string }
) {
  const { elementType, attributeName } = attributeConfig;
  if (prop?.type === elementType) {
    const dynamicAttributeValue = prop?.props[attributeName];
    const newStaticAttributeValue = dynamicAttributeValue && dynamicAttributeValue.split('_')[0];
    prop.props[attributeName] = newStaticAttributeValue;
  }
}

/**
 * This is a recursive function that crawls all the nested props of the tree and spots the elements' attributes
 * @param child
 */
const storyTreeCrawler: (child: any) => void = (child: any) => {
  child.children.forEach((prop: any) => {
    DYNAMIC_ATTRIBUTES_LIST.forEach((attr) => {
      changeAttributeValueToStatic(prop, attr);
    });

    if (prop.children) {
      storyTreeCrawler(prop);
    }
  });
};
