declare const DYNAMIC_ATTRIBUTES_LIST: {
    elementType: string;
    attributeName: string;
}[];
/**
 * Changes the dynamic value of the attribute to static
 * @param prop
 * @param attributeConfig
 */
declare function changeAttributeValueToStatic(prop: any, attributeConfig: {
    elementType: string;
    attributeName: string;
}): void;
/**
 * This is a recursive function that crawls all the nested props of the tree and spots the elements' attributes
 * @param child
 */
declare const storyTreeCrawler: (child: any) => void;
