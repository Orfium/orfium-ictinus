import { forwardRef } from 'react';
import { Icon, type IconProps } from './Icon';

export const StatusIndicatorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="6" height="6" rx="3" fill="currentColor" />
    </svg>
  </Icon>
));

StatusIndicatorIcon.displayName = 'StatusIndicatorIcon';
