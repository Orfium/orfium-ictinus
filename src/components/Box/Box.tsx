import React, { forwardRef } from 'react';
import { sprinkles, type Sprinkles } from 'theme/vanilla-extract/sprinkles';

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & Sprinkles;

const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...rest }, ref) => {
  const sprinkleClass = sprinkles(rest);

  return (
    <div ref={ref} className={sprinkleClass}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
export default Box;
