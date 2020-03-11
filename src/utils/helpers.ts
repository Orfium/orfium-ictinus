import React from 'react';

/** A function that generates a unique id by making a value randomly based on time also */
export const generateUniqueID = () => '_' + (Date.now() + Math.random()).toString(36).substr(2, 9);

/** A function that determines if the element passed is a function and a react element */
export function isComponentFunctionType(
  element: string | number | JSX.Element | Function
): element is Function {
  return typeof element === 'function' && React.isValidElement(element());
}
