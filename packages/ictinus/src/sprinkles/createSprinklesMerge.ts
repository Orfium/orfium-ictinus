// https://github.com/optimizely-axiom/optiaxiom/blob/main/packages/react/src/sprinkles/createSprinklesMerge.ts
import clsx from 'clsx';

/**
 * Handle merging of classNames generated from sprinkle props by removing
 * classNames corresponding to overridden/duplicated css properties.
 */
export function createSprinklesMerge(
  ...properties: Array<{
    styles: Record<
      string,
      | { mappings: string[] }
      | {
          values: Record<string, { conditions?: Record<string, string>; defaultClass: string }>;
        }
    >;
  }>
) {
  const classNameToPropertyMapping: Record<string, string> = {};
  for (const [name, definition] of Object.entries({
    ...properties[0]?.styles,
    ...properties[1]?.styles,
  })) {
    if ('values' in definition) {
      for (const value of Object.values(definition.values)) {
        classNameToPropertyMapping[value.defaultClass] = `defaultClass:${name}`;
        if ('conditions' in value && value.conditions) {
          for (const [condition, className] of Object.entries(value.conditions)) {
            classNameToPropertyMapping[className] = `${condition}:${name}`;
          }
        }
      }
    }
  }

  return function sprinklesMerge(...classNames: Array<string | undefined>) {
    let parsedClassName: Record<string, string[]> = { _: [] };
    while (classNames.length) {
      const className = classNames.shift();
      if (!className) {
        continue;
      }
      parsedClassName = className.split(' ').reduce((result, className) => {
        className = className.trim();
        if (!className) {
          return result;
        }

        if (className in classNameToPropertyMapping) {
          result[classNameToPropertyMapping[className]] = [className];
        } else {
          result._.push(className);
        }

        return result;
      }, parsedClassName);
    }

    return clsx(...new Set(Object.values(parsedClassName).flat()));
  };
}
