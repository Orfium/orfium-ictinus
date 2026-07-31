import { forwardRef } from 'react';
import { IconPrimitive, type IconPrimitiveProps } from './IconPrimitive';

export const SparklesIcon = forwardRef<SVGSVGElement, IconPrimitiveProps>((props, ref) => (
  <IconPrimitive ref={ref} {...props}>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6665 5.99996L13.4998 4.16663L15.3332 3.33329L13.4998 2.49996L12.6665 0.666626L11.8332 2.49996L9.99984 3.33329L11.8332 4.16663L12.6665 5.99996ZM7.6665 6.33329L5.99984 2.66663L4.33317 6.33329L0.666504 7.99996L4.33317 9.66663L5.99984 13.3333L7.6665 9.66663L11.3332 7.99996L7.6665 6.33329ZM12.6665 9.99996L11.8332 11.8333L9.99984 12.6666L11.8332 13.5L12.6665 15.3333L13.4998 13.5L15.3332 12.6666L13.4998 11.8333L12.6665 9.99996Z"
        fill="currentColor"
      />
    </svg>
  </IconPrimitive>
));

SparklesIcon.displayName = 'SparklesIcon';
