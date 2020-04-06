/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };

/** A generic type for native events */
export type EventProps = {
  onClick?: () => void;
  onBlur?: () => void;
};
