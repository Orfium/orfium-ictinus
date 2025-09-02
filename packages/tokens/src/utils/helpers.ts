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



