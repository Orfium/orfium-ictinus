import { type ReactNode } from 'react';
import { Text } from '~/vanilla/Text';
import { Box } from '../Box';
import { button } from './Button.css';

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <Box as="button" className={button}>
      <Text variant="label2">{children}</Text>
    </Box>
  );
}
