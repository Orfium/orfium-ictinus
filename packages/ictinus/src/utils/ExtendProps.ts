/**
 * Creates a new type by extending T1 with T2, where T2's properties override T1's.
 */
export type ExtendProps<T1, T2> = NonNullable<T2> &
  Omit<NonNullable<T1>, keyof NonNullable<T1> & keyof NonNullable<T2>>;