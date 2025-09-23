import { type Sprinkles, sprinkles } from '../../sprinkles';

export function extractBoxProps<S extends Record<string, unknown>>(props: S) {
  const boxProps = {} as Pick<S, ('className' | 'styles' | keyof Sprinkles) & keyof S>;
  const restProps = {} as Omit<S, 'className' | 'styles' | keyof Sprinkles>;

  for (const [name, value] of Object.entries(props)) {
    if (name === 'className' || name === 'styles' || sprinkles.properties.has(name as never)) {
      if (value !== null && value !== undefined) {
        boxProps[name] = value;
      }
    } else {
      // @ts-expect-error -- too complex
      restProps[name] = value;
    }
  }

  return { boxProps, restProps };
}
