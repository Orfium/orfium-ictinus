import { TestId } from './types';
/** A function that generates a unique key by making a value randomly based on time also */
export declare const generateUniqueKey: (elementType?: string) => string;
/** A function that generates a unique id using lodash's uniqueId util */
export declare const generateUniqueID: (prefix?: string) => string;
/** A function that takes two strings to generate a test data id by combining them if both exist */
export declare const generateTestDataId: (defaultId: TestId, customId?: TestId) => string;
/** A function that determines if the element passed is a function and a react element */
export declare function isComponentFunctionType(element: string | number | JSX.Element | Function): element is Function;
/**  A function that retrieves the correct date format based on system's locale */
export declare const getLocaleFormat: (dateFormat: string | undefined) => string;
/**
 *  A function that takes an array of errors and the component props and throws an error
 *  if the condition is met
 * */
export declare const errorHandler: <T>(errors: {
    condition: (p: T) => boolean;
    error: Error | ((p: T) => Error);
}[], props: T) => void[];
