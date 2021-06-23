/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };

/** A generic type for native events */
export type EventProps = {
  onClick?: (setLoading?: (isLoading: boolean) => void) => void;
  onBlur?: () => void;
};

export type FlexDirectionProperty = 'row' | 'column' | 'row-reverse' | 'column-reverse';
