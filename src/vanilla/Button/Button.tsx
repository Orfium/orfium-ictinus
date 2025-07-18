import { type ReactNode } from 'react';
import { button } from './Button.css';

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button className={button}>{children}</button>;
}
