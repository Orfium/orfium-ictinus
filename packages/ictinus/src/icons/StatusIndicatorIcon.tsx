import { forwardRef } from 'react';
import { IconPrimitive, type IconPrimitiveProps } from './IconPrimitive';

export const StatusIndicatorIcon = forwardRef<SVGSVGElement, IconPrimitiveProps>((props, ref) => (
  <IconPrimitive ref={ref} {...props}>
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="6" height="6" rx="3" fill="currentColor" />
    </svg>
  </IconPrimitive>
));

StatusIndicatorIcon.displayName = 'StatusIndicatorIcon';
