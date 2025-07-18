import { type ReactNode } from 'react';
import { type Variants, variants } from './Text.css';

type TextProps = Variants & {
  children: ReactNode;
};

export function Text({ variant, children }: TextProps) {
  return <span className={variants({ variant })}>{children}</span>;
}
