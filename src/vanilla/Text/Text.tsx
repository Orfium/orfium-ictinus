import { type ReactNode } from 'react';
import { Box } from '../Box';
import { type Variants, variants } from './Text.css';

type TextProps = Variants & {
  children: ReactNode;
};

export function Text({ variant, children }: TextProps) {
  return (
    <Box as="span" display="inline-flex" className={variants({ variant })}>
      {children}
    </Box>
  );
}
