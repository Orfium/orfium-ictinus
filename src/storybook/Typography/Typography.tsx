import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react/dist/emotion-react.cjs';
import React, { FC, useMemo } from 'react';

import TypographyComponent, { TypographyType } from '../../components/Typography';

export type TypographyProps = {
  children: string;
  type: TypographyType;
  css?: SerializedStyles;
};

const Typography: FC<TypographyProps> = ({ children, type, ...rest }) => {
  const id = useMemo(
    () => children?.toLowerCase && children?.toLowerCase().split(' ').join('-'),
    [children]
  );

  return (
    <TypographyComponent id={id} type={type} {...rest}>
      {children}
    </TypographyComponent>
  );
};

export default Typography;
