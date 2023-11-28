import React, { forwardRef } from 'react';

import type { BoxProps as BoxProps } from '../Box';

type TestProps = BoxProps;

const Test = forwardRef<HTMLDivElement, TestProps>((props, ref) => (
  <div {...props} ref={ref}>
    {props.children}
  </div>
));
Test.displayName = 'Test';

export default Test;
