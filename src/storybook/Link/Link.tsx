import { Unstyled } from '@storybook/addon-docs/blocks';
import type { FCC } from 'react';

import LinkComponent from '../../components/Link';
import { LinkResetFontSmooth, LinkWrapper } from './Link.style';

export type LinkProps = {
  href?: string;
  children: string;
};

const Link: FCC<LinkProps> = ({ href, children, ...rest }) => {
  const target = href?.startsWith('#') ? '_self' : undefined;

  return (
    <LinkComponent
      placement="inline"
      css={[LinkWrapper, LinkResetFontSmooth]}
      href={href}
      target={target}
      {...rest}
    >
      <Unstyled>{children}</Unstyled>
    </LinkComponent>
  );
};

export default Link;
