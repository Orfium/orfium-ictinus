/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };
