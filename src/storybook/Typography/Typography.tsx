import type { FCC} from 'react';
import React, { useMemo } from 'react';

import type { TypographyVariant } from '../../components/Typography';
import TypographyComponent from '../../components/Typography';

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
