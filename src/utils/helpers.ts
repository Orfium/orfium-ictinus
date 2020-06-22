import React from 'react';
import { BreadcrumbItemData } from 'components/Breadcrumb/types';
import { get, last } from 'lodash';

/** A function that generates a unique id by making a value randomly based on time also */
export const generateUniqueID = () => '_' + (Date.now() + Math.random()).toString(36).substr(2, 9);

/** A function that takes two strings to generate a test data id by combining them if both exist */
export const generateTestDataId = (defaultId: string, customId?: string) =>
  customId ? `${defaultId}-${customId}` : defaultId;

/** A function that determines if the element passed is a function and a react element */
export function isComponentFunctionType(
  element: string | number | JSX.Element | Function
): element is Function {
  return typeof element === 'function' && React.isValidElement(element());
}

export const getLastDataItemProperty = (data: BreadcrumbItemData[], propertyPath: string) => {
  return get(last(data), propertyPath, undefined);
};
