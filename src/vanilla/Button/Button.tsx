import { type ReactNode } from 'react';
import { Text } from '~/vanilla/Text';
import { button } from './Button.css';

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className={button}>
      <Text variant="label2">{children}</Text>
    </button>
  );
}
