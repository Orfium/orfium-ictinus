import type { FCC } from 'react';
import React, { useMemo } from 'react';

import { LinkResetFontSmooth, LinkWrapper } from './Link.style';
import LinkComponent from '../../components/Link';

export type TypographyProps = {
  children: string;
};

const Link: FCC<TypographyProps> = ({ children, ...rest }) => {
  const id = useMemo(
    () => children?.toLowerCase && children?.toLowerCase().split(' ').join('-'),
    [children]
  );

  return (
    <LinkComponent css={[LinkWrapper, LinkResetFontSmooth]} id={id} {...rest}>
      {children}
    </LinkComponent>
  );
};

export default Link;
