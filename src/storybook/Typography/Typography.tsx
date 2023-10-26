import React, { FCC, useMemo } from 'react';

import TypographyComponent, { TypographyVariant } from '../../components/Typography';

export type TypographyProps = {
  children: string;
  variant: TypographyVariant;
};

const Typography: FCC<TypographyProps> = ({ children, variant, ...rest }) => {
  const id = useMemo(
    () => children?.toLowerCase && children?.toLowerCase().split(' ').join('-'),
    [children]
  );

  return (
    <TypographyComponent id={id} variant={variant} {...rest}>
      {children}
    </TypographyComponent>
  );
};

export default Typography;
