import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react/dist/emotion-react.cjs';
import React, { FC, useMemo } from 'react';

import TypographyComponent, { TypographyVariant } from '../../components/Typography';

export type TypographyProps = {
  children: string;
  variant: TypographyVariant;
  css?: SerializedStyles;
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
