/**
 * Creates a new type by extending T1 with T2, where T2's properties override T1's.
 */
export type ExtendProps<T1, T2> = NonNullable<T1> & NonNullable<T2>;
