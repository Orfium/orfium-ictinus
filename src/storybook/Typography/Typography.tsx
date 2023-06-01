import React, { FC, useMemo } from 'react';

import TypographyComponent, { TypographyVariant } from '../../components/Typography';

export type TypographyProps = {
  children: string;
  variant: TypographyVariant;
};

const Typography: FC<TypographyProps> = ({ children, variant, ...rest }) => {
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
