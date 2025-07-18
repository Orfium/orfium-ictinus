import clsx from 'clsx';
import { sprinkles, type Sprinkles } from './sprinkles.css';

export type Atoms = Sprinkles;

export const atoms = ({ ...rest }: Atoms) => {
  const sprinklesClasses = sprinkles(rest);

  return clsx(sprinklesClasses);
};
