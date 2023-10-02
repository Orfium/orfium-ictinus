import useTheme from 'hooks/useTheme';
import React from 'react';

import { linkContainer } from './Link.style';
import { LinkTokens, getLinkTokens } from './Link.tokens';
import { LinkProps } from './Link.types';
import Icon from 'components/Icon';

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    htmlHref,
    type = 'primary',
    placement = 'block',
    size = 1,
    iconName,
    isDisabled,
    dataTestPrefixId,
    children,
  } = props;

  const theme = useTheme();

  const tokens = getLinkTokens(theme);

  return (
    <a
      href={htmlHref}
      css={linkContainer({ placement, type, size, isDisabled })}
      ref={ref}
      data-testid={`${dataTestPrefixId}_link`}
    >
      <span>{children}</span>
      {/** @TODO Set the right size for the icon based on tokens once Icon component is refactored */}
      {iconName && (
        <Icon name={iconName} color={tokens(`textColor.${type}.default` as LinkTokens)} size={12} />
      )}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
