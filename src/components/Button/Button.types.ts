/** All button types. Used by Button component */
export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'inverted'
  | 'invertedAlt';

/** The 3 main button types: primary, secondary, tertiary. This is used by IconButton and DropdownButton components */
export type PrimitiveButtonTypes = Exclude<ButtonTypes, 'danger' | 'inverted' | 'invertedAlt'>;
