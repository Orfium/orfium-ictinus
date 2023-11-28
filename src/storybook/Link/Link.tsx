import { Unstyled } from '@storybook/blocks';
import type { FCC } from 'react';

import { LinkResetFontSmooth, LinkWrapper } from './Link.style';
import LinkComponent from '../../components/Link';

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
