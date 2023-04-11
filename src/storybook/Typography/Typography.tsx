import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react/dist/emotion-react.cjs';
import React, { FC, useMemo } from 'react';

import TypographyComponent, { TypographyRole } from '../../components/Typography';

export type TypographyProps = {
  children: string;
  role: TypographyRole;
  css?: SerializedStyles;
};

const Typography: FC<TypographyProps> = ({ children, role, ...rest }) => {
  const id = useMemo(
    () => children?.toLowerCase && children?.toLowerCase().split(' ').join('-'),
    [children]
  );

  return (
    <TypographyComponent id={id} role={role} {...rest}>
      {children}
    </TypographyComponent>
  );
};

export default Typography;
