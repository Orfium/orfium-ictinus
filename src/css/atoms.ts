import { sprinkles, type Sprinkles } from './sprinkles.css';

export type Atoms = Sprinkles;

export const atoms = ({ ...rest }: Atoms) => sprinkles(rest);
