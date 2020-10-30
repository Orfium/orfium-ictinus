import * as React from 'react';
import { TestId } from 'utils/types';
import dayjs from 'dayjs';

/** A function that generates a unique id by making a value randomly based on time also */
export const generateUniqueID = () => '_' + (Date.now() + Math.random()).toString(36).substr(2, 9);

/** A function that takes two strings to generate a test data id by combining them if both exist */
export const generateTestDataId = (defaultId: TestId, customId?: TestId) =>
  customId ? `${defaultId}-${customId}` : defaultId;

/** A function that determines if the element passed is a function and a react element */
export function isComponentFunctionType(
  // TODO this must be fixed @Panagiotis
  // eslint-disable-next-line @typescript-eslint/ban-types
  element: string | number | JSX.Element | Function
  // eslint-disable-next-line @typescript-eslint/ban-types
): element is Function {
  return typeof element === 'function' && React.isValidElement(element());
}

/**  A function that retrieves the correct date format based on system's locale */
export const getLocaleFormat = (hasLocalizedFormat: boolean, fallbackDateFormat: string) => {
  const localeFormat = dayjs()
    ?.localeData()
    ?.longDateFormat('L');

  return hasLocalizedFormat && localeFormat ? localeFormat : fallbackDateFormat;
};
