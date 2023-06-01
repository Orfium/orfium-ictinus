import { css, CSSObject } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import React, { forwardRef, ReactNode } from 'react';

import type { StyledBoxProps } from './Box.types';
import { cssResolver } from './Box.utilities';

export type BoxProps = StyledBoxProps & {
  css?: CSSObject;
  children?: ReactNode;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...rest }, ref) => {
  const { css: cssProps, ...otherProps } = rest;
  const theme = useTheme();
  const resolver = cssResolver(theme, otherProps);

  const propsToCss: CSSObject = {
    ...otherProps,
    ...resolver('padding', 'p', 'spacing'),
    ...resolver('paddingTop', 'pt', 'spacing'),
    ...resolver('paddingRight', 'pr', 'spacing'),
    ...resolver('paddingLeft', 'pl', 'spacing'),
    ...resolver('paddingBottom', 'pb', 'spacing'),
    ...resolver('padding', 'py', 'spacing'),
    ...resolver('padding', 'px', 'spacing'),
    ...resolver('margin', 'm', 'spacing'),
    ...resolver('marginTop', 'mt', 'spacing'),
    ...resolver('marginRight', 'mr', 'spacing'),
    ...resolver('marginLeft', 'ml', 'spacing'),
    ...resolver('marginBottom', 'mb', 'spacing'),
    ...resolver('margin', 'my', 'spacing'),
    ...resolver('margin', 'mx', 'spacing'),
    ...resolver('top', 'top', 'spacing'),
    ...resolver('right', 'right', 'spacing'),
    ...resolver('left', 'left', 'spacing'),
    ...resolver('bottom', 'bottom', 'spacing'),
    ...resolver('color', 'color', 'color'),
    ...resolver('backgroundColor', 'backgroundColor', 'backgroundColor'),
  };

  return (
    <div ref={ref} css={[css(propsToCss), cssProps]}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
export default Box;
