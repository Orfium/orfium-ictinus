import { forwardRef } from 'react';
import { useSlotProps } from '../components/utils/Slots';
import { Box, type BoxProps } from '../vanilla/Box';

const SIZE = {
  xs: '3',
  sm: '4',
  md: '5',
  lg: '6',
} as const;

export type IconPrimitiveProps = Omit<BoxProps, 'size'> & {
  size?: keyof typeof SIZE;
};

export const IconPrimitive = forwardRef<SVGSVGElement, IconPrimitiveProps>((props, ref) => {
  props = useSlotProps(props, 'icon');
  const { children, size = 'sm', ...restProps } = props;

  return (
    <Box ref={ref as any} asChild size={SIZE[size]} role="img" {...restProps}>
      {children}
    </Box>
  );
});

IconPrimitive.displayName = 'IconPrimitive';
