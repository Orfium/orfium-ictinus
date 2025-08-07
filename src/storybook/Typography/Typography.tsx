import { Unstyled } from '@storybook/addon-docs/blocks';
import type { FCC } from 'react';
import { useMemo } from 'react';

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
    <Unstyled>
      <TypographyComponent id={id} variant={variant} {...rest}>
        {children}
      </TypographyComponent>
    </Unstyled>
  );
};

export default Typography;
