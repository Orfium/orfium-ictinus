import uniqueId from 'lodash/uniqueId';
import * as React from 'react';
import dayjs from 'utils/date';
import { TestId } from 'utils/types';

/** A function that generates a unique key by making a value randomly based on time also */
export const generateUniqueKey = (elementType = ''): string =>
  elementType + '_' + (Date.now() + Math.random()).toString(36).substr(2, 9);

/** A function that generates a unique id using lodash's uniqueId util */
export const generateUniqueID = (prefix = ''): string =>
  process.env.NODE_ENV !== 'test' ? uniqueId(prefix) : `${prefix}_00`;

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
export const getLocaleFormat = (dateFormat: string | undefined) => {
  const localeFormat = dayjs()?.localeData()?.longDateFormat('L');

  return dateFormat ? dateFormat : localeFormat;
};

/**
 *  A function that takes an array of errors and the component props and throws an error
 *  if the condition is met
 * */
export const errorHandler = <T>(
  errors: { condition: (p: T) => boolean; error: Error | ((p: T) => Error) }[],
  props: T
) =>
  errors.map(({ condition, error }) => {
    if (condition(props)) {
      if (typeof error === 'function') {
        throw error(props);
      } else {
        throw error;
      }
    }
  });
