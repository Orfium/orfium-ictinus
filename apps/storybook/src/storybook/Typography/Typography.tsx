import { Unstyled } from '@storybook/addon-docs/blocks';
import type { FCC } from 'react';
import { type ComponentProps, useMemo } from 'react';

import { Typography as TypographyComponent, type TypographyVariant } from '@orfium/ictinus';

export type TypographyProps = {
  variant: TypographyVariant;
};

const Typography: FCC<TypographyProps & ComponentProps<typeof TypographyComponent>> = ({ children, variant, ...rest }) => {
  const id = useMemo(
    () => children?.toString().toLowerCase().split(' ').join('-'),
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
