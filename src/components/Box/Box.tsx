import type { CSSObject } from '@emotion/react';
import { css } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import { omit } from 'lodash-es';
import React, { forwardRef } from 'react';

import { BoxWrapper } from './Box.style';
import type { StyledBoxProps } from './Box.types';
import { cssResolver, omitedCSSprops, pickCSSProperties, pickNonCSSProps } from './Box.utilities';

export type BoxProps = StyledBoxProps & React.HTMLAttributes<HTMLDivElement>;

const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...rest }, ref) => {
  const theme = useTheme();
  const cssPropsOnly = pickCSSProperties(rest);
  const props = pickNonCSSProps(rest);
  const resolver = cssResolver(theme, cssPropsOnly);

  const propsToCss: CSSObject = {
    ...omit(cssPropsOnly, omitedCSSprops),
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
    ...resolver('gap', 'gap', 'spacing'),
    ...resolver('backgroundColor', 'backgroundColor', 'backgroundColor'),
  };

  return (
    <BoxWrapper ref={ref} css={[css(propsToCss)]} {...props}>
      {children}
    </BoxWrapper>
  );
});

Box.displayName = 'Box';
export default Box;
